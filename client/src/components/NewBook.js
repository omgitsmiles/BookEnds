import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React, { useState } from 'react'

const NewBook = ({ onSubmitAddBook }) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [errorMsg, setErrorMsg] = useState([])

    const handleSubmit = () => {
        const newBook = {title: title, author: author, genre: genre, description: description, book_img: image}
        fetch("/books", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newBook)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(book => onSubmitAddBook(book))
            } else {
                r.json().then(err => setErrorMsg(err))
            }
        })
    }

    console.log(errorMsg)

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="filled-helperText"
          label="Title"
          variant="filled"
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          id="filled-helperText"
          label="Author"
          variant="filled"
          onChange={e => setAuthor(e.target.value)}
        />
        <br></br>
        <TextField
          id="filled-helperText"
          label="Genre"
          variant="filled"
          onChange={e => setGenre(e.target.value)}
        />
        <TextField
          id="filled-helperText"
          label="Description"
          variant="filled"
          onChange={e => setDescription(e.target.value)}
        />
        <br></br>
        <TextField
          id="filled-helperText"
          label="Book Image"
          variant="filled"
          onChange={e => setImage(e.target.value)}
        />
        <br></br>
         <Button onClick={handleSubmit} variant="contained" sx={{ bgcolor: "#6C3429" }} endIcon={<MenuBookIcon />}>
            Send
         </Button>
            {errorMsg.error ? (
                <div>
                <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
               {errorMsg.error.map(err => (
                     <strong key={err}>{err}</strong>
                ))}
                </Alert>
                </div>
            ) : null}
    </Box>
  )
}

export default NewBook