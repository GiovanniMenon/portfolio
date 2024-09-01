import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function NotFound() {
  return (
    <Card
      className={
        "mt-5 p-8 h-fit w-full bg-card rounded border-white border-opacity-5 backdrop-blur-xl"
      }
    >
      <CardTitle
        className={
          "text-9xl text-neutral-300 font-bold flex justify-center items-center"
        }
      >
        404
      </CardTitle>
      <CardContent
        className={"flex-col gap-y-8 flex justify-center items-center mt-9"}
      >
        <p className={"text-white text-opacity-70 font-medium"}>
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href={"/"}>
          <Button variant={"default"} className={"rounded"}>
            Go back to Home
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
