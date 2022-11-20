import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
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
        <NavLink style={{ textDecoration: "none" }} className="userNavBarlinks" to="/books/new">
        <Fab variant="extended">
          <LocalLibraryIcon sx={{ mr: 1 }} />
            Add Book
        </Fab>
        </NavLink>
      </div>
    </AppBar>
    </nav>
  )
}

export default NavBar