"use client";
import { useState } from "react";
import {
    Box,
    Button,
    Container,
} from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import "react-quill/dist/quill.snow.css";
import { patchResumeShema } from "../../../../validationSchema/validationSchema";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Spinner from "../../../components/Spinner";
import dynamic from "next/dynamic";

import { ResumeIcon } from "@radix-ui/react-icons";
const UploadImage = dynamic(() => import("../../../components/UploadImage"));
// import UploadImage from "../../../components/UploadImage";

const UploadResumeForm = ({ resume }) => {
    const {
        register,
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(patchResumeShema),
    });
    const router = useRouter();

    const [isSubmitting, setSubmitting] = useState(false);
    const [publicId, setPublicId] = useState("");

    const addBlogPost = async (data) => {
        console.log("log form data", data);
        setSubmitting(true);
        await axios
            .patch("/api/upload/", data)
            .then((res) => {
                console.log("response", res);
                toast.success("post added");
                setSubmitting(false);
                router.push("/admin/upload");
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
                    <h3 className="font-semibold">Upload your latest resume</h3>
                    <Box py="5">
                        <UploadImage
                            setPublicId={(id) => {
                                setPublicId(id);
                                setValue("resumeId", id);
                                console.log("image id", id);
                            }}
                            directory={'resume'}
                        />
                    </Box>

                    {(publicId || resume?.resumeId) && (
                        <div className="flex ">
                            <a className="p-5 cursor-pointer text-white bg-purple-700 font-semibold" target="_blank" href={(!publicId && resume?.resumeId ? resume?.resumeId : publicId)}>Download Resume</a>
                            {resume && <h2 className="h-4 font-light ml-5"> last updated on: {new Date(resume.createdAt).toLocaleDateString()}</h2>}
                        </div>
                    )}
                    <Box py="5">
                        <Button type="submit" disabled={isSubmitting}>
                            update
                            {isSubmitting && <Spinner />}
                        </Button>
                    </Box>
                </form>
                <Toaster />
            </Container>
        </>
    );
};

export default UploadResumeForm;
