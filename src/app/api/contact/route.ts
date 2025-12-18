import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Elastic Email configuration
    const ELASTIC_EMAIL_API_KEY = process.env.ELASTIC_EMAIL_API_KEY;
    const fromEmail = process.env.ELASTIC_EMAIL_FROM || "no-reply@yourdomain.com";
    const toEmail = process.env.ELASTIC_EMAIL_TO || fromEmail;

    // If Elastic Email is not configured, just log and respond OK for local/dev convenience
    if (!ELASTIC_EMAIL_API_KEY) {
      // eslint-disable-next-line no-console
      console.warn("ELASTIC_EMAIL_API_KEY not set — skipping email send. Received contact:", { name, email, message });
      return NextResponse.json({ message: "Message received (no-send in dev)" }, { status: 200 });
    }

    // Elastic Email API endpoint (correct endpoint: /v4/emails, not /v4/emails/send)
    const elasticEmailUrl = "https://api.elasticemail.com/v4/emails";

    const emailPayload = {
      Recipients: [{ Email: toEmail }],
      Content: {
        From: fromEmail,
        Subject: `Portfolio contact from ${name} <${email}>`,
        PlainText: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        Html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><hr /><p>${message}</p>`,
      },
      ReplyTo: email,
    };

    try {
      const response = await fetch(elasticEmailUrl, {
        method: "POST",
        headers: {
          "X-ElasticEmail-ApiKey": ELASTIC_EMAIL_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // eslint-disable-next-line no-console
        console.error("Elastic Email API error:", response.status, errorData);
        return NextResponse.json({ error: "Error sending message" }, { status: 502 });
      }

      return NextResponse.json({ message: "Message sent!" }, { status: 200 });
    } catch (error) {
      // Log Elastic Email error details for debugging
      // eslint-disable-next-line no-console
      console.error("Elastic Email send error:", error);
      return NextResponse.json({ error: "Error sending message" }, { status: 502 });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
