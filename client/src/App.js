import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin(e) {
    e.preventDefault()
    const newUser = {username: user, password: password}
    fetch("/users", {
      method: "POST", 
      headers: {
        "Content-Type" : "application/json"
      }, 
      body: JSON.stringify(newUser)
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }

  return (
    <div className="App">
      <form onSubmit={handleLogin}>
      <input type="text" onChange={e => setUser(e.target.value)}/>
      <input type="password" onChange={e => setPassword(e.target.value)}/>
      <button>login</button>
     </form>
    </div>
  );
}

export default App;
