import * as React from "react";

interface EmailTemplateProps {
  body: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  body,
}) => <div className={"flex flex-col justify-center items-center"}>{body}</div>;
