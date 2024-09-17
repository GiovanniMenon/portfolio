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
const FormSchema = z.object({
  email: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
  message: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});
export default function ContactMe() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert("");
  }

  return (
    <div className={"flex flex-col justify-start w-full h-fit"}>
      <Link
        className="animate-shine bg-[length:200%_100%] font-medium bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)]
        w-fit p-1.5 border rounded flex space-x-2.5 items-center justify-center"
        href="#experiences"
      >
        <MailsIcon className={"size-5 text-tiolet"} />
        <span className="text-xs">Contact Me</span>
      </Link>
      <div className={"mt-10 flex flex-col gap-10 relative"}>
        <div className={"space-y-2"}>
          <h1 className={"text-3xl font-bold tracking-tight text-primary"}>
            Contact Me
          </h1>
          <p className={"text-white text-opacity-80 font-[200] text-xs"}>
            Please contact me directly at{" "}
            <span className={"font-bold"}>giovanni.menon.dev@gmail.com</span> or
            through this form.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={"w-full flex flex-col gap-2"}
          >
            <FormField
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={"Your Email"}
                      type={"email"}
                      className={"bg-card/30 m-0"}
                    ></Input>
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
              name={"email"}
              control={form.control}
            />
            <FormField
              render={() => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className={"resize-none bg-card/30 m-0 min-h-[200px]"}
                      placeholder={"Your Message"}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
              name={"message"}
              control={form.control}
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
