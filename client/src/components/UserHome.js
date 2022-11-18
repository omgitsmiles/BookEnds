import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import UserBook from './UserBook';
import { useNavigate } from 'react-router-dom';

const UserHome = ({ user, setUser }) => {
    // const [reviews, setReviews] = useState([])
    const { reviews } = user 
    const { username, books } = user
    const navigate = useNavigate()

    console.log(reviews)

    // useEffect(() => {
    //     fetch("/reviews")
    //     .then(r => r.json())
    //     .then(review => setReviews(review))
    //   }, [])
  
    
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

    const renderReviews = reviews.map(re => re.review)

    const renderBooks = books.map(book => (
        <UserBook key={book.id} bookReviews={renderReviews} book={book} user={user}/>
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