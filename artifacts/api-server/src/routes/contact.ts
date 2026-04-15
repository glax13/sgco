import { Router } from "express";
import { db } from "@workspace/db";
import { contactSubmissionsTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";

const router = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation failed", details: String(parsed.error) });
    return;
  }

  const { name, email, type, subject, message } = parsed.data;

  try {
    await db.insert(contactSubmissionsTable).values({
      name,
      email,
      type,
      subject: subject ?? null,
      message,
    });

    req.log.info({ email, type }, "Contact form submission received");

    res.json({
      success: true,
      message: "Your message has been received. Sean will be in touch shortly.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact submission");
    res.status(500).json({ error: "Failed to process your message. Please try again." });
  }
});

export default router;
