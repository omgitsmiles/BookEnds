import React, { useState } from 'react';
import Button from '@mui/material/Button';
import UserBook from './UserBook';
import { useNavigate } from 'react-router-dom';

const UserHome = ({ user, setUser }) => {
    // const { username, books, reviews, id } = user
    // const [ review, rating ] = reviews
    // const [] = useState({user.books: []})
    const navigate = useNavigate()
   
    
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

    const renderBooks = user.books.map(book => (
        <UserBook key={book.id} book={book} user={user}/>
    ))

    return (

    <div>
    Welcome {user.username}
    <Button onClick={handleDelete}>Logout</Button>
    <br></br>
    MyBooks:
        {renderBooks}
    </div>

    )

}

export default UserHome