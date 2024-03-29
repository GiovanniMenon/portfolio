import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChatForm } from "@/components/chat/chatForm";

function Chat({
  isCollapsed,
  setIsCollapsed,
}: {
  isCollapsed: boolean;
  setIsCollapsed: any;
}) {
  return (
    <div
      className={`flex flex-col items-end space-y-2 fixed right-0 bottom-0 m-5 z-50 ${!isCollapsed ? "pointer-events-none" : "pointer-events-auto"}`}
    >
      <Card
        className={`transition-all ease-linear duration-200 px-3  ${!isCollapsed ? "invisible translate-y-5 opacity-0" : "visible translate-y-0"}`}
      >
        <CardHeader>
          <CardTitle className={"text-2xl"}>Contact Me</CardTitle>
          <CardDescription>
            Fullfill the form and send me an email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChatForm />
        </CardContent>
        <CardFooter
          className={"w-full justify-end items-start text-xs flex flex-col"}
        >
          <span>
            {" "}
            No data is <span className={"font-bold text-xs"}>Stored.</span>
          </span>

          <span>
            {" "}
            The Email service is provide by{" "}
            <span className={"font-bold text-xs"}>Resend &#169;</span>
          </span>
        </CardFooter>
      </Card>

      <Button
        style={{ pointerEvents: "auto" }}
        variant={"outline"}
        size={"iconLg"}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <svg
          className="with-icon_icon__MHUeb"
          data-testid="geist-icon"
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          style={{
            color: "var(--geist-foreground)",
            width: "24px",
            height: "24px",
          }}
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      </Button>
    </div>
  );
}

export default Chat;
