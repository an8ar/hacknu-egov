import React from 'react';

import { Typography, Box } from '@mui/material';

type Props ={
    operator: any
}

export function OperatorCard({ operator }: Props) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 4 }}>
      <Typography variant="h5">
        {operator.firstName}
      </Typography>
      <Typography variant="h5">
        {operator.lastName}
      </Typography>
      <Typography variant="h5">
        {operator.phone}
      </Typography>
    </Box>
  );
}
