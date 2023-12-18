"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Text,
  TextField,
  TextArea,
} from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import SimpleMDE from "react-simplemde-editor";
// import "easymde/dist/easymde.min.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { blogSchema } from "../../../../validationSchema/validationSchema";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Spinner from "../../../components/Spinner";
import { CldImage } from "next-cloudinary";
import dynamic from "next/dynamic";
import Image from "next/image";
const UploadImage = dynamic(() => import("../../../components/UploadImage"));
// import UploadImage from "../../../components/UploadImage";

const BlogFOrm = ({ blogPost }) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(blogSchema),
  });
  const router = useRouter();

  const [isSubmitting, setSubmitting] = useState(false);
  const [publicId, setPublicId] = useState("");

  const addBlogPost = async (data) => {
    setSubmitting(true);
    if (blogPost) {
      await axios
        .patch("/api/blog/" + blogPost.id, data)
        .then((res) => {
          console.log("response", res);
          toast.success("post added");
          setSubmitting(false);
          router.push("/admin/blog/list");
          router.refresh();
        })
        .catch((err) => {
          setSubmitting(false);
          toast.error("somthing went wront");
          console.log(err);
        });
    } else {
      await axios
        .post("/api/blog", data)
        .then((res) => {
          console.log("response", res);
          toast.success("post added");
          setSubmitting(false);
          router.push("/admin/blog/list");
          router.refresh();
        })
        .catch((err) => {
          setSubmitting(false);
          toast.error("somthing went wront");
          console.log(err);
        });
    }
  };
  return (
    <>
      <Container className="max-w-xl">
        <form className="pt-5" onSubmit={handleSubmit(addBlogPost)}>
          <Box mb="3">
            <Text>Title</Text>
            <TextField.Root>
              <TextField.Input
                placeholder="Title"
                defaultValue={blogPost?.title}
                {...register("title")}
              />
            </TextField.Root>
          </Box>

          <Box>
            <Controller
              name="body"
              control={control}
              defaultValue={blogPost?.body}
              render={({ field }) => (
                <ReactQuill placeholder="Body" {...field} />
              )}
            />
          </Box>
          <Box mb="3">
            <Text>Meta Title</Text>
            <TextField.Root>
              <TextArea
                placeholder="Meat Title"
                {...register("metaTitle")}
                defaultValue={blogPost?.metaTitle}
              />
            </TextField.Root>
          </Box>

          <Box>
            <Text>Meta Decription</Text>
            <Controller
              name="metaDescription"
              control={control}
              defaultValue={blogPost?.metaDescription}
              render={({ field }) => (
                <ReactQuill placeholder="Meta Decription" {...field} />
              )}
            />
          </Box>
          <Box py="5">
            <UploadImage
              setPublicId={(id) => {
                setPublicId(id);
                setValue("imageId", id);
                console.log("image id", id);
              }}
              directory={'blog'}
            />
          </Box>

          {(publicId || blogPost.imageId) && (
            <Image
              src={(!publicId && blogPost.imageId ? blogPost.imageId : publicId)}
              width={270}
              height={180}
              alt="A coffee image"
            />
          )}
          <Box py="5">
            <Button type="submit" disabled={isSubmitting}>
              {blogPost ? "Update Post" : "Submit New Post"}{" "}
              {isSubmitting && <Spinner />}
            </Button>
          </Box>
        </form>
        <Toaster />
      </Container>
    </>
  );
};

export default BlogFOrm;
