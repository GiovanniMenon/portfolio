import { Body, Container, Head, Hr, Html, Text } from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  userFirstname: string;
  message: string;
}

export const GetInTouchEmail = ({
  userFirstname,
  message,
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hello Giovanni,</Text>
        <Text style={paragraph}>
          You have a new message from {userFirstname} through the contact form
          on your portfolio site.
        </Text>
        <Text style={paragraph}>Here’s the message:</Text>
        <Text style={button}>{message}</Text>
        <Hr style={hr} />
        <Text style={footer}>
          Please note, this is an automated message; replies to this email will
          not be monitored.
        </Text>
      </Container>
    </Body>
  </Html>
);

GetInTouchEmail.PreviewProps = {
  userFirstname: "Alan",
} as KoalaWelcomeEmailProps;

export default GetInTouchEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
