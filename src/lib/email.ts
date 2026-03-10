import nodemailer from "nodemailer";
import { generateQuotePdf, type QuotePayload } from "./pdf";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  OWNER_EMAIL
} = process.env;

if (!SMTP_HOST || !SMTP_PORT || !OWNER_EMAIL) {
  // In dev this will just log; in production you should ensure these are set.
  console.warn(
    "SMTP configuration is incomplete. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, OWNER_EMAIL."
  );
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT || 465),
  secure: true,
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined
});

export async function sendQuoteEmails(payload: QuotePayload) {
  const pdfBuffer = await generateQuotePdf(payload);

  const ownerMailOptions = {
    from: OWNER_EMAIL,
    to: OWNER_EMAIL,
    subject: `New quote request from ${payload.name} - ${payload.serviceType}`,
    text: [
      "New quote request details:",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `City: ${payload.city}`,
      `Service type: ${payload.serviceType}`,
      `Preferred timing: ${payload.preferredTiming || "Not specified"}`,
      `Budget: ${payload.budget || "Not specified"}`,
      "",
      "Project details:",
      payload.details
    ].join("\n"),
    attachments: [
      {
        filename: `quote-${Date.now()}.pdf`,
        content: pdfBuffer,
        contentType: "application/pdf"
      }
    ]
  };

  const clientMailOptions = {
    from: OWNER_EMAIL,
    to: payload.email,
    subject: "Thanks for your quote request - John Henry Home Services",
    text: [
      `Hi ${payload.name},`,
      "",
      "Thanks for reaching out to John Henry Home Services LLC about your project.",
      "I've received your request and will review the details and follow up with a personalized quote.",
      "",
      "For reference, here’s what you shared:",
      `City: ${payload.city}`,
      `Type of work: ${payload.serviceType}`,
      `Preferred timing: ${payload.preferredTiming || "Not specified"}`,
      `Budget: ${payload.budget || "Not specified"}`,
      "",
      "Project details:",
      payload.details,
      "",
      "Talk soon,",
      "John",
      "John Henry Home Services LLC",
      "Serving Somerville, Medford, Cambridge & nearby"
    ].join("\n")
  };

  await transporter.sendMail(ownerMailOptions);
  await transporter.sendMail(clientMailOptions);
}

