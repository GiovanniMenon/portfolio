"use server";
import { Resend } from "resend";

export async function send({
  email,
  message,
}: {
  email: string;
  message: string;
}) {
  try{
    const resend = new Resend(process.env.RESEND_API_KEY);
    throw new Error();
    
    const { data } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [process.env.EMAIL!],
      subject: "Hello World",

      react: "<strong>It works! </strong>", //Aggiungegere email template
    });
  }catch{
    return new Error();
  }

}
