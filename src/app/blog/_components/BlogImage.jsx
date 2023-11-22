"use client";
import { CldImage } from "next-cloudinary";

const BlogImage = ({ imageId, height, width, alt, className }) => {
  return (
    <CldImage
      src={imageId}
      width={width}
      height={height}
      alt={alt}
      style={{
        display: "block",
        objectFit: "cover",
        width: "100%",
        backgroundColor: "var(--gray-5)",
      }}
    />
  );
};

export default BlogImage;
