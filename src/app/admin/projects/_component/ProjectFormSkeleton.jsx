import { Box } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "../../../components";

const ProjectFormSekeleton = () => {
  return (
    <Box className="max-w-xl pt-8 mt-2">
      <Skeleton height="2rem" />
      <Skeleton height="8rem" />
      <Skeleton height="2rem" />
      <Skeleton height="2rem" />
    </Box>
  );
};

export default ProjectFormSekeleton;
