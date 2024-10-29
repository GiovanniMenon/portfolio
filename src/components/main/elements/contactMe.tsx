"use client";
import Link from "next/link";
import { ArrowRightIcon, MailsIcon } from "lucide-react";

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { send } from "@/serverActions/send";
const FormSchema = z.object({
  email: z.string().email({
    message: "Email must be contain correct email format",
  }),
  body: z
    .string()
    .min(5, {
      message: "Message can be empty.",
    })
    .max(400, {
      message: "Message is too long",
    }),
});
export default function ContactMe() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    send({ email: data.email, message: data.body }); //da finire e da mettere il captcha/conferma di invio
  }

  return (
    <div className={"flex flex-col justify-start w-full h-fit"}>
      <Link
        className="animate-shine bg-[length:200%_100%] font-medium bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)]
        w-fit p-1.5 border rounded flex space-x-2.5 items-center justify-center"
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
          <p className={"font-[200] text-xs"}>
            <span className={"text-muted-foreground"}>
              {" "}
              Please contact me directly at{" "}
            </span>
            <span className={"font-bold"}>giovanni.menon.dev@gmail.com</span>
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
              name={"body"}
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

            <Button
              type="submit"
              className={"flex justify-center items-center gap-2 w-fit mx-auto"}
            >
              Submit
              <ArrowRightIcon className={"size-4"} />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
