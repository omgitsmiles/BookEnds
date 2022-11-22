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

// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }));


const UserAccount = ({ user, setUser }) => {
    const [open, setOpen] = useState(false)
    const [quote, setQuote] = useState("")
    const [avatar, setAvatar] = useState("")
    const [error, setError] = useState([])
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate()

  const handleExpandClick = () => {
    setExpanded(expanded => !expanded);
  };

  const handleUpdate = () => {
    const updateUser = {quote: quote, avatar: avatar}
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
        // avatar={
        //   <Avatar aria-label="recipe">
        //     {user.username}
        //   </Avatar>
        // }
        title={user.username}
        subheader={user.email}
      />
      <CardMedia
        sx={{ fitObject: "contain" }}
        component="img"
        height="194"
        image={user.avatar}
        alt={user.username}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {user.quote}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Books reviews: {user.books.length}
        </Typography>
        <Button variant="body2" color="text.secondary" onClick={handleDelete}>
            LOGOUT
        </Button>
      </CardContent>
      <EditIcon
          expand={expanded}
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
          onChange={e => setQuote(e.target.value)}
          />
          </div>
          <div>
          <TextField
          id="filled-helperText"
          label="Avatar"
          helperText="Update your avatar here"
          variant="filled"
          onChange={e => setAvatar(e.target.value)}
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