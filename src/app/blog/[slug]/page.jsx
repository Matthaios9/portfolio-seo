import { PrismaClient } from "@prisma/client";
import { Card, Inset, Text, Strong, Container } from "@radix-ui/themes";
import BlogImage from "../_components/BlogImage";

import { cache } from "react";

const fetchUser = cache((slug) =>
  prisma.blogPost.findFirst({
    where: {
      slug: slug,
    },
  })
);

const BlugPostDetails = async ({ params }) => {
  const prisma = new PrismaClient();
  const blogs = await prisma.blogPost.findFirst({
    where: {
      slug: params.slug,
    },
  });
  return (
    <Container my="5" className="h-full">
      <Card size="2" className="mt-5">
        <Inset clip="padding-box" side="top" pb="current">
          <BlogImage
            imageId={blogs.imageId}
            height={160}
            width={200}
            alt={blogs.title}
            className={"bg-cover"}
          />
        </Inset>
        <Text as="h1">{blogs.title}</Text>
        <Text className="text-gray-300 text-center">
          {blogs.createdAt.toDateString()}
        </Text>
        <div
          className="mt-5 mx-5 blog-body-text"
          dangerouslySetInnerHTML={{ __html: blogs.body }}
        ></div>
      </Card>
    </Container>
  );
};

export default BlugPostDetails;

export async function generateMetadata({ params }) {
  const blogPost = await fetchUser(params.slug);
  return {
    title: blogPost?.metaTitle,
    description: blogPost.metaDescription,
  };
}
