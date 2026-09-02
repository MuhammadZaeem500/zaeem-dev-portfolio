import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/browser";

export async function POST(req: NextRequest) {
  try {
    const { user_name, user_email, subject, message } = await req.json();

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        user_name,
        user_email,
        subject,
        message,
      },
      process.env.EMAILJS_PUBLIC_KEY!
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Email failed" }, { status: 500 });
  }
}
