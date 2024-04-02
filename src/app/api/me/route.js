import { NextRequest, NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/authOption";
import { PrismaClient } from "@prisma/client";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (session) {
      const prisma = new PrismaClient();
      const resBody = await request.json();

      if (!session) return NextResponse.json({}, { status: 401 });
      const user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      return NextResponse.json({
        mesaaage: "User found",
        data: user,
      });
    }
    return NextResponse.json({
      mesaaage: "No found",
      data: [],
    });
  } catch (err) {
    return NextResponse.json({ errror: err }, { status: 404 });
  }
}
