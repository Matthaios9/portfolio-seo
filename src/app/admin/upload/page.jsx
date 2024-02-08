import React from "react";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import BlogFormSkeleton from "../blog/new/loading";

const UploadResumeForm = dynamic(() => import("./_component/UploadResumeForm"), {
    ssr: false,
    loading: () => <BlogFormSkeleton />,
});

const UploadResume = async () => {
    const prisma = new PrismaClient();
    const resume = await prisma.resume.findUnique({
        where: {
            id: 1,
        },
    });


    return <UploadResumeForm resume={resume} />;
};




export default UploadResume;
