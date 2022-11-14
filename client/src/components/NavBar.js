import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paolo from '../assets/Paolo.jpeg'
import Typography from '@mui/material/Typography';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({ user }) => {


  return (
    <nav>
    <AppBar className="navBar" position="relative" sx={{ bgcolor: "#f4e7d7" }}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
         <NavLink style={({ textDecoration: "none" })}to='/home'>📚ends</NavLink> 
        </Typography>
      </Toolbar>{!user ? (
       <Link to="/login"><button variant="text" className="signIn">Sign In</button></Link>
        ) : ( 
      <Link to="/user/home"><Avatar src={user.avatar} /></Link> )}
      <Link to="/books/new"><button>Add a Book</button></Link>
    </AppBar>
    </nav>
  )
}

export default NavBar