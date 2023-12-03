import { Button, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const ProjectAction = () => {
  return (
    <Flex justify="between">
      <div>
        <Heading>Your Porject List </Heading>
      </div>
      <Button>
        <Link href="/admin/projects/new">New Project</Link>
      </Button>
    </Flex>
  );
};

export default ProjectAction;
