"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

const UploadImage = ({ setPublicId }) => {
  return (
    <>
      <CldUploadWidget
        uploadPreset="kv6zlcsx"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button
            type="button"
            className="btn bg-blue-700"
            onClick={() => open()}
          >
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadImage;
