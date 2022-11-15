import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const UserHome = ({ user, setUser, loggedIn }) => {
    let navigate = useNavigate()
    
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

    // console.log(user.books.map(book => book.title))

    // const renderBooks =  user.books.map(book => {
    //      if (loggedIn) { (
    //     <ul>
    //         <li>{book.title}</li>
    //         <li>{book.author}</li>
    //         <li>{book.genre}</li>
    //     </ul>
    // )}})

    return (
    <div>
    Welcome {user.username}
    <Button onClick={handleDelete}>Logout</Button>
    <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {user.books.map((book) => (
              <Grid item key={book.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={book.image}
                    alt={book.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {book.title}
                    </Typography>
                    <Typography>
                      {book.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
    )

}

export default UserHome