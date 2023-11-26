"use client";
import { CldImage } from "next-cloudinary";

const BlogImage = ({ imageId, height, width, alt, className }) => {
  return (
    <CldImage
      src={imageId}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={{
        display: "block",
        objectFit: "contain",
        width: "100%",
        backgroundColor: "var(--gray-5)",
      }}
    />
  );
};

export default BlogImage;
