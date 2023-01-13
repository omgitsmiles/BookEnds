import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import Collapse from '@mui/material/Collapse';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const UserAccount = ({ user, setUser }) => {
    const [open, setOpen] = useState(false)
    const [newQuote, setNewQuote] = useState("")
    const [image, setImage] = useState("")
    const [error, setError] = useState([])
    const [expanded, setExpanded] = useState(false);
    const { username, email, quote, avatar, books } = user
    const navigate = useNavigate()

  const handleExpandClick = () => {
    setExpanded(expanded => !expanded);
  };

  const handleUpdate = () => {
    const updateUser = {quote: newQuote, avatar: image}
    fetch("/update", {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(updateUser)
    })
    .then(r => {
        if (r.ok) {
            r.json()
            .then(user => setUser(user))
            alert("Updated!")
        } else {
            r.json()
            .then(err => setError(err))
            setOpen(true)
        }
    })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleDelete = () => {
    fetch("/logout", {
        method: "DELETE"
    })
    .then(r => {
        if (r.ok) {
        setUser({username: "", books: [], reviews: []})
        } 
    })
    navigate("/login")
  }

  return (
    <div className="userAccount">
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={username}
        subheader={email}
      />
      <CardMedia
        sx={{ fitObject: "scale-down" }}
        component="img"
        height="194"
        image={avatar}
        alt={username}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" fontStyle="italic">
         "{quote}"
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
         Books reviewed: {books.length}
        </Typography>
        <Button variant="body2" color="text.secondary" onClick={handleDelete}>
            Logout
        </Button>
      </CardContent>
      <EditIcon
          expand="false"
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <EditIcon />
        </EditIcon>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Edit:</Typography>
          <div>
          <TextField
          id="filled-helperText"
          label="Quote"
          helperText="To quote or not to quote"
          variant="filled"
          onChange={e => setNewQuote(e.target.value)}
          />
          </div>
          <div>
          <TextField
          id="filled-helperText"
          label="Avatar"
          helperText="Update your avatar here"
          variant="filled"
          onChange={e => setImage(e.target.value)}
          />
          </div>
         <div>
         <Button variant="contained" sx={{ bgcolor: "#6C3429" }} onClick={handleUpdate}>Submit</Button>
         </div>
         <div>
         {error.errors ? (
                <div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        ERROR!
                    {error.errors.map(err => (
                        <strong key={err}><div>{err}</div></strong>
                    ))}
                    </Alert>
                </Snackbar>
                </div>
            ) : null}
         </div>
        </CardContent>
      </Collapse>
      </Card>
    </div>
  )
}

export default UserAccount