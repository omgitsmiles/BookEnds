import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import UserBook from './UserBook';
import { useNavigate } from 'react-router-dom';

const UserHome = ({ user, setUser }) => {
    const [reviews, setReviews] = useState([])
    const { username, books } = user
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/reviews")
        .then(r => r.json())
        .then(reviewData => setReviews(reviewData.map(review => review)))
      }, [])

    const handleDelete = () => {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(r => {
            if (r.ok) {
            setUser({username: "", books: [], reviews: []})
            }
        })
        navigate("/login")
    }

    const renderBooks = books.map(book => (
        <UserBook key={book.id} setReviews={setReviews} reviews={reviews} book={book} user={user} setUser={setUser}/>
        ))

    return (
            <div>
            Welcome {username}
            <Button onClick={handleDelete}>Logout</Button>
            <br></br>
            MyBooks:
            {renderBooks}
            </div>

    )
}

export default UserHome