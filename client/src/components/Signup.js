import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
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

export default function SignUp({ onSubmitNewUser }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [quote, setQuote] = useState("")
    const [password, setPassword] = useState("")
    const [avatar, setAvatar] = useState("")
    const [errorsMsg, setErrorsMsg] = useState([])
    const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {username: name, email: email, quote: quote, password: password, avatar: avatar}
    fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newUser)
    })
    .then(r => {
        if (r.ok) {
            r.json()
            .then(newUser => onSubmitNewUser(newUser))
            navigate("/home")
            } else {
            r.json()
            .then(err => setErrorsMsg(err))
            }
        })
    };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="userName"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  autoFocus
                  onChange={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="Email"
                  autoComplete="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="quote"
                  label="Favorite Book quote"
                  name="quote"
                  autoComplete="Favorite Book Quote"
                  onChange={e => setQuote(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={e => setPassword(e.target.value)}
                  />
                  <br></br>
                  <br></br>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="avatar"
                    label="Profile Picture"
                    type="avatar"
                    id="avatar"
                    autoComplete="new-avatar"
                    onChange={e => setAvatar(e.target.value)}
                  />
                </Grid>
                {errorsMsg.errors ? ( 
                    <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {errorsMsg.errors.map(error => (
                     <strong key={error}><div>{error}</div></strong>
                    ))}
                    </Alert>
                ): null}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
