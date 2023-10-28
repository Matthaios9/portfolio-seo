import { User } from "@prisma/client";
import {
    Card,
    Flex,
    Avatar,
    Box,
    Text,
    Heading
} from "@radix-ui/themes";
import React from "react";
import ResumeStatusSelect from './ResumeStatusSelect'
const UserDetails = ({ user }) => {
    return <>
        <Card size="3" style={{ width: 500 }}>
            <Flex gap="8" align="center">
                <Avatar
                    size="8"
                    radius="full"
                    style={{ border: "3px solid #113264" }}
                    src={user.image}
                    fallback="TT"
                    color="indigo" />
                <Box >
                    <Text as="div" size="5" weight="bold" mb="2">
                        {user.name}
                    </Text>
                    <Text as="div" size="4" color="gray" mb="2">
                        {user.email}
                    </Text>
                    <ResumeStatusSelect userId={user.id} status={user.resume_requested} />

                </Box>
            </Flex>
        </Card>

    </>;
};

export default UserDetails;