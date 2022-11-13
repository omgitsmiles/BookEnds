import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Delete';

const UserHome = ({ user, setUser }) => {
    const [avatar, setAvatar] = useState("")
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
    console.log(user)

    const handleUpdate = (e) => {
        e.preventDefault()
        fetch("/update", {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({avatar: avatar})
        })
        .then(r => r.json())
        .then(data => console.log(data))
    }


  return (
    
    <div>Hi {user ? user.username : null}
    <button onClick={handleDelete}>Logout</button>
    <form onSubmit={handleUpdate}>
        <input type="text" onChange={e => setAvatar(e.target.value)}></input>
        <button>update</button>
    </form>
    </div>
  )
}

export default UserHome