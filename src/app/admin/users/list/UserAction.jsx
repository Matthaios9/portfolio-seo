"use client"
import { Button, Flex } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import Skeleton from "../../../components/Skeleton";
import UsersFilter from './UsersFilter';

const OfficerActions = () => {


    return (
        <Flex justify="between" mt="5">
            <UsersFilter />
        </Flex>
    );
};
const AuthButton = () => {
    const { status, data: session } = useSession();

    if (status === "loading") return <Skeleton width="3rem" />;

    if (status === "unauthenticated") return null;
    return (
        <Button>
            <Link href="/users/new">New User</Link>
        </Button>
    );
}
export default OfficerActions;