import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Delete';

const UserHome = ({ user }) => {
    let navigate = useNavigate()
    
    const handleDelete = (user) => {
        fetch("/logout", {
            method: "DELETE"
        })
        navigate("/login")
    }

  return (
    
    <div>Hi {user ? user.username : null}
    <button onClick={handleDelete}>Logout</button>
    </div>
  )
}

export default UserHome