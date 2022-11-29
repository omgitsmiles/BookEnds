import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const UserBooks = ({ book, reviews, onDeleteBookReview, books, setReviews }) => {
  const [rateBook, setRateBook] = useState(0)
  const [toggleNewReview, setToggieNewReview] = useState(false)
  const [newReview, setNewReview] = useState("")
  const { id, book_img, title, description, author } = book

  const singleReview = reviews.find(rev => rev.book_id === id)

    const handleUpdate = () => {
        const addReview = {review: newReview, rating: rateBook}
        fetch(`/reviews/${singleReview.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(addReview)
        })  
        .then(r => r.json())
        .then(newReview => {
          const updatedReview = reviews.map(review => review.id === newReview.id ? newReview : review)
          setReviews(updatedReview)
        })
        alert("Your review has been updated")
    }
 
  const handleDelete = () => {
    fetch(`/reviews/${singleReview.id}`, {
      method: "DELETE"
    })
    .then(r => {
      if (r.ok) {
        const filteredReview = reviews.filter(review => review.id !== singleReview.id)
        const filteredBook = books.filter(b => b.id !== book.id)
        setReviews(filteredReview)
        onDeleteBookReview(filteredBook)
      } 
    })
    }

  return (
    <div>
         <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container sx={{ justifyContent: 'center' }}>
              <Grid item key={book} xs={12} sm={6} md={4}>
                <Card className="card"
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={book_img}
                    alt={title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography>
                      <strong>Author: </strong>
                      <br></br>
                      {author}
                    </Typography>
                    <Typography>
                      <br></br>
                      {description}
                    </Typography>
                    <Typography component="legend"><strong>Rate Your Book:</strong></Typography>
                    <Rating
                        name="simple-controlled"
                        onChange={(e, newRating) => setRateBook(newRating)}
                        defaultValue={singleReview?.rating || 0}
                    />
                    <Typography component="legend"><strong>Your Review:</strong></Typography>
                    <Typography>"{singleReview?.review}"</Typography>
                    <Button onClick={() => setToggieNewReview(toggle => !toggle)}>Update Your Review</Button>
                   {toggleNewReview ?  
                   <form>
                   <TextField 
                    className="review"
                    id="outlined-multiline-static"
                    label="Review"
                    multiline
                    rows={10}
                    defaultValue={singleReview?.review}
                    onChange={(e) => setNewReview(e.target.value)}
                    /> <Button onClick={handleUpdate}>Submit</Button>
                    </form> : null}
                    <Button onClick={handleDelete} sx={{ justifyContent: "center" }} variant="outlined" color="error">
                      Delete Review
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
    </div>
  )
}

export default UserBooks