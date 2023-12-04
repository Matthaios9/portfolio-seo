import { PrismaClient } from "@prisma/client";
import { Card, Inset, Text, Strong, Container } from "@radix-ui/themes";
import BlogImage from "../_components/BlogImage";
import parse from "html-react-parser";
import { cache } from "react";

const fetchUser = cache((slug) => {
  const prisma = new PrismaClient();
  return prisma.blogPost.findFirst({
    where: {
      slug: slug,
    },
  });
});

const BlugPostDetails = async ({ params }) => {
  const prisma = new PrismaClient();
  const blogs = await prisma.blogPost.findFirst({
    where: {
      slug: params.slug,
    },
  });
  return (
    <Container my="8" className="h-full pt-8">
      <h1
        as="h1"
        className="text-6xl text-black md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
      >
        {blogs.title}
      </h1>
      <article className="mt-5">
        <Text className="text-black text-center">
          Posted on {blogs.createdAt.toDateString()}
        </Text>
        <BlogImage
          imageId={blogs.imageId}
          height={100}
          width={200}
          alt={blogs.title}
          className={"bg-cover"}
        />

        <div
          className="mt-5 mx-8 px-8 blog-body-text"
          dangerouslySetInnerHTML={{ __html: blogs.body }}
        ></div>
      </article>
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
