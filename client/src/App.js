import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Testing from './components/Testing';


function App() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [quote, setQuote] = useState("")
  const [avatar, setAvatar] = useState("")

  function handleLogin(e) {
    e.preventDefault()
    const newUser = {username: user, password: password, email: email, quote: quote, avatar: avatar}
    fetch("/users", {
      method: "POST", 
      headers: {
        "Content-Type" : "application/json"
      }, 
      body: JSON.stringify(newUser)
    })
    .then(r => r.json())
    .then(data => console.log(data))
    setAvatar("")
    setEmail("")
    setPassword("")
    setQuote("")
    setUser("")
  }

  return (
    <div className="App">
      {/* <form onSubmit={handleLogin}>
      <input type="text" placeholder='username' onChange={e => setUser(e.target.value)}/>
      <input type="password"  placeholder='password' onChange={e => setPassword(e.target.value)}/>
      <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)}/>
      <input type="quote" placeholder='quote' onChange={e => setQuote(e.target.value)}/>
      <input type="avatar" placeholder='avatar' onChange={e => setAvatar(e.target.value)}/>
      <button>Signup</button>
     </form> */}
      <Routes>
        <Route path="/test" element={<Testing />}/>
      </Routes>
    </div>
  );
}

export default App;
