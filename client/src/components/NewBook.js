import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import React, { useState } from 'react'

const NewBook = ({ onSubmitAddBook }) => {
    const [open, setOpen] = useState(false)
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
                setOpen(true)
        })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

  return (
    <div>
    <Box
      className="newBook"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
       <h3><ImportContactsIcon></ImportContactsIcon></h3>
        <div>
        <TextField
          id="filled-helperText"
          label="Title"
          variant="filled"
          onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>   
        <TextField
          id="filled-helperText"
          label="Author"
          variant="filled"
          onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <TextField
          id="filled-helperText"
          label="Genre"
          variant="filled"
          onChange={e => setGenre(e.target.value)}
        />
        <div>
        <TextField
          id="filled-helperText"
          label="Description"
          variant="filled"
          onChange={e => setDescription(e.target.value)}
          />
        </div>
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
        <div>
            {errorMsg.errors ? (
                <div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        ERROR!
                    {errorMsg.errors.map(err => (
                        <strong key={err}><div>{err}</div></strong>
                    ))}
                    </Alert>
                </Snackbar>
                </div>
            ) : <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Your Book Has Been Added!
                    </Alert> 
                </Snackbar>}
        </div>
    </Box>
    </div>
  )
}

export default NewBook