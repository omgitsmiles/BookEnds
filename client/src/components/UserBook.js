import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react'

const UserBooks = ({ book, user }) => {
  const { reviews } = user
  const [ review ] = reviews
  const [rateBook, setRateBook] = useState(review.rating)
  const [toggleNewReview, setToggieNewReview] = useState(false)
  const [newReview, setNewReview] = useState("")
  const [previews, setPreviews] = useState([])

    useEffect(() => {
      fetch("/reviews")
      .then(r => r.json())
      .then(rview => setPreviews(rview))
    }, [])

    // console.log(previews)

    const handleUpdate = () => {
        const addReview = {review: newReview}
        fetch(`/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(addReview)
        })  
        .then(r => r.json())
        // .then(review => setUser(user.reviews[review])) How to update state on nested array? also add error handling on Book.js
        setNewReview("")
    }

    
    
    
  return (
    <div>
         <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {/* {books.map((book) => ( */}
              <Grid item key={book} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={book.book_img}
                    alt={book.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {book.title}
                    </Typography>
                    <Typography>
                      {book.description}
                    </Typography>
                    <Typography component="legend"><strong>Rate Your Book:</strong></Typography>
                    <Rating
                        name="simple-controlled"
                        defaultValue={review.rating}
                        onChange={e => setRateBook(e.target.value)}
                        // onChange={(rateBook) => {
                        // setRateBook(rateBook);
                        // }}
                    />
                    <Typography component="legend"><strong>Your Review:</strong></Typography>
                    <Typography>"{reviews.map(rev => rev.review)}"</Typography>
                    <Button onClick={() => setToggieNewReview(toggle => !toggle)}>Write a review</Button>
                   {toggleNewReview ?  
                   <form>
                   <TextField 
                    className="review"
                    id="outlined-multiline-static"
                    label="Review"
                    multiline
                    rows={10}
                    defaultValue={review.review}
                    onChange={(e) => setNewReview(e.target.value)}
                    /> <Button onClick={handleUpdate}>Submit</Button>
                    </form> : null}
                  </CardContent>
                </Card>
              </Grid>
            {/* ))} */}
          </Grid>
        </Container>
    </div>
  )
}

export default UserBooks