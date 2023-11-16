"use client";
import { Pencil1Icon } from "@radix-ui/react-icons";
import {
  Card,
  Text,
  Inset,
  Dialog,
  Button,
  Flex,
  TextField,
} from "@radix-ui/themes";
import DOMPurify from "dompurify";
import Link from "next/link";
import DeletePostButton from "./DeleteBlogButton";
import { CldImage } from "next-cloudinary";

const BlogCard = ({ id, title, body, image }) => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Card size="2" style={{ maxWidth: 240 }}>
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
          <Dialog.Title>{title} </Dialog.Title>

          <span
            dangerouslySetInnerHTML={{ __html: body }}
            className="p-5 mb-5"
          ></span>

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
