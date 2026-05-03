import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL ?? "contact@digeto.io";
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;

  if (!resendApiKey) {
    return NextResponse.json({ error: "RESEND_API_KEY is missing." }, { status: 500 });
  }

  if (!fromEmail) {
    return NextResponse.json({ error: "CONTACT_FORM_FROM_EMAIL is missing." }, { status: 500 });
  }

  const body = (await request.json()) as ContactPayload;
  const name = clean(body.name);
  const email = clean(body.email);
  const company = clean(body.company);
  const message = clean(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Digeto contact form submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111111;">
          <h2>New Digeto contact form submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Thanks. Your message has been sent to contact@digeto.io.",
    });
  } catch (error) {
    console.error("Resend contact form error:", error);

    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again." },
      { status: 500 },
    );
  }
}
