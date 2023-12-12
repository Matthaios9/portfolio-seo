import authOptions from "../../auth/[...nextauth]/authOption";
import prisma from "../../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { patchProjectShema } from "../../../../validationSchema/validationSchema";
import { z } from "zod";
import { slugify } from "../../../../utill/slug";

export async function GET(request, { params }) {
  // return NextResponse.json(params);
  // const prisma = new PrismaClient();
  const project = await prisma.project.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!project) return NextResponse.json({}, { status: 401 });
  return NextResponse.json(project, { status: 200 });
}

export async function PATCH(request, { params }) {
  // const prisma = new PrismaClient();
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const bodyData = await request.json();
  const validation = patchProjectShema.safeParse(bodyData);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), {
      status: 400,
    });

  const { title, category, description, projectLink, githubLink, imageId } =
    bodyData;

  //   if (id) {
  //     const user = await prisma.user.findUnique({
  //       where: { id: id },
  //     });
  //     if (!user)
  //       return NextResponse.json({ error: "Invalid user." }, { status: 400 });
  //   }

  const project = await prisma.project.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!project)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

  const updatedProject = await prisma.project.update({
    where: { id: project.id },
    data: { title, category, description, projectLink, githubLink, imageId },
  });

  return NextResponse.json(updatedProject);
}

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const project = await prisma.project.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!project)
    return NextResponse.json({ error: "Invalid Project" }, { status: 404 });

  await prisma.project.delete({
    where: { id: project.id },
  });

  return NextResponse.json({});
}
