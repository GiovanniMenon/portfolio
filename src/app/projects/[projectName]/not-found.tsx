import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function NotFound() {
  return (
    <Card
      className={
        "p-8 py-12 h-fit w-full bg-card/30 rounded border-white border-opacity-5 mt-4"
      }
    >
      <CardTitle
        className={
          "text-9xl text-accent-foreground font-bold flex justify-center items-center"
        }
      >
        404
      </CardTitle>
      <CardContent
        className={"flex-col gap-y-8 flex justify-center items-center mt-9"}
      >
        <p className={"text-muted-foreground font-medium"}>
          Oops! The project you&apos;re looking for doesn&apos;t exist.
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
