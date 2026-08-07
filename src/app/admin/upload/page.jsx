import React from "react";
import dynamic from "next/dynamic";
import BlogFormSkeleton from "../blog/new/loading";

const UploadResumeForm = dynamic(() => import("./_component/UploadResumeForm"), {
    ssr: false,
    loading: () => <BlogFormSkeleton />,
});

const UploadResume = async () => {
    const resume = null;
    return <UploadResumeForm resume={resume} />;
};

export default UploadResume;
