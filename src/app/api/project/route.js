import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { projectSchema } from "../../../validationSchema/validationSchema";

export async function GET(request) {
  // return NextResponse.json(params);
  const prisma = new PrismaClient();
  const project = await prisma.project.findMany();
  if (!project) return NextResponse.json({}, { status: 401 });
  return NextResponse.json(project, { status: 200 });
}

export async function POST(request) {
  const bodyRes = await request.json();
  const prisma = new PrismaClient();

  const validation = projectSchema.safeParse(bodyRes);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const { title, description, projectLink, githubLink, imageId } = bodyRes;
  //   return NextResponse.json(bodyRes);
  const newProject = await prisma.project.create({
    data: {
      title,
      description,
      projectLink,
      githubLink,
      imageId,
    },
  });
  if (!newProject)
    return NextResponse.json(
      { error: "Somthing is went wrong" },
      { status: 400 }
    );
  return NextResponse.json(newProject);
}
