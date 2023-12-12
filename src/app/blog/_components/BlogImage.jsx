"use client";
import Image from "next/image";

const BlogImage = ({ imageId, height, width, alt, className }) => {
  return (
    <Image
      src={imageId}
      width={width}
      height={height}
      alt={alt}
      crop="thumb"
      sizes="50vw"
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
