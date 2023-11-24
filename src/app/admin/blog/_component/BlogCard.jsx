"use client";
import { Card, Text, Inset, Dialog, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import DeletePostButton from "./DeleteBlogButton";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const BlogCard = ({ id, slug, title, body, image }) => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Card size="2" style={{ maxWidth: 240 }}>
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
            <Flex justify="between">
              <Text as="div" size="2" weight="bold">
                {title}
              </Text>
            </Flex>
          </Card>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: "xl" }}>
          <Flex direction="column" align="end">
            <Link
              href={`/admin/blog/edit/${id}`}
              className="bg-blue-400 p-1 rounded text-white"
            >
              Edit
            </Link>
            <DeletePostButton blogId={id} />
          </Flex>
          <Dialog.Title style={{ color: "black !important" }}>
            {title}{" "}
          </Dialog.Title>

          <div className={`p-5 mb-5 `}>
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Close
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

export default BlogCard;
