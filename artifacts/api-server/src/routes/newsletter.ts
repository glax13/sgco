import { Router } from "express";
import { db } from "@workspace/db";
import { newsletterSubscribersTable } from "@workspace/db";
import { SubscribeNewsletterBody } from "@workspace/api-zod";

const router = Router();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/newsletter", async (req, res) => {
  const parsed = SubscribeNewsletterBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation failed", details: String(parsed.error) });
    return;
  }

  const { email, name } = parsed.data;

  try {
    await db
      .insert(newsletterSubscribersTable)
      .values({ email, name: name ?? null })
      .onConflictDoNothing();

    req.log.info({ email }, "Newsletter subscription received");

    res.json({
      success: true,
      message: "You're subscribed. The Performance System will arrive in your inbox.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to save newsletter subscription");
    res.status(500).json({ error: "Subscription failed. Please try again." });
  }
});

router.post("/newsletter/substack", async (req, res) => {
  const { email } = req.body as { email?: unknown };

  if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }

  try {
    const params = new URLSearchParams({
      email,
      first_url: "https://seangibson.co",
      source: "embed",
    });

    const substackRes = await fetch(
      "https://theperformancesystem.substack.com/api/v1/free",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }
    );

    const responseText = await substackRes.text();
    req.log.info({ email, status: substackRes.status }, "Substack subscription attempted");

    if (!substackRes.ok) {
      let errorMessage = "Subscription failed. Please try again.";
      try {
        const json = JSON.parse(responseText);
        if (json?.error) {
          errorMessage = String(json.error);
        } else if (json?.errors?.[0]?.message) {
          errorMessage = String(json.errors[0].message);
        }
      } catch {
      }
      res.status(substackRes.status >= 400 && substackRes.status < 500 ? 400 : 502).json({
        error: errorMessage,
      });
      return;
    }

    res.json({
      success: true,
      message: "Check your email to confirm your subscription.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to proxy newsletter subscription to Substack");
    res.status(502).json({ error: "Could not reach the newsletter service. Please try again." });
  }
});

export default router;
