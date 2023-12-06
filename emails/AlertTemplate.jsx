import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

const base_url = process.env.NEXTAUTH_URL || "http://localhost:3000";

const AlertTemplate = ({ name }) => {
  return (
    <Html>
      <Preview>Zutet.com Update</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl text-center text-purple-700">
              Dear {name},
            </Text>
            <Text className="text-center">
              I hope this email finds you well. Thank you for reaching out and
              expressing interest in my profile on Zutet.com. I am pleased to
              attach my resume as requested.
              <Link
                className="text-center px-5 py-2.5 mr-2 mb-2 rounded-lg btn btn-primary hover:bg-purple-800 bg-purple-500 text-white"
                href={`${base_url}/assets/Mattheos_Tasios_-_Junior_Software_Developer.pdf`}
              >
                Download Resume
              </Link>
              <Text className="text-gray-500 text-sm text-center">
                {` or copy and paste the link below in your browser.`}
                <Text className="text-center text-blue-600">
                  {base_url +
                    `/assets/Mattheos_Tasios_-_Junior_Software_Developer.pdf`}
                </Text>
              </Text>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AlertTemplate;
