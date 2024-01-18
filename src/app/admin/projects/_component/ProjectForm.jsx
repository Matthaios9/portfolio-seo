"use client";
import {
  Box,
  Button,
  Container,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ErrorMessage from "../../../components/ErrorMessage";
import Spinner from "../../../components/Spinner";
import UploadImage from "../../../components/UploadImage";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";

import axios from "axios";
import toast from "react-hot-toast";
import { projectSchema } from "../../../../validationSchema/validationSchema";
const ProjectForm = ({ projectData }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
  });
  const router = useRouter();

  const [isSubmitting, setSubmitting] = useState(false);
  const [publicId, setPublicId] = useState("");
  const addProject = async (data) => {
    setSubmitting(true);
    if (projectData) {
      await axios
        .patch("/api/project/" + projectData.id, data)
        .then((res) => {
          console.log("response", res);
          toast.success("post added");
          setSubmitting(false);
          router.push("/admin/projects/list");
          router.refresh();
        })
        .catch((err) => {
          setSubmitting(false);
          toast.error("somthing went wront");
          console.log(err);
        });
    } else {
      await axios
        .post("/api/project", data)
        .then((res) => {
          console.log("response", res);
          toast.success("post added");
          setSubmitting(false);
          router.push("/admin/projects/list");
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
    <Container className="max-w-xl" onSubmit={handleSubmit(addProject)}>
      <form className="pt-5">
        <Box>
          <Text>Title</Text>
          <TextField.Root>
            <TextField.Input
              placeholder="Title"
              {...register("title")}
              defaultValue={projectData?.title}
            />
          </TextField.Root>
        </Box>
        <Box>
          <Text>Category</Text>
          <TextField.Root>
            <TextField.Input
              placeholder="Category"
              {...register("category")}
              defaultValue={projectData?.category}
            />
          </TextField.Root>
        </Box>
        <Box className="pt-5">
          <Text>Description</Text>
          <TextArea
            placeholder="Project Decription"
            {...register("description")}
            defaultValue={projectData?.description}
          />
          <ErrorMessage>{errors?.description?.message}</ErrorMessage>
        </Box>
        <Box className="pt-5">
          <Text>Website Link</Text>
          <TextField.Root>
            <TextField.Input
              placeholder="Project Website Link"
              {...register("projectLink")}
              defaultValue={projectData?.projectLink}
            />
          </TextField.Root>
          <ErrorMessage>{errors?.projectLink?.message}</ErrorMessage>
        </Box>
        <Box className="pt-5">
          <Text>Github Links</Text>
          <TextField.Root>
            <TextField.Input
              placeholder="Github Link"
              {...register("githubLink")}
              defaultValue={projectData?.githubLink}
            />
          </TextField.Root>
          <ErrorMessage>{errors?.githubLink?.message}</ErrorMessage>
        </Box>
        <Box py="5">
          <UploadImage
            setPublicId={(id) => {
              setPublicId(id);
              setValue("imageId", id);
              console.log("image id", id);
            }}
          />
        </Box>

        {(publicId || projectData?.imageId) && (
          <Image src={(!publicId && projectData?.imageId) ? projectData.imageId : publicId} width={270} height={180} alt="A coffee image" />
        )}
        <Box className="pt-5">
          <Button type="submit" disabled={isSubmitting}>
            {projectData ? "Update Post" : "Submit New Post"}{" "}
            {isSubmitting && <Spinner />}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ProjectForm;
