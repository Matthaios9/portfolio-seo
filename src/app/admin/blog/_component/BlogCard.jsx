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

const BlogCard = ({ title, body }) => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Card size="2" style={{ maxWidth: 240 }}>
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: 140,
                  backgroundColor: "var(--gray-5)",
                }}
              />
            </Inset>
            <Flex justify="between">
              <Text as="div" size="2" weight="bold">
                {title}
              </Text>
            </Flex>
            <div
              as="p"
              size="3"
              dangerouslySetInnerHTML={{ __html: body.substring(0, 20) }}
            ></div>
          </Card>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: "xl" }}>
          <Dialog.Title>{title}</Dialog.Title>

          <div
            dangerouslySetInnerHTML={{ __html: body }}
            className="p-5 mb-5"
          ></div>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button>Save</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

export default BlogCard;
