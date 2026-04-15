import { Router } from "express";
import { db } from "@workspace/db";
import { newsletterSubscribersTable } from "@workspace/db";
import { SubscribeNewsletterBody } from "@workspace/api-zod";

const router = Router();

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

export default router;
