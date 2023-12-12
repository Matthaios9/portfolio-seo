"use client";
import React, { useState } from "react";

import { fbStorage } from "../../fbConfig/fbConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import * as Progress from '@radix-ui/react-progress';
import { Box, Button, Flex } from "@radix-ui/themes";
import './uploadimage.css'


const UploadImage = ({ setPublicId, directory = 'projects' }) => {
  const [file, setFile] = useState();
  const [progress, setProgress] = React.useState(0);
  const upload = () => {
    console.log("local file", file);
    const fileName = file[0].name;
    if (file) {
      const fileRef = ref(fbStorage, `${directory}/${fileName}`);
      const uploadTask = uploadBytesResumable(fileRef, file[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const currentProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + currentProgress + "% done");
          setProgress(currentProgress)
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setPublicId(downloadURL);
          });
        }
      );
    }
  };

  return (
    <>
      <Flex justify="between" className="bg-gray-300 rounded py-3 px-2 items-center">
        <input type="file" onChange={(event) => {
          setProgress(0)
          setFile(event.target.files)
        }} />
        <Progress.Root className="ProgressRoot" value={progress}>
          <Progress.Indicator
            className="ProgressIndicator"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />

        </Progress.Root>
        <Button type="button" className="ml-2" size="1" onClick={upload}>
          Upload
        </Button>
      </Flex>
      {/* <CldUploadWidget
        uploadPreset="xksbhlbe"
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
      </CldUploadWidget> */}
    </>
  );
};

export default UploadImage;
