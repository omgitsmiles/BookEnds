import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const testing = () => {
    // const [value, setValue] = useState(2)
  return (
    <div><Typography component="legend">Controlled</Typography>
    <Rating
      name="simple-controlled"
    //   value={value}
    //   onChange={(event, newValue) => {
    //     setValue(newValue);
    //   }}
    /></div>
  )
}

export default testing