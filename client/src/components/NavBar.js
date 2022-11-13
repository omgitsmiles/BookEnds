import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paolo from '../assets/Paolo.jpeg'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
  return (
    <nav>
    <AppBar className="navBar" position="relative" sx={{ bgcolor: "BurlyWood" }}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
         <Link to='/home'>BookEnds</Link> 
        </Typography>
      </Toolbar>{!user ? (
       <Link to="/login"><Button variant="text">Sign In</Button></Link>
        ) : ( 
      <Link to="/user/home"><Avatar src={Paolo} /></Link> )}
      
    </AppBar>
    </nav>
  )
}

export default NavBar