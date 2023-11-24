import dynamic from "next/dynamic";
import BlogFormSkeleton from "../_component/BlogFormSkeleton";
const BlogForm = dynamic(() => import("../_component/BlogForm"), {
  ssr: false,
  loading: () => <BlogFormSkeleton />,
});

const BlogNewPage = () => {
  return (
    <div>
      <BlogForm />
    </div>
  );
};

export default BlogNewPage;
