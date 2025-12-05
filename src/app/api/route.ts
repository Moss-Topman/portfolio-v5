import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  const msg = {
    to: "your@email.com", // Replace with your email
    from: "no-reply@yourdomain.com", // Verified sender in SendGrid
    subject: `New message from ${name}`,
    text: `From: ${email}\nMessage: ${message}`,
  };
  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}