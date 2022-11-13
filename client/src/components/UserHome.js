import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Delete';

const UserHome = ({ user, setUser }) => {
    let navigate = useNavigate()
    
    const handleDelete = () => {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(r => {
            if (r.ok) {
            setUser(null)
            }
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