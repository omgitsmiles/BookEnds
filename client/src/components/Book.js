import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Book = ({ user, books, setBooks }) => {
    const { id } = useParams()
    const [openError, setOpenError] = useState(false)
    const [openSuccess, setOpenSuccess] = useState(false)
    const [book, setBook] = useState({ reviews: [], title: "", book_img: "", description: "", genre: "", author: "" })
    const [error, setError] = useState([])
    const [newReview, setNewReview] = useState("")
    const [rating, setRating] = useState(0)
    const { title, book_img, description, reviews, genre, author } = book

    useEffect(() => {
      const singleBook = books.find(obj => obj.id == id)
      setBook(singleBook)
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
         const updateBooks = books.map(obj => {
            if (obj.id === book.id) {
              book.reviews.push(newReview)
              return book
            } else {
              return obj
            }
          })
          setBooks(updateBooks)
        })
        setNewReview("")
        setOpenSuccess(true)
      } else {
        r.json()
        .then(err => setError(err))
        setOpenError(true)
      }
    })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
    setOpenError(false);
  };

  return (
    <div>
    <Container>
    <Grid container sx={{ justifyContent: 'center', marginTop: "10%", marginBottom: "5%" }}>
        <Grid item key={title} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
                <br></br>
                <br></br>
              </Typography>
              <Typography>
                {description}
              </Typography>
              <br></br>
              <Typography>
                <strong>Genre: </strong>{genre}
              </Typography>
              <br></br>
              <Typography component="legend"><strong>Rate Your Book:</strong></Typography>
              <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(e, newValue) => setRating(newValue)}
              />
              <br></br>
              <Typography component="legend">Review: {reviews.map(r => (
                <div key={r.id}>
                    <i>"{r.review}"</i> - <strong>{r.review_username}</strong>
                </div>
                ))} </Typography>
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
                    /> <br></br>
                    <Button onClick={handleNewReview}>Submit</Button>
                    </form>
                    </> : (
                      <>
                        <br></br>
                        <Button href="/login" sx={{ color: "#6C3429" }}><strong>Sign in to review this book!</strong></Button>
                      </>
                    )}
                </CardContent>
              </Card>
            </Grid>
        </Grid>
        <div>
            {error.errors && openError === true ? (
                <div>
                <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        ERROR!
                    {error.errors.map(err => (
                        <strong key={err}><div>{err}</div></strong>
                    ))}
                    </Alert>
                </Snackbar>
                </div>
            ) : <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Your Review Has Been Added!
                    </Alert> 
                </Snackbar>}
        </div>
  </Container>
    </div>
  )
}

export default Book