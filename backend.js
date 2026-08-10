import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: [".env.local", ".env"] });

const app = express();
const port = process.env.PORT || 5174;
const WEBHOOK_URL = process.env.LEAD_TRACKER_WEBHOOK_URL;
const WEBHOOK_SECRET = process.env.LEAD_TRACKER_WEBHOOK_SECRET;

if (!WEBHOOK_URL) {
  throw new Error("Missing LEAD_TRACKER_WEBHOOK_URL in environment.");
}

if (!WEBHOOK_SECRET) {
  throw new Error("Missing LEAD_TRACKER_WEBHOOK_SECRET in environment.");
}

app.use(express.json());

app.post("/api/lead", async (req, res) => {
  try {
    const payload = {
      ...req.body,
      tracker_secret: WEBHOOK_SECRET,
    };

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(12000),
    });

    const text = await response.text();
    let body;

    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }

    res.status(response.status).json(body);
  } catch (error) {
    console.error(error);
    const timedOut = error instanceof Error && error.name === "TimeoutError";
    res.status(timedOut ? 504 : 500).json({
      success: false,
      error: timedOut ? "Lead tracker timed out." : "Lead submission failed.",
    });
  }
});

app.listen(port, () => {
  console.log(`Express backend running on http://localhost:${port}`);
});
