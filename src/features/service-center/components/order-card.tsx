import React from 'react';

import {
  Box, styled, Stack, Typography, Button,
} from '@mui/material';

import serviceCenterApi from '~/api/service-center/api';
import { DialogForm } from '~/components/Dialog';

import { OperatorRequest } from '../types';
import { HandoutOrderForm } from './handout-order-form';

type Props = {
    order: OperatorRequest
}

export function OrderCard({ order: { requesterUser, trustedUser, userRequest } }: Props) {
  const [open, setOpen] = React.useState(false);
  const [approveDelivery] = serviceCenterApi.endpoints.approveDelivery.useMutation();
  const handleAccept = async () => {
    const res = await approveDelivery(userRequest.id).unwrap();
    console.log(res);
  };

  const handleDeny = () => {
    // deny the order
  };
  const handleHandout = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BoxStyle>
      <Stack spacing={1.5} sx={{ justifyContent: 'center' }}>
        <Typography variant="caption">
          ФИО клиента:
          {requesterUser.firstName}
          {' '}
          {requesterUser.lastName}
          {' '}
          {requesterUser.middleName}
          {' '}
        </Typography>

        {
            trustedUser && (
            <Typography variant="caption">
              ФИО довирительного человека:
              {' '}
              {trustedUser.firstName}
              {' '}
              {trustedUser.lastName}
              {' '}
              {trustedUser.middleName}
            </Typography>
            )
        }
        <Typography variant="caption">
          Гос-услуга:
          {' '}
          {userRequest.request.serviceName}
          <br />
          {userRequest.id}
        </Typography>
      </Stack>

      <Stack spacing={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        {userRequest.status === 'pending' ? (
          <Box sx={{
            displey: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
          >
            <Button color="secondary" onClick={handleAccept}>
              Принять
            </Button>
            <Button color="error" onClick={handleDeny}>
              Отказать
            </Button>
          </Box>
        )
          : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="outlined" color="warning" onClick={handleHandout}>
                Выдать
              </Button>
            </Box>

          )}

        <DialogForm
          open={open}
          onClose={handleClose}
          onOpen={handleHandout}
          title="Проверка номера"
          hasCloser
        >
          <HandoutOrderForm
            id={userRequest.id}
            buttonTitle="Проверить"
            onCloseForm={handleClose}
          />
        </DialogForm>
      </Stack>
    </BoxStyle>
  );
}

const BoxStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  minWidth: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
