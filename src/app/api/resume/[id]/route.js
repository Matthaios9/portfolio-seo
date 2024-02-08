import { NextRequest, NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import authOptions from "../../auth/[...nextauth]/authOption";
import { PrismaClient } from "@prisma/client";
import { sendEmail } from "../../../../helper/mailer";

export async function PATCH(request, { params }) {
  try {
    const prisma = new PrismaClient();
    const session = await getServerSession(authOptions);
    const reqBody = await request.json();
    //   console.log(reqBody); //for debuging
    if (!session) return NextResponse.json({}, { status: 401 });
    const user = await prisma.user.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    const updateResumeRequestStatus = await prisma.user.update({
      where: { id: params.id },
      data: {
        resume_requested: reqBody.status,
      },
    });

    if (updateResumeRequestStatus.resume_requested === "APPROVED")
      await sendEmail(user.email, user.name); // mail not working

    return NextResponse.json(
      { status: updateResumeRequestStatus },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ errror: err }, { status: 404 });
  }
}
