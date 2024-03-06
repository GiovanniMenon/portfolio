import { Resend } from "resend";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, subject, body } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO_SEND!, email],
      subject: subject,
      react: <div>{body}</div>,
    });

    return NextResponse.json({ body: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ body: error }, { status: 500 });
  }
}
