import { waitUntil } from "@vercel/functions";
import { createFileRoute } from "@tanstack/react-router";

const WEBHOOK_URL = process.env.LEAD_TRACKER_WEBHOOK_URL;

const WEBHOOK_SECRET = process.env.LEAD_TRACKER_WEBHOOK_SECRET;

/* ============================================================
   CLIENT DETAILS
   ============================================================ */

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return "";
}

function getClientCountry(request: Request) {
  return request.headers.get("x-vercel-ip-country") || request.headers.get("cf-ipcountry") || "";
}

/* ============================================================
   DELAY FOR RETRY
   ============================================================ */

function delay(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

/* ============================================================
   BACKGROUND DELIVERY TO APPS SCRIPT
   ============================================================ */

async function deliverLeadInBackground(payload: Record<string, unknown>) {
  if (!WEBHOOK_URL) {
    console.error("[Lead Tracker] WEBHOOK_URL missing in background task.");
    return;
  }

  const maxAttempts = 2;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 20000);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),

        signal: controller.signal,
      });

      const text = await response.text();

      let responseBody: Record<string, unknown> | null = null;

      try {
        responseBody = JSON.parse(text);
      } catch {
        responseBody = null;
      }

      if (response.ok && responseBody?.success === true) {
        console.log("[Lead Tracker] Background delivery successful.", {
          attempt,
          lead_id: responseBody.lead_id,
          lead_source: responseBody.lead_source,
        });

        return;
      }

      console.error("[Lead Tracker] Apps Script rejected background delivery.", {
        attempt,
        status: response.status,
        response: responseBody ?? text,
      });
    } catch (error) {
      console.error("[Lead Tracker] Background delivery error.", {
        attempt,
        error,
      });
    } finally {
      clearTimeout(timeout);
    }

    if (attempt < maxAttempts) {
      await delay(1000);
    }
  }

  console.error("[Lead Tracker] Lead delivery failed after all attempts.");
}

/* ============================================================
   /api/lead
   ============================================================ */

export const Route = createFileRoute("/api/lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        /* --------------------------------------------------
             ENVIRONMENT CHECK
             -------------------------------------------------- */

        if (!WEBHOOK_URL || !WEBHOOK_SECRET) {
          return Response.json(
            {
              success: false,
              error: "Missing lead tracker environment variables",
            },
            {
              status: 500,
            },
          );
        }

        /* --------------------------------------------------
             READ + VALIDATE REQUEST
             -------------------------------------------------- */

        let body: Record<string, unknown>;

        try {
          const parsed = await request.json();

          if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
            throw new Error("Invalid payload");
          }

          body = parsed as Record<string, unknown>;
        } catch {
          return Response.json(
            {
              success: false,
              error: "Invalid JSON payload",
            },
            {
              status: 400,
            },
          );
        }

        const name = String(body.name || "").trim();

        const phone = String(body.phone || "").trim();

        const email = String(body.email || "").trim();

        if (!name || !phone || !email) {
          return Response.json(
            {
              success: false,
              error: "Name, phone and email are required",
            },
            {
              status: 400,
            },
          );
        }

        /* --------------------------------------------------
             PREPARE APPS SCRIPT PAYLOAD
             -------------------------------------------------- */

        const payload: Record<string, unknown> = {
          ...body,

          tracker_secret: WEBHOOK_SECRET,

          ip: body.ip || getClientIp(request),

          country: body.country || getClientCountry(request),
        };

        waitUntil(deliverLeadInBackground(payload));

        return Response.json(
          {
            success: true,
            accepted: true,
            processing: "background",
          },
          {
            status: 200,
          },
        );
      },
    },
  },
});
