import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import NewBook from './components/NewBook';
import UserHome from './components/UserHome';


function App() {
  const [books, setBooks] = useState([])
  const [user, setUser] = useState(null)
  const [loggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/books")
    .then(r => r.json())
    .then(books => setBooks(books))
  }, [])

  console.log(user)

  return (
    <div className="App">
      <NavBar user={user}/>
      <Routes>
        <Route path="/home" element={<Home books={books}/>}/>
        <Route path="/login" element={<Login setUser={setUser} user={user} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/user/new" element={<Signup setUser={setUser}/>}/>
        <Route path="/user/home" element={<UserHome user={user} setUser={setUser} loggedIn={loggedIn}/>} />
        <Route path="/books/new" element={<NewBook />} />
      </Routes>
    </div>
  );
}

export default App;
