"use client";
import Link from "next/link";
import { ArrowRightIcon, MailsIcon } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitEmailWithCaptcha } from "@/serverActions/send";
import confetti from "canvas-confetti";
import { toast } from "sonner";

const FormSchema = z.object({
  ReCAPTCHA : z.string({
    message: "Captcha required"
  }),
  email: z.string().email({
    message: "Email must be contain correct email format",
  }),
  message: z
    .string()
    .min(5, {
      message: "Message can be empty.",
    })
    .max(700, {
      message: "Message is too long",
    }),
});


export default function ContactMe() {
  const [disable, setDisable] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data :z.infer<typeof FormSchema>) => {
    setDisable(true)
    const res = await submitEmailWithCaptcha({
      email: data.email,
      message: data.message,
      captchaValue: data.ReCAPTCHA,
    });

    if (!res.success) {
      toast.error(res.error || "Error occurred sending the email. Try later");
      setDisable(false)
      return;
    }
    const end = Date.now() + 1.5 * 1000; // 3 seconds
    const colors = ["#c4b5fd", "#e9d5ff", "#a855f7", "#8b5cf6"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame()
    toast.success("Email Sent");
    form.reset({ email: "", message: "" , ReCAPTCHA : "" });
    setDisable(false)
  }

  return (
    <div className={"flex flex-col justify-start w-full h-fit "}>
      <Link
        className="hidden animate-shine bg-[length:200%_100%] font-medium bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)]
        w-fit p-1.5 border rounded md:flex space-x-2.5 items-center justify-center"
        href="#contact"
      >
        <MailsIcon className={"size-5 text-tiolet"} />
        <span className="text-xs">Contact Me</span>
      </Link>
      <div className={"mt-10 flex flex-col gap-10 relative"}>
        <div className={"space-y-2"}>
          <h1 className={"text-3xl font-bold tracking-tight text-primary"}>
            Contact Me
          </h1>
          <p className={"font-[200] text-sm"}>
            <span className={"text-muted-foreground"}>
              {" "}
              Please contact me directly at{" "}
            </span>
            <span className={""}>giovanni.menon.dev@gmail.com</span>
            <span className={"text-muted-foreground"}>
              {" "}
              or through this form.
            </span>
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={"w-full flex flex-col gap-2"}
          >
            <FormField
              control={form.control}
              name={"email"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={"Your Email"}
                      type={"text"}
                      className={"bg-card/30 m-0"}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"message"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className={"resize-none bg-card/30 m-0 min-h-[200px]"}
                      placeholder={"Your Message"}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col md:flex-row items-center gap-7 md:gap-0 justify-between w-full"> 
            <FormField
              control={form.control}
              name={"ReCAPTCHA"}
              render={({ field }) => (
                <FormItem className="">
                  <FormControl className="w-fit">

                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    {...field}
                  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="px-2 w-full md:w-fit"><Button
              type="submit"
              className={"flex justify-center items-center gap-5 py-5 md:py-7  mx-auto w-full text-lg font-bold"}
              disabled={disable}
              size={"default"}
            >
              <h1>Submit</h1>
              <ArrowRightIcon className={"size-6"} />
            </Button>
            </div>
            
            
            
            </div>
            
            
      
        
          
          </form>
        </Form>
      </div>
    </div>
  );
}
