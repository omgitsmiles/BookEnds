import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
    <AppBar className="navBar" position="relative" sx={{ bgcolor: "BurlyWood" }}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          BookEnds
        </Typography>
      </Toolbar>
      <Link to="/login"><Avatar src="/broken-image.jpg" /></Link>
    </AppBar>
    </nav>
  )
}

export default NavBar