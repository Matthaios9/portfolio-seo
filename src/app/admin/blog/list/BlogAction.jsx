import { Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const BlogActions = () => {
  return (
    <Flex justify="between">
      <div>
        <Text>Heading </Text>
      </div>
      <Button>
        <Link href="/admin/blog/new">New post</Link>
      </Button>
    </Flex>
  );
};

export default BlogActions;
