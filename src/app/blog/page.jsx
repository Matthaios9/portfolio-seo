import { Container } from "@radix-ui/themes";
import { PrismaClient } from "@prisma/client";
import FrontBlogCard from "./FrontBlogCard";
import { Grid, Box } from "@radix-ui/themes";

const BlogPage = async () => {
  const prisma = new PrismaClient();
  const blogs = await prisma.blogPost.findMany();
  return (
    <Container my="5">
      <Grid columns="2" align="center" gap="3" width="auto">
        {blogs.map((item) => (
          <Box style={{}} key={item.id}>
            <FrontBlogCard
              title={item.title}
              body={item.body}
              id={item.id}
              image={item.imageId}
              time={item.createdAt}
              slug={item.slug}
            />
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogPage;
