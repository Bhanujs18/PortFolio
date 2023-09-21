import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import AdbIcon from '@mui/icons-material/Adb';
import { Stack } from '@mui/material';
import {  NavLink } from 'react-router-dom';
import "../App.css";


const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position='static' sx={{color :'white', top: 0, margin: 0,}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to='/' style={{color:'white',display:"flex", alignItems:'center', textDecoration:'none'}}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{ymr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Bhanu js
          </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <Stack onClick={handleCloseNavMenu} direction='column'>
                <Button ><NavLink className='navButtonn' to="/">Home</NavLink></Button>
            <Button > <NavLink className='navButtonn' to="/aboutme">About me</NavLink></Button>
            <Button ><NavLink className='navButtonn' to="/chat">Chat</NavLink></Button> 
            </Stack>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Bhanu js
          </Typography>
          <Box onClick={handleCloseNavMenu} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
            <Button  onClick={handleCloseNavMenu}><NavLink className='navButton' to="/">Home</NavLink></Button>
            <Button ><NavLink className='navButton' to="/about">About me</NavLink></Button>
            <Button ><NavLink className='navButton' to="/chat">Chat</NavLink></Button> 
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
