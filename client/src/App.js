import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Book from './components/Book';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import NewBook from './components/NewBook';
import UserHome from './components/UserHome';


function App() {
  const [books, setBooks] = useState([])
  const [user, setUser] = useState({username: "", books: [], reviews: []})

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  

  useEffect(() => {
    fetch("/books")
    .then(r => r.json())
    .then(books => setBooks(books))
  }, [])


  const onSubmitAddBook = (newBook) => {
    setBooks([...books, newBook])
  }

  const onSubmitNewUser = (newUser) => {
    setUser([...user, newUser])
  }

  const onSubmitNewUserBook = () => {
    setUser([])
  }

  return (
    <div className="App">
      <NavBar user={user}/>
      <Routes>
        <Route path="/home" element={<Home books={books}/>}/>
        <Route path="/login" element={<Login setUser={setUser} user={user}/>}/>
        <Route path="/user/new" element={<Signup onSubmitNewUser={onSubmitNewUser}/>}/>
        <Route path="/user/home" element={<UserHome user={user} setUser={setUser}/>} />
        <Route path="/books/new" element={<NewBook onSubmitAddBook={onSubmitAddBook}/>} />
        <Route path="/books/:id" element={<Book user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
