import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import React, { useState } from 'react'

const UserBooks = ({ book, user }) => {
  const { reviews } = user
  const { id, book_img, title, description } = book
  const [ review ] = reviews
  const [rateBook, setRateBook] = useState(review.rating)
  const [toggleNewReview, setToggieNewReview] = useState(false)
  const [newReview, setNewReview] = useState("")

    const handleUpdate = () => {
        const addReview = {review: newReview, rating: rateBook}
        fetch(`/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(addReview)
        })  
        .then(r => r.json())
      // .then(rev => setUser({user.reviews[...rev.rating, rev.review]})
      //   setNewReview("")
    }
    
    console.log(user.reviews)


    // const updatedReviews = user.reviews.map(rev => rev {
    //   if rev.id === addReview.id {
    //   return addReview }
    //     else {
    //       return rev
    //     }
    //   }
    //   user.reviews = updatedReviews
    //   setUser({...user})

   
  // how to handle grabbing the individual review id? maybe map?
  const handleDelete = (reviewId) => {
    fetch(`/reviews/${reviewId}`, {
      method: "DELETE"
    })
  }
    
  const userReviewText = reviews.find(rev => rev.book_id === book.id).review

  return (
    <div>
         <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
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
                        defaultValue={reviews.map(rev => rev.book_id === id ? rev.rating : null)}
                        onChange={e => setRateBook(e.target.value)}
                    />
                    <Typography component="legend"><strong>Your Review:</strong></Typography>
                    <Typography>"{userReviewText}"</Typography>
                    <Button onClick={() => setToggieNewReview(toggle => !toggle)}>Update Your Review</Button>
                   {toggleNewReview ?  
                   <form>
                   <TextField 
                    className="review"
                    id="outlined-multiline-static"
                    label="Review"
                    multiline
                    rows={10}
                    defaultValue={userReviewText}
                    onChange={(e) => setNewReview(e.target.value)}
                    /> <Button onClick={handleUpdate}>Submit</Button>
                    </form> : null}
                    <Button onClick={() => console.log(reviews)} sx={{ justifyContent: "center" }} variant="outlined" color="error">
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