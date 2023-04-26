import React from 'react';

import { Box, Divider } from '@mui/material';

import adminAuthApi from '~/api/admin-auth/api';

import { OperatorCard } from './operator-card';

export function Cards() {
  const { data = [] } = adminAuthApi.endpoints.getAllOperators.useQuery(null);
  return (
    <>
      {data.map((operator: any, index: any) => (
        <Box>
          <OperatorCard operator={operator} key={operator.firstName} />

          {index !== operator.length - 1 && <Divider />}

        </Box>
      ))}

    </>
  );
}
