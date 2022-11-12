import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import UserHome from './components/UserHome';


function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login setUser={setUser} user={user}/>}/>
        <Route path="/user/new" element={<Signup setUser={setUser}/>}/>
        <Route path="/user/home" element={<UserHome user={user}/>} />
      </Routes>
    </div>
  );
}

export default App;
