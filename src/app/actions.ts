"use server";

import { Resend } from "resend";

export type InquiryFields = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

export type InquiryState =
  | { status: "idle" }
  | { status: "sent" }
  | { status: "error"; error: string; fields: InquiryFields };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FALLBACK_ERROR =
  "Something went wrong sending your message. Please try again, or call us at (214) 603-6879.";

function readField(formData: FormData, key: string, maxLength: number) {
  return String(formData.get(key) ?? "").trim().slice(0, maxLength);
}

export async function sendInquiry(
  _previous: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  // Hidden from people, so only bots fill it in. Pretend it worked.
  if (formData.get("company")) return { status: "sent" };

  const fields: InquiryFields = {
    name: readField(formData, "name", 200).replace(/\s+/g, " "),
    email: readField(formData, "email", 320),
    budget: readField(formData, "budget", 50),
    message: readField(formData, "message", 5000),
  };

  if (!fields.name || !fields.message || !EMAIL_PATTERN.test(fields.email)) {
    return {
      status: "error",
      error: "Please add your name, a valid email and a short note about your project.",
      fields,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const domain = process.env.RESEND_EMAIL_DOMAIN;
  const recipients = process.env.CONTACT_TO_EMAIL?.split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  if (!apiKey || !domain || !recipients?.length) {
    console.error(
      "Contact form needs RESEND_API_KEY, RESEND_EMAIL_DOMAIN and CONTACT_TO_EMAIL set",
    );
    return { status: "error", error: FALLBACK_ERROR, fields };
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: `Lesk Custom Homes Website <inquiries@${domain}>`,
    to: recipients,
    replyTo: fields.email,
    subject: `New project inquiry from ${fields.name}`,
    text: [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Budget: ${fields.budget || "Not given"}`,
      "",
      fields.message,
      "",
      "Reply to this email to respond directly.",
    ].join("\n"),
  });

  if (error) {
    console.error("Resend failed to send the contact form email", error);
    return { status: "error", error: FALLBACK_ERROR, fields };
  }

  return { status: "sent" };
}
