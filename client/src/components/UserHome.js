import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import UserBook from './UserBook';
import Typography from '@mui/material/Typography';

const UserHome = ({ user, setUser }) => {
    const [reviews, setReviews] = useState([])
    const { username, books } = user
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/reviews")
        .then(r => r.json())
        .then(reviewData => setReviews(reviewData))
      }, [user])

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

    const onDeleteBookReview = (newBookArray) => {
        setUser({...user, books: newBookArray})
    }

    const renderBooks = books.map(book => (
        <UserBook key={book.id} setReviews={setReviews} reviews={reviews} book={book} books={books} onDeleteBookReview={onDeleteBookReview}/>
        ))


    return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <strong>Welcome {username}!</strong> 
            <div>
                <Button onClick={handleDelete} variant="body2" color="text.primary">Logout</Button>
            </div>
            <br></br>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 700 }}>My Books:</Typography>
            {renderBooks}
            </div>

    )
}

export default UserHome