import React from 'react'
import FrontBlogCard from "./FrontBlogCard";
import { Grid, Box } from "@radix-ui/themes";

const BlogTable = async () => {
    const blogs = [];
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

export const dynamic = 'force-dynamic';
export default BlogTable
