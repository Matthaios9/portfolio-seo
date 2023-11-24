"use client";
import { Card, Text, Inset, Flex } from "@radix-ui/themes";
import { CldImage } from "next-cloudinary";
import "./FrontBlogCard.css";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const BlogCard = ({ id, title, body, image, time, slug }) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <Card size="4" my="3" style={{ maxWidth: 440 }} className="text-white">
          <Inset clip="padding-box" side="top" pb="current">
            {!image ? (
              <Image
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
          <Flex direction="column" justify="between">
            <Text as="p" size="3" weight="bold" className="uppercase">
              {title}
            </Text>
            <div className="text-area" style={{ color: "white !important" }}>
              <ReactMarkdown>{body}</ReactMarkdown>
            </div>
          </Flex>
        </Card>
      </Link>
    </>
  );
};

export default BlogCard;
