"use server";
import { Resend } from "resend";
import { Html } from "@react-email/components";
import GetInTouchEmail from "@/components/emails";

export async function submitEmailWithCaptcha({
  email,
  message,
  captchaValue
}: {
  email: string;
  message: string;
  captchaValue : string
}) {
  try {
    // const secretKey: string | undefined = process.env.RECAPTCHA_SECRET_KEY;
    
    // const response = await fetch(
    //   `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`,
    //   { method: "POST" }
    // );
    // const captchaData = await response.json();

    // if (!captchaData.success) {
    //   return { success: false, error: "Captcha Error" };
    // }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data } = await resend.emails.send({
      from: "Giovanni <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO_SEND!],
      subject: "Get in Contact",
      react: <GetInTouchEmail userFirstname={email} message={message} />, //Aggiungegere email template
    });

    // if (!data) throw new Error();

    return { success: true };
  } catch (error) {
    console.error(error);
    return  { success : false , error: "Unexpected Error, Try again"}
  }
}
