import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/user/new" element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
