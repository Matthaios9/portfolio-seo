import { EventStatus, UserStatus } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'
const statusMap = {
    NO: { label: 'NO', color: 'gray' },
    YES: { label: 'YES', color: 'yellow' },
    APPROVED: { label: 'Approved', color: 'green' },
    DENIED: { label: 'declined', color: 'red' },
};

const UserStatusBage = ({ status }) => {
    return (
        <Badge color={statusMap[status].color}>
            {statusMap[status].label}
        </Badge>
    )
}

export default UserStatusBage