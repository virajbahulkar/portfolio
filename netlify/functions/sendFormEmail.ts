import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const response = (statusCode: number, body: Record<string, unknown>) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

const parsePayload = (body: string | null): ContactPayload | null => {
  if (!body) return null;

  try {
    return JSON.parse(body) as ContactPayload;
  } catch {
    return null;
  }
};

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return response(405, { error: "Method Not Allowed" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    return response(500, { error: "Email service is not configured" });
  }

  const payload = parsePayload(event.body ?? null);

  if (!payload) {
    return response(400, { error: "Invalid JSON payload" });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return response(400, { error: "Name, email, and message are required" });
  }

  try {
    const resend = new Resend(resendApiKey);

    const result = await resend.emails.send({
      from: "Contact Form <hello@virajbahulkar.me>",
      to: "hello@virajbahulkar.me",
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      reply_to: email,
    });

    await resend.emails.send({
      from: "Viraj Bahulkar <hello@virajbahulkar.me>",
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to me. I've received your message and will get back to you as soon as possible.</p>
        <p>Meanwhile, feel free to explore <a href="https://virajbahulkar.me">virajbahulkar.me</a>.</p>
        <p>Best regards,<br/>Viraj Bahulkar</p>
      `,
    });

    return response(200, { success: true, data: result });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Email sending failed:", error);
    return response(500, { error: message });
  }
};
