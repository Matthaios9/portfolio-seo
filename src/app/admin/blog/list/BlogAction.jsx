import { Button, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const BlogActions = () => {
  return (
    <Flex justify="between">
      <div>
        <Heading>Your Blog posts </Heading>
      </div>
      <Button>
        <Link href="/admin/blog/new">New post</Link>
      </Button>
    </Flex>
  );
};

export default BlogActions;
