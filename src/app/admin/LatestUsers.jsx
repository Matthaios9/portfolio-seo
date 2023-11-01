import prisma from '../../../prisma/client';
import { Avatar, Card, Flex, Heading, Table } from '@radix-ui/themes';
import React from 'react';
import UserStatusBage from './users/_components/UserStatusBage';
import Link from 'next/link';

const LatestUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5
  });

  return (
    <Card>
      <Heading size="4" mb="5">Latest users</Heading>
      <Table.Root>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" align="start" gap="2">
                    <Link href={`/users/${user.id}`}>
                      {user.title}
                    </Link>
                    <UserStatusBage status={user?.resume_requested} />
                  </Flex>
                  {user?.image && (
                    <Avatar
                      src={user?.image}
                      fallback="?"
                      size="2"
                      radius="full"
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestUsers;