import React from 'react';

import {
  Box, Container, styled, Typography,
} from '@mui/material';

import { Page } from '~/components/Page';
import { APPLICATION_NAME } from '~/config';
import { HomeClient } from '~/features/client';
import { Login } from '~/features/staff-auth';

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(8, 0),
}));

export function LoginPage() {
  return (
    <Page title="Login">
      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Войти
              {' '}
              {APPLICATION_NAME}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Заполните данные о вас</Typography>
            <HomeClient />
          </Box>
        </ContentStyle>
      </Container>
    </Page>
  );
}

export function AdminLoginPage() {
  return (
    <Page title="Login">
      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Войти
              {' '}
              {APPLICATION_NAME}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Заполните данные о вас</Typography>
          </Box>
          <Login />
        </ContentStyle>
      </Container>
    </Page>
  );
}
