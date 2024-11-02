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
        <Text style={messageText}>{message}</Text>
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
  backgroundColor: "#1a1a1a", // Dark background to match your website's theme
  color: "#ffffff", // White text for contrast
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#EAEAEA", // Light gray for softer contrast
};

const messageText = {
  fontSize: "16px",
  lineHeight: "26px",
  fontStyle: "italic",
  color: "#FFFFFF",
  backgroundColor: "#2D2D2D",
  padding: "10px",
  borderRadius: "5px",
};

const hr = {
  borderColor: "#5F51E8",
  margin: "20px 0",
};

const footer = {
  color: "#8898AA",
  fontSize: "12px",
};
