import { createFileRoute } from "@tanstack/react-router";

const WEBHOOK_URL =
  process.env.LEAD_TRACKER_WEBHOOK_URL;

const WEBHOOK_SECRET =
  process.env.LEAD_TRACKER_WEBHOOK_SECRET;

function getClientIp(request: Request) {
  const forwarded =
    request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return "";
}

function getClientCountry(request: Request) {
  return (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    ""
  );
}

export const Route = createFileRoute("/api/lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!WEBHOOK_URL || !WEBHOOK_SECRET) {
          return Response.json(
            {
              success: false,
              error:
                "Missing lead tracker environment variables",
            },
            {
              status: 500,
            },
          );
        }

        let body: Record<string, unknown>;

        try {
          const parsed = await request.json();

          if (
            !parsed ||
            typeof parsed !== "object" ||
            Array.isArray(parsed)
          ) {
            throw new Error("Invalid body");
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

        const payload = {
          ...body,

          tracker_secret:
            WEBHOOK_SECRET,

          ip:
            body.ip ||
            getClientIp(request),

          country:
            body.country ||
            getClientCountry(request),
        };

        try {
          const response = await fetch(
            WEBHOOK_URL,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body:
                JSON.stringify(payload),
            },
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

          if (!response.ok) {
            return Response.json(
              {
                success: false,

                error:
                  responseBody?.error ||
                  responseBody?.message ||
                  `Apps Script returned status ${response.status}`,

                details:
                  responseBody ?? text,
              },
              {
                status:
                  response.status,
              },
            );
          }

          return Response.json(
            responseBody ?? {
              success: true,
            },
          );
        } catch (error) {
          console.error(
            "[Lead Tracker] Apps Script request failed:",
            error,
          );

          return Response.json(
            {
              success: false,
              error:
                "Lead tracker delivery failed",
            },
            {
              status: 502,
            },
          );
        }
      },
    },
  },
});