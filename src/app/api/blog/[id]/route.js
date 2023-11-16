import authOptions from "../../auth/[...nextauth]/authOption";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { patchBlogShema } from "../../../../validationSchema/validationSchema";
import { z } from "zod";

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

  const { title, body } = bodyData;

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

  const updatedIssue = await prisma.blogPost.update({
    where: { id: blogPost.id },
    data: {
      title,
      body,
    },
  });

  return NextResponse.json(updatedIssue);
}
