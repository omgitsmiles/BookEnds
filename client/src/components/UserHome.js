import React from 'react'

const UserHome = ({ user }) => {
    
    console.log(user.username)

  return (
    <div>Hi {user.username}</div>
  )
}

export default UserHome