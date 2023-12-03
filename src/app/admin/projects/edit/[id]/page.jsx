import React from "react";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import ProJectFormSkeleton from "./loading";

const ProjectForm = dynamic(() => import("../../_component/ProjectForm"), {
  ssr: false,
  loading: () => <ProJectFormSkeleton />,
});

const EditBlogPage = async ({ params }) => {
  const prisma = new PrismaClient();
  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!project) notFound();

  return <ProjectForm projectData={project} />;
};

export default EditBlogPage;
