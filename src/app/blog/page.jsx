import React, { Suspense } from 'react'
import { Container } from "@radix-ui/themes";
import BlogTable from './BlogTable';

const BlogPage = async () => {
  return (
    <Container my="8" pt={5} className="h-full">
      <Suspense fallback={<p>Loading...</p>}>
        <BlogTable />
      </Suspense>
    </Container>
  );
};

export default BlogPage;
