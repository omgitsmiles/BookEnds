import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import UserHome from './components/UserHome';


function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/user/new" element={<Signup />}/>
        <Route path="/user/home" element={<UserHome />} />
      </Routes>
    </div>
  );
}

export default App;
