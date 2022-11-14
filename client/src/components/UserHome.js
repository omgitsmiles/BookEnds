import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const UserHome = ({ user, setUser }) => {
    // const [avatar, setAvatar] = useState("")
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

    // const renderBooks = user.books.map(book => (
    //     <ul>
    //         <li>{book.title}</li>
    //         <li>{book.author}</li>
    //         <li>{book.genre}</li>
    //     </ul>
    // ))

  return (
    
    <div>Welcome {user ? user.username : null}
    <Button onClick={handleDelete}>Logout</Button>
    {/* {user ? renderBooks : null} */}
    </div>
  )
}

export default UserHome