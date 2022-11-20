import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    const [quote, setQuote] = useState("")
    const [avatar, setAvatar] = useState("")
    const [password, setPassword] = useState("")
    const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleUpdate = () => {
    const updateUser = {quote: quote, avatar: avatar, password: password}
    fetch("/update", {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(updateUser)
    })
    .then(r => r.json())
    .then(updatedUser => setUser(updatedUser))
    alert("Updated!")
  }

  return (
    <div className="userAccount">
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {user.username.slice(0, 6)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={user.username}
        subheader={user.email}
      />
      <CardMedia
        component="img"
        height="194"
        image={user.avatar}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {user.quote}
        </Typography>
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
          <TextField
          id="filled-helperText"
          label="Password"
          type="password"
          helperText="Enter password to update"
          variant="filled"
          onChange={e => setPassword(e.target.value)}
          />
          </div>
         <div>
         <Button variant="contained" sx={{ bgcolor: "#6C3429" }} onClick={handleUpdate}>Submit</Button>
         </div>
        </CardContent>
      </Collapse>
      </Card>
    </div>
  )
}

export default UserAccount