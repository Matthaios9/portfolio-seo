import React from 'react'
import { PrismaClient } from "@prisma/client";
import FrontBlogCard from "./FrontBlogCard";
import { Grid, Box } from "@radix-ui/themes";

const BlogTable = async () => {
    const prisma = new PrismaClient();
    const blogs = await prisma.blogPost.findMany();

    return (
        <Grid columns="1" align="center" gap="3" width="auto">
            {blogs && blogs.map((item) => (
                <Box key={item.id}>
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
    )
}

export default BlogTable