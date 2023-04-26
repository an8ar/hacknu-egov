import React from 'react';

import {
  Box, styled, Button, Typography, Divider,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { Logo } from '~/assets/logo';
import { APPLICATION_NAME } from '~/config';
import { useAuth } from '~/hooks/useAuth';
import { useAppDispatch, useAppSelector } from '~/store';

import { logout } from '../features/auth/authSlice';

type Props = {
  children: React.ReactNode;
  meta?: React.ReactNode;
  title: string;
};

export function Page({ children, meta, title }: Props) {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { token, isLoggedIn } = useAuth();

  const authAdmin = useAppSelector((state) => state.operatorAuthSlice);
  const handleClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  return (
    <>
      <Helmet>
        <title>{`${title} | ${APPLICATION_NAME}`}</title>
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=<bf8de00e-33da-4e48-be44-d8ee1dee2acd
>=ru_RU"
          type="text/javascript"
        />
        <script type="text/javascript" />

        {meta}
      </Helmet>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <BoxStyle>
          <Box>
            <Typography variant="caption" color="green" sx={{ mr: 2 }}>
              Қазақша
            </Typography>
            <Typography variant="caption" color="green">
              Руский
            </Typography>
          </Box>
          <Logo />
          {isLoggedIn ? <Button color="error" onClick={handleLogout}>Logout</Button>
            : <Button color="success" onClick={handleClick}>Login</Button>}
        </BoxStyle>
        <Divider />
        {children}
      </Box>
    </>
  );
}

const BoxStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: theme.spacing(3),
}));
