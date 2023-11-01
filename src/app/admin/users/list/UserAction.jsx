"use client"
import { Button, Flex } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import Skeleton from "../../../components/Skeleton";
import UsersFilter from './UsersFilter';
import {AiFillHome} from "react-icons/ai"

const OfficerActions = () => {


    return (
        <Flex justify="between" mt="5">
            {/* <Link href="/" className='text-purple-600 underline font-bold flex px-2'><AiFillHome/>Main Site</Link> */}
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