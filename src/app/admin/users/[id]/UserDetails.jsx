import { User } from "@prisma/client";
import {
    Card,
    Flex,
    Avatar,
    Box,
    Text,
    Heading,
    Container
} from "@radix-ui/themes";
import React from "react";
import ResumeStatusSelect from './ResumeStatusSelect'

const UserDetails = ({ user }) => {
    return (<Box >

        <Card size="3" style={{ width: 500 }} my="5">
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
        <Box height="8" pt={3}>
            <p><b>No</b>- Shows User has not requested for resume yet</p>

            <p><b>Yes</b>- When user requested for resume</p>
            <p><b>Approved</b>- If admin approves for resume, Status will be Approved</p>
            <p><b>Denied</b>- If admin denies for resume, Status will be Approved</p>
        </Box>
    </Box>);
};

export default UserDetails;