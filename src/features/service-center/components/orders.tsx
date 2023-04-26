import React, { useState } from 'react';

import {
  Box, Button, styled, Divider,
} from '@mui/material';

import { ApprovedOrders } from './approved-orders';
import { PendingOrders } from './pending-orders';

export function Orders() {
  const [pending, setPending] = useState(true);
  // request pending and approved orders
  const handleFirst = () => {
    setPending(!pending);
    setSecond(false);
    setFirst(true);
  };
  const handleSecond = () => {
    setPending(!pending);
    setFirst(false);
    setSecond(true);
  };

  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(!first);
  return (
    <BoxStyle>
      <Box sx={{ display: 'flex', gap: 2 }}>
        {
          first && (
          <>
            <Button onClick={handleFirst} variant="outlined" color="secondary">
              Заказы на подтвердения
            </Button>
            <Button onClick={handleSecond} color="secondary">
              Заказы на выдачу
            </Button>
          </>
          )
        }
        {
          second && (
          <>
            <Button onClick={handleFirst} color="secondary">
              Заказы на подтвердения
            </Button>
            <Button onClick={handleSecond} variant="outlined" color="secondary">
              Заказы на выдачу
            </Button>
          </>
          )
        }

      </Box>
      <Divider />
      {pending ? <PendingOrders />
        : <ApprovedOrders />}
      {/* <OrderTracking /> */}
    </BoxStyle>

  );
}
const BoxStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '70vh',
  minWidth: '100%',
  overflow: 'scroll',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));
