"use client";
import { Card, Text, Inset, Dialog, Button, Flex } from "@radix-ui/themes";
import { CldImage } from "next-cloudinary";

const BlogCard = ({ id, title, body, image }) => {
  return (
    <>
      <Card size="4" my="3" style={{ maxWidth: 440 }}>
        <Inset clip="padding-box" side="top" pb="current">
          {!image ? (
            <img
              src={process.env.IMAGE_PLACE_HOLDER}
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
            />
          ) : (
            <CldImage
              src={image}
              width={270}
              height={180}
              alt="A coffee image"
            />
          )}
        </Inset>
        <Flex justify="between">
          <Text as="div" size="2" weight="bold">
            {title}
          </Text>
        </Flex>
      </Card>
    </>
  );
};

export default BlogCard;
