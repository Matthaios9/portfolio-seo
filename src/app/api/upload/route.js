import { NextRequest, NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/authOption";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  try {
    const prisma = new PrismaClient();

    const requestResume = await prisma.resume.findUnique({
      where: {
        id: 1,
      },
    });

    if (requestResume) {
      return NextResponse.json({ data: requestResume }, { status: 200 });
    }

    return NextResponse.json({}, { status: 501 });
  } catch (error) {
    NextResponse.json({ error: "Something is bad" }, { status: 501 });
  }
}

export async function PATCH(request) {
  try {
    const prisma = new PrismaClient();
    const resBody = await request.json();

    if (resBody.resumeId) {
      const requestResume = await prisma.resume.update({
        where: {
          id: 1,
        },
        data: { resumeId: resBody.resumeId },
      });
      if (requestResume) {
        return NextResponse.json({
          success: true,
          message: "Resume updated successfully",
          data: requestResume,
        });
      }
    } else {
      return NextResponse.json(
        { message: "Resume id Missing" },
        { status: 401 }
      );
    }
  } catch (err) {
    return NextResponse.json({ error: "Something is bad" }, { status: 401 });
  }
}
