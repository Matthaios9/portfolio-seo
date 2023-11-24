import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { blogSchema } from "../../../validationSchema/validationSchema";
import { z } from "zod";
import { slugify } from "../../../utill/slug";
export async function POST(request) {
  const bodyRes = await request.json();
  const prisma = new PrismaClient();
  // return NextResponse.json(bodyRes);
  const validation = blogSchema.safeParse(bodyRes);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const { title, body, imageId, metaTitle, metaDescription } = bodyRes;
  const slug = slugify(title);
  const newPost = await prisma.blogPost.create({
    data: {
      title,
      metaTitle,
      metaDescription,
      body,
      slug,
      imageId,
    },
  });
  if (!newPost)
    return NextResponse.json(
      { error: "Somthing is went wrong" },
      { status: 400 }
    );
  return NextResponse.json(newPost);
}
