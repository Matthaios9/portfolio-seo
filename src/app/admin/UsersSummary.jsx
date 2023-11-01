
import { Card, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';


const IssueSummary = ({ NO,YES, APPROVED, DENIED } ) => {
  const containers = [
    { label: 'Resume YES ', value: YES, status: 'YES' },
    {
      label: 'Resume NO',
      value: NO,
      status: 'NO',
    },
    { label: 'Resume Approved', value: APPROVED, status: 'APPROVED' },
    { label: 'Resume Denied', value: DENIED, status: 'DENIED' },
  ];

  return (
    <Flex gap="4">
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction="column" gap="1">
            <Link
              className='text-sm font-medium'
              href={`/issues/list?status=${container.status}`}
            >
              {container.label}
            </Link>
            <Text size="5" className='font-bold'>{container.value}</Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;