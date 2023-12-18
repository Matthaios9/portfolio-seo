"use client";
import { Card, Text, Inset, Flex, Box } from "@radix-ui/themes";
import "./FrontBlogCard.css";
import Link from "next/link";
import Image from "next/image";
import parse from 'html-react-parser';
import ReactMarkdown from "react-markdown";
import BlogImag from '../../../public/assets/blog.png'
const BlogCard = ({ id, title, body, image, time, slug }) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <Card size="2" my="3" className="text-white max-h-fit w-full">
          <Flex direction="row">
            <Box className="w-3/12">
              {image ? (
                <Image
                  src={image}
                  alt="Bold typography"
                  width={300}
                  height={200}
                  className="rounded object-contain"

                />
              ) : (

                <Image
                  src={BlogImag}
                  alt="Bold typography"
                  width={300}
                  height={200}
                  className="rounded object-contain"

                />
              )}

            </Box>


            <Box className="w-8/12">
              <Flex direction="column" justify="start" className="pl-5">
                <Text as="p" size="3" weight="bold" className="uppercase">
                  {title}
                </Text>
                <div
                  className="text-area"
                  style={{ color: "white !important" }}
                >{parse(body.substring(0, 400))}</div>
              </Flex>
            </Box>
          </Flex>
        </Card>
      </Link>
    </>
  );
};

export default BlogCard;
