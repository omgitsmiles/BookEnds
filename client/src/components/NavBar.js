import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({ user }) => {

//float

  return (
    <nav>
    <AppBar className="navBar" position="relative" sx={{ bgcolor: "#f4e7d7" }}>
      <Toolbar>
        {/* <Typography variant="h6" color="inherit" noWrap> */}
         <NavLink style={({ textDecoration: "none" })}to='/home'>📚ends</NavLink> 
         { user.id ? (<Link className="userNavBarlinks" to="/user/home"><Avatar src={user.avatar} /></Link> ) : ""}
        {/* </Typography> */}
      </Toolbar>
      <div>
          {!user.id ? (
        <Link  to="/login"><button variant="text" className="signIn">Sign In</button></Link>
          ) : ( "" 
         )}
        <Link className="userNavBarlinks" to="/books/new"><button>Add a Book</button></Link>
      </div>
    </AppBar>
    </nav>
  )
}

export default NavBar