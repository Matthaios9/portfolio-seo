
import UserStatusBage from '../_components/UserStatusBage';
import { ArrowUpIcon } from '@radix-ui/react-icons'
import { Flex, Table, TableColumnHeaderCell, Text } from '@radix-ui/themes'
import React from 'react'
import NextLink from 'next/link';
import { User, UserStatus } from '@prisma/client'
import { getServerSession } from 'next-auth';
import authOptions from '../../../api/auth/[...nextauth]/authOption';
import Link from 'next/link';


const UserTable = ({ searchParams, User }) => {

    const session = getServerSession(authOptions)

    return (
        <Table.Root variant="surface" className='w-full'>
            <Table.Header>
                <Table.Row>
                    {columns.map((column) => (

                        <Table.ColumnHeaderCell
                            key={column.value}
                            className={column.className}
                        >
                            <NextLink
                                href={{
                                    query: {
                                        ...searchParams,
                                        orderBy: column.value,
                                    },
                                }}
                            >
                                {column.label}
                            </NextLink>
                            {column.value === searchParams.orderBy && (
                                <ArrowUpIcon className="inline" />
                            )}
                        </Table.ColumnHeaderCell>
                    ))}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {User.length < 1 && < Table.Row > <Table.Cell align='center' colSpan={4}>No Data Found</Table.Cell></Table.Row>}
                {User.map((user) => (
                    <Table.Row key={user.id}>
                        <Table.Cell >
                            <NextLink href={`/admin/users/${user.id}`} className='underline text-blue-600'>
                                {user.name}
                            </NextLink>
                            <div className="block md:hidden" >
                                {/* <UserStatusBage status={user.resume_requested} /> */}
                            </div>
                        </Table.Cell>
                        <Table.Cell className="hidden md:table-cell">
                            <Text size="2">{user.email}</Text>
                        </Table.Cell>
                        <Table.Cell className="hidden md:table-cell">
                            <UserStatusBage status={user.resume_requested} />
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root >
    )
}

const columns = [
    {
        label: 'User Name ',
        value: 'name'
    },
    {
        label: 'Email Address',
        value: 'email',
        className: 'hidden md:table-cell',
    },
    {
        label: 'Resume Requested',
        value: 'resume_requested',
        className: 'hidden md:table-cell',
    },

];

export const columnNames = columns.map(column => column.value);


export default UserTable