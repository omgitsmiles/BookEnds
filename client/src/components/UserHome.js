import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup } from '@mui/material';

const UserHome = ({ user, setUser }) => {
    const [toggleNewReview, setToggieNewReview] = useState(false)
    const navigate = useNavigate()
    // const [rating, setRating] = useState()
    
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

    const handleUpdate = () => {
        fetch("/reviews/")
    }

    const handleToggle = () => {
        setToggieNewReview(toggle => !toggle)
    }

    console.log(toggleNewReview)

    return (

    <div>
    Welcome {user.username}
    <Button onClick={handleDelete}>Logout</Button>
    <br></br>
    MyBooks:
    <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {user.books.map((book) => (
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
                        // value={value}
                        // onChange={(newValue) => {
                        // setValue(newValue);
                        // }}
                    />
                    <Typography component="legend"><strong>Your Review:</strong></Typography>
                    <Typography>"{user.reviews.map(r => r.review)}"</Typography>
                    <Button onClick={handleToggle}>Write a review</Button>
                   {toggleNewReview ?  <TextField 
                    className="blogPost"
                    id="outlined-multiline-static"
                    label="Review"
                    multiline
                    rows={10}
                    // value={blogPost}
                    // onChange={(e) => setBlogPost(e.target.value)}
                    /> : null}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>

    )

}

export default UserHome