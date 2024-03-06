import { EmailTemplate } from "@/components/ui/email";
import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, subject, body } = await req.json();
  console.log(email);
  try {
    const data = await resend.emails.send({
      from: "",
      to: process.env.EMAIL_TO_SEND!,
      subject: subject,
      react: <div>body</div>,
    });

    console.log(data);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
