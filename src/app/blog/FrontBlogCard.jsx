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
        <Card size="2" my="3" className="text-white">
          <Flex direction="row">
            {!image ? (
              <Image
                src={process.env.IMAGE_PLACE_HOLDER}
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "contain",
                  width: 200,
                  height: 140,
                  backgroundColor: "var(--gray-5)",
                }}
              />
            ) : (
              <CldImage
                src={image}
                width={270}
                height={180}
                sizes="100vw"
                alt="A coffee image"
                className="object-cover"
              />
            )}

            <Flex direction="column" justify="start" className="pl-5">
              <Text as="p" size="3" weight="bold" className="uppercase">
                {title}
              </Text>
              <div
                className="text-area"
                dangerouslySetInnerHTML={{ __html: body.substring(0, 400) }}
                style={{ color: "white !important" }}
              ></div>
            </Flex>
          </Flex>
        </Card>
      </Link>
    </>
  );
};

export default BlogCard;
