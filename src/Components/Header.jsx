import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu'; 
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
           <Box sx={{ fontWeight: '900', m: 1 }}> Shortly</Box>
          </Typography>

          {/* Menu for mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              <MenuItem>
                <Typography textAlign="center"><Box sx={{ fontWeight: 'bold', m: 1 }}><NavLink className={(e) =>{return e.isActive?"change": ""}} to="/">Home</NavLink></Box></Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center"><Box sx={{ fontWeight: 'bold', m: 1 }}><NavLink className={(e) =>{return e.isActive?"change": ""}} to="/about">About</NavLink></Box></Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center"><Box sx={{ fontWeight: 'bold', m: 1 }}><NavLink className={(e) =>{return e.isActive?"change": ""}} to="/contact">Contact</NavLink></Box></Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center"><Box sx={{ fontWeight: 'bold', m: 1 }}><NavLink className={(e) =>{return e.isActive?"change": ""}} to="/resources">Resources</NavLink></Box></Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Box sx={{ fontWeight: '900', m: 1 }}>Shortly</Box>
          </Typography>

          {/* Navigation NavLinks */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Box sx={{ fontWeight: 'bold', m: 1 }}><NavLink className={(e) =>{return e.isActive ? "change": ""}} to="/">Home</NavLink></Box></Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Box sx={{ fontWeight: 'bold', m: 1 }}><NavLink className={(e) =>{return e.isActive ? "change": ""}} to="/about">About</NavLink></Box></Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Box sx={{ fontWeight: 'bold', m: 1 }}><NavLink className={(e) =>{return e.isActive ? "change": ""}} to="/resources">Resources</NavLink></Box></Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Box sx={{ fontWeight: 'bold', m: 1 }}><NavLink className={(e) =>{return e.isActive ? "change": ""}} to="/contact">Contact</NavLink></Box></Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
