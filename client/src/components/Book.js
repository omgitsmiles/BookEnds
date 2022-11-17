import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
    const {id} = useParams()
    const [book, setBook] = useState([])
    const { reviews, title, book_img, description } = book

    console.log(reviews)

    useEffect(() => {
        fetch(`/books/${id}`)
        .then(r => r.json())
        .then(b => setBook(b))
    }, [id])

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
                //   value={rating}
                  // onChange={(newValue) => {
                  // setValue(newValue);
                  // }}
              />
              {/* <Typography component="legend"><strong>Review: {reviews.map(r => (
                <div>"{r.review}" - {}</div>
                ))}</strong></Typography> */}
            </CardContent>
          </Card>
        </Grid>
    </Grid>
  </Container>
  </div>
  )
}

export default Book