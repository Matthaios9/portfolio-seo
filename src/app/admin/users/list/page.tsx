import { Container, Flex } from "@radix-ui/themes";
import React from "react";
import prisma from "../../../../../prisma/client";
import UsersTable, { columnNames } from './UsersTable';
import { Theme } from '@radix-ui/themes';

import UserAction from './UserAction'
const UserPage = async ({ searchParams }) => {
    const statuses = ['NO', 'YES', 'APPROVED', 'DENIED'];
    const status = statuses.includes(searchParams.status)
        ? searchParams.status
        : undefined;
    const where = { resume_requested: status };

    const orderBy = columnNames
        .includes(searchParams.orderBy)
        ? { [searchParams.orderBy]: 'asc' }
        : undefined;

    const page = parseInt(searchParams.page) || 1;
    const pageSize = 10;

    const users = await prisma.user.findMany({
        where,
        orderBy,
        skip: (page - 1) * pageSize,
        take: pageSize,
    });
    return (
        <>
            <Container className="h-96 ">


                <Flex direction="column" gap="3" className="md:min-w-[70rem]">
                    <UserAction />
                    <UsersTable searchParams={searchParams} User={users} />
                </Flex>
            </Container>
        </>
    );
};

export default UserPage;
