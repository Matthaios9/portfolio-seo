import React from "react";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import BlogFormSkeleton from "./loading";

const BlogForm = dynamic(() => import("../../_component/BlogForm"), {
  ssr: false,
  loading: () => <BlogFormSkeleton />,
});

const EditIssuePage = async ({ params }) => {
  const prisma = new PrismaClient();
  const blogPost = await prisma.blogPost.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!blogPost) notFound();

  return <BlogForm blogPost={blogPost} />;
};

export default EditIssuePage;
