import {
  createError,
  defineEventHandler,
  type H3Event,
  readBody,
} from "h3";

const WEBHOOK_URL =
  process.env.LEAD_TRACKER_WEBHOOK_URL;

const WEBHOOK_SECRET =
  process.env.LEAD_TRACKER_WEBHOOK_SECRET;


/* ============================================================
   CLIENT IP
   ============================================================ */

function getClientIp(event: H3Event) {
  const node = event.node;

  if (!node) return "";

  const forwarded =
    node.req.headers["x-forwarded-for"];

  if (typeof forwarded === "string") {
    return forwarded
      .split(",")[0]
      .trim();
  }

  if (
    Array.isArray(forwarded) &&
    forwarded.length > 0
  ) {
    return forwarded[0]
      .split(",")[0]
      .trim();
  }

  return (
    node.req.socket?.remoteAddress ||
    ""
  );
}


/* ============================================================
   CLIENT COUNTRY
   ============================================================ */

function getClientCountry(event: H3Event) {
  const node = event.node;

  if (!node) return "";

  const header =
    node.req.headers[
      "x-vercel-ip-country"
    ] ||
    node.req.headers[
      "cf-ipcountry"
    ];

  if (typeof header === "string") {
    return header;
  }

  if (
    Array.isArray(header) &&
    header.length > 0
  ) {
    return header[0];
  }

  return "";
}


/* ============================================================
   SMALL DELAY FOR RETRY
   ============================================================ */

function delay(ms: number) {
  return new Promise<void>(
    (resolve) => {
      setTimeout(resolve, ms);
    }
  );
}


/* ============================================================
   SEND TO APPS SCRIPT IN BACKGROUND
   ============================================================ */

async function deliverLeadToAppsScript(
  payload: Record<string, unknown>
) {
  if (
    !WEBHOOK_URL ||
    !WEBHOOK_SECRET
  ) {
    console.error(
      "[Lead Tracker] Missing environment variables."
    );

    return;
  }

  /*
   * We retry once if Google / network
   * temporarily fails.
   *
   * The customer is NOT waiting for this.
   */
  const maxAttempts = 2;

  for (
    let attempt = 1;
    attempt <= maxAttempts;
    attempt++
  ) {
    const controller =
      new AbortController();

    const timeout =
      setTimeout(() => {
        controller.abort();
      }, 20000);

    try {
      const response =
        await fetch(
          WEBHOOK_URL,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify(
                payload
              ),

            signal:
              controller.signal,
          }
        );

      const text =
        await response.text();

      let responseBody:
        | Record<string, unknown>
        | null = null;

      try {
        responseBody =
          JSON.parse(text);
      } catch {
        responseBody = null;
      }

      const appsScriptSuccess =
        response.ok &&
        responseBody?.success ===
          true;

      if (appsScriptSuccess) {
        console.log(
          "[Lead Tracker] Lead delivered successfully.",
          {
            lead_id:
              responseBody?.lead_id,

            lead_source:
              responseBody?.lead_source,

            attempt,
          }
        );

        return;
      }

      console.error(
        "[Lead Tracker] Apps Script rejected lead.",
        {
          attempt,
          status:
            response.status,
          response:
            responseBody ?? text,
        }
      );
    } catch (error) {
      console.error(
        "[Lead Tracker] Background delivery failed.",
        {
          attempt,
          error,
        }
      );
    } finally {
      clearTimeout(timeout);
    }

    /*
     * Retry once after a short pause.
     */
    if (
      attempt <
      maxAttempts
    ) {
      await delay(1000);
    }
  }

  console.error(
    "[Lead Tracker] Lead delivery permanently failed after retries."
  );
}


/* ============================================================
   API HANDLER
   ============================================================ */

export default defineEventHandler(
  async (event: H3Event) => {
    const node =
      event.node;

    if (!node) {
      throw createError({
        statusCode: 500,
        statusMessage:
          "Invalid event node",
      });
    }


    /* --------------------------------------------------------
       POST ONLY
       -------------------------------------------------------- */

    if (
      node.req.method !==
      "POST"
    ) {
      throw createError({
        statusCode: 405,
        statusMessage:
          "Method Not Allowed",
      });
    }


    /* --------------------------------------------------------
       ENVIRONMENT VARIABLES MUST EXIST
       -------------------------------------------------------- */

    if (
      !WEBHOOK_URL ||
      !WEBHOOK_SECRET
    ) {
      throw createError({
        statusCode: 500,
        statusMessage:
          "Missing lead tracker environment variables",
      });
    }


    /* --------------------------------------------------------
       READ BODY
       -------------------------------------------------------- */

    const body =
      await readBody(event);


    if (
      !body ||
      typeof body !==
        "object" ||
      Array.isArray(body)
    ) {
      throw createError({
        statusCode: 400,
        statusMessage:
          "Invalid JSON payload",
      });
    }


    const record =
      body as Record<
        string,
        unknown
      >;


    /* --------------------------------------------------------
       BASIC REQUIRED FIELD CHECK
       -------------------------------------------------------- */

    const name =
      String(
        record.name ||
        ""
      ).trim();

    const phone =
      String(
        record.phone ||
        ""
      ).trim();

    const email =
      String(
        record.email ||
        ""
      ).trim();


    if (
      !name ||
      !phone ||
      !email
    ) {
      throw createError({
        statusCode: 400,
        statusMessage:
          "Name, phone and email are required",
      });
    }


    /* --------------------------------------------------------
       BUILD APPS SCRIPT PAYLOAD
       -------------------------------------------------------- */

    const payload:
      Record<
        string,
        unknown
      > = {
        ...record,

        tracker_secret:
          WEBHOOK_SECRET,

        ip:
          record.ip ||
          getClientIp(event),

        country:
          record.country ||
          getClientCountry(
            event
          ),
      };


    /* ========================================================
       IMPORTANT SPEED CHANGE

       Apps Script + Google Sheets now run AFTER
       the HTTP response is returned.

       The browser no longer waits for:
       - Raw Leads
       - Sales Working
       - Meta Queue
       - Apps Script execution
       ======================================================== */

    event.waitUntil(
      deliverLeadToAppsScript(
        payload
      )
    );


    /* --------------------------------------------------------
       RETURN IMMEDIATELY TO WEBSITE
       -------------------------------------------------------- */

    return {
      success: true,

      accepted: true,

      processing:
        "background",
    };
  }
);