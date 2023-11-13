"use client";
import { Box, Button, Container, Text, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { blogSchema } from "../../../../validationSchema/validationSchema";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

const BlogFOrm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(blogSchema),
  });
  const router = useRouter();

  const [isSubmitting, setSubmitting] = useState(false);

  const addBlogPost = async (data) => {
    setSubmitting(true);
    await axios
      .post("/api/blog", data)
      .then((res) => {
        console.log("response", res);
        toast.success("post added");
        setSubmitting(false);
        router.push("/admin");
        router.refresh();
      })
      .catch((err) => {
        setSubmitting(false);
        toast.error("somthing went wront");
        console.log(err);
      });
  };
  return (
    <>
      <Container className="max-w-xl">
        <form className="pt-5" onSubmit={handleSubmit(addBlogPost)}>
          <Box mb="3">
            <Text>Title</Text>
            <TextField.Root>
              <TextField.Input placeholder="Title" {...register("title")} />
            </TextField.Root>
          </Box>
          <Box>
            <Controller
              name="body"
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <ReactQuill placeholder="Body" {...field} />
              )}
            />
          </Box>
          <Box py="5">
            <Button type="submit" disabled={isSubmitting}>
              Post
            </Button>
          </Box>
        </form>
        <Toaster />
      </Container>
    </>
  );
};

export default BlogFOrm;
