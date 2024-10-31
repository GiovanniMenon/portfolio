"use server";
import { Resend } from "resend";
import { Html } from "@react-email/components";
import GetInTouchEmail from "@/components/emails";

export async function send({
  email,
  message,
}: {
  email: string;
  message: string;
}) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data } = await resend.emails.send({
      from: "Giovanni <onboarding@resend.dev>",
      to: [process.env.EMAIL!, email],
      subject: "Get in Contact",

      react: <GetInTouchEmail userFirstname={email} />, //Aggiungegere email template
    });
  } catch {
    throw new Error();
  }
}
