import { NextRequest, NextResponse } from 'next/server';

import { getServerSession } from 'next-auth';
import authOptions from '../auth/[...nextauth]/authOption';
import prisma from '../../../../prisma/client';

export async function POST(request) {
    const session = await getServerSession(authOptions)
    const resBody = await request.json
    if (!session)
        return NextResponse.json({}, { status: 401 });
    const user = await prisma.User.findUnique({
        where: { id: "r3ddy03@gmail.com" }
    })

    if (user.resume_requested === "YES")
        return NextResponse.json({ error: "Resume request already sent" }, { status: 401 });
    if (user.resume_requested === "APPROVED")
        return NextResponse.json({ error: "Resume request already aproved" }, { status: 401 });

    const requestResume = await prisma.user.update({
        where: {
            email: session.user.email,
        },
        data: {
            resume_requested: 'YES'
        }
    })
    if (requestResume)
        return NextResponse.json({ "success": true, message: "Resume request sent successfully" })

}


