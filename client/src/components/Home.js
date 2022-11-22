import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/omgitsmiles">
        omgitsmiles
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Album({ books, user }) {
    const navigate = useNavigate()
    const bookLink = (bookid) => {
        navigate(`/books/${bookid}`);
    }

    // console.log(user)
    // console.log(books)

    // const ratings = books.map(book => {
    //   book.reviews.map(review => {
    //     user.reviews.map(rev => rev.id !== review.id ? rev.rating : null)
    //   })
    // })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {books.map((book) => (
              <Grid item key={book.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
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
                    <br></br>
                    {/* <Typography variant="h6">Your Rating:</Typography>
                    <Rating name="read-only" value={book.reviews.map(review => review.rating)} readOnly /> */}
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center' }}>
                    <Button sx={{ flex: 'auto' }} size="small" onClick={() => bookLink(book.id)}>View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.primary"
          component="p"
        >
          a Ruby on Rails and React.js production 🤝
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}