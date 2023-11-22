import authOptions from "../../auth/[...nextauth]/authOption";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { patchBlogShema } from "../../../../validationSchema/validationSchema";
import { z } from "zod";
import { slugify } from "../../../../utill/slug";

export async function GET(request, { params }) {
  // return NextResponse.json(params);
  const prisma = new PrismaClient();
  const blogPost = await prisma.blogPost.findFirst({
    where: {
      slug: params.id,
    },
  });
  if (!blogPost) return NextResponse.json({}, { status: 401 });
  return NextResponse.json(blogPost, { status: 200 });
}

export async function PATCH(request, { params }) {
  const prisma = new PrismaClient();
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const bodyData = await request.json();
  const validation = patchBlogShema.safeParse(bodyData);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), {
      status: 400,
    });

  const { title, body, imageId, metaTitle, metaDescription } = bodyData;

  //   if (id) {
  //     const user = await prisma.user.findUnique({
  //       where: { id: id },
  //     });
  //     if (!user)
  //       return NextResponse.json({ error: "Invalid user." }, { status: 400 });
  //   }

  const blogPost = await prisma.blogPost.findUnique({
    where: { id: params.id },
  });

  if (!blogPost)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });
  const slug = slugify(title);
  const updatedIssue = await prisma.blogPost.update({
    where: { id: blogPost.id },
    data: {
      title,
      metaTitle,
      metaDescription,
      body,
      slug,
      imageId,
    },
  });

  return NextResponse.json(updatedIssue);
}

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const blogPost = await prisma.blogPost.findUnique({
    where: { id: params.id },
  });

  if (!blogPost)
    return NextResponse.json({ error: "Invalid Blog post" }, { status: 404 });

  await prisma.blogPost.delete({
    where: { id: blogPost.id },
  });

  return NextResponse.json({});
}
