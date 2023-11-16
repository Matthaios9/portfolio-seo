import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import BlogFormSkeleton from "./loading";

const BlogForm = dynamic(() => import("../../_component/BlogForm"), {
  ssr: false,
  loading: () => <BlogFormSkeleton />,
});

const EditIssuePage = async ({ params }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return <BlogForm issue={issue} />;
};

export default EditIssuePage;
