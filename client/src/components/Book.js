import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Book = ({ user }) => {
    const {id} = useParams()
    const [book, setBook] = useState({ reviews: [] })
    const [error, setError] = useState([])
    const [newReview, setNewReview] = useState("")
    const [rating, setRating] = useState(0)
    const { reviews, title, book_img, description, users } = book

    useEffect(() => {
        fetch(`/books/${id}`)
        .then(r => r.json())
        .then(b => setBook(b))
    }, [id])

    const handleNewReview = () => {
      const writtenReview = {review: newReview, rating: rating, book_id: id}
      fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(writtenReview)
      })
      .then(r => {
      if (r.ok) {
        r.json()
        .then(newReview => {
          setBook({...book, reviews: [...reviews, newReview]})
        })
        setNewReview("")
      } else {
        r.json()
        .then(err => setError(err))
      }
    })
  }

  return (
    <div>
    <Container sx={{ py: 8 }} maxWidth="md">
    <Grid container spacing={4}>
        <Grid item key={title} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              sx={{
                // 16:9
                pt: '56.25%',
              }}
              image={book_img}
              alt={title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography>
                {description}
              </Typography>
              <Typography component="legend"><strong>Rate Your Book:</strong></Typography>
              <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
              />
              <Typography component="legend"><strong>Review: {reviews.review !== "" ? reviews.map(r => (
                <div key={r.id}>"{r.review}" - {users.map((user => user.id === r.user_id ? user.username : null))}</div>
                )) : null}</strong></Typography>
                {user.id ? <>
                <br></br>
               <strong>Write your review:</strong><form>
                <br></br>
                   <TextField 
                    className="review"
                    id="outlined-multiline-static"
                    label="Review"
                    multiline
                    rows={10}
                    onChange={(e) => setNewReview(e.target.value)}
                    /> <Button onClick={handleNewReview}>Submit</Button>
                    </form>
                    </> : (
                      <>
                        <br></br>
                        <strong>Sign in to review this book!</strong>
                      </>
                    )}
            </CardContent>
          </Card>
        </Grid>
    </Grid>
  </Container>
  </div>
  )
}

export default Book