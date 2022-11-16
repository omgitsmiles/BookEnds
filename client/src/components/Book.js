import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Book = ({ user }) => {
    const {id} = useParams()
    const [book, setBook] = useState([])

    useEffect(() => {
        fetch(`/books/${id}`)
        .then(r => r.json())
        .then(b => setBook(b))
    }, [id])

    console.log(book)

  return (
    <div>
    <Container sx={{ py: 8 }} maxWidth="md">
    <Grid container spacing={4}>
      {/* {book.map((b) => ( */}
        <Grid item key={book.title} xs={12} sm={6} md={4}>
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
                  // value={value}
                  // onChange={(newValue) => {
                  // setValue(newValue);
                  // }}
              />
            </CardContent>
          </Card>
        </Grid>
      {/* ))} */}
    </Grid>
  </Container>
  </div>
  )
}

export default Book