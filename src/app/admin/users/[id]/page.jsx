import { PrismaClient } from '@prisma/client'
import { Container, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import React from "react";
import UserDetails from "./UserDetails";


const page = async ({ params }) => {
    const prisma = new PrismaClient()
    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })

    return <>
        <Container my="5" className=' h-screen'>
            <Flex>
                <Link href="/admin/users/list">Back</Link>
            </Flex>
            <Flex justify="center">
                <UserDetails user={user} />
            </Flex>
        </Container>
    </>;
};

export default page;