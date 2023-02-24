import NextLink from 'next/link';

import { AppBar, Toolbar, IconButton, Link, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <AppBar
      position='sticky'
      elevation={0}
      sx={{ flexDirection: 'row', alignItems: 'center', paddingRight: '20px' }}
    >
      <Toolbar>
        <IconButton size='large' edge='start'>
          <MenuOutlined />
        </IconButton>
      </Toolbar>

      <Link href='/' component={NextLink}>
        <Typography variant='h6' color='white'>
          CookieMaster
        </Typography>
      </Link>

      <div style={{ flex: 1}}></div>

      <Link href='/theme-changer' component={NextLink}>
        <Typography variant='h6' color='white'>
          Cambiar Tema
        </Typography>
      </Link>
    </AppBar>
  );
};
