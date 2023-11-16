import { Grid, Box, Container } from "@radix-ui/themes";
import BlogCard from "../_component/BlogCard";
import { PrismaClient } from "@prisma/client";
import BlogActions from "./BlogAction";
const page = async () => {
  const prisma = new PrismaClient();
  const blogs = await prisma.blogPost.findMany();
  return (
    <div>
      <Container>
        <BlogActions />
        <Grid columns="3" align="center" gap="3" width="auto">
          {blogs.map((item) => (
            <Box style={{}}>
              <BlogCard title={item.title} body={item.body} />
            </Box>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default page;
