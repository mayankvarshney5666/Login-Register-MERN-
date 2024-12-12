// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Admin from './Admin';
import Register from './Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/admin" Component={Admin} />
        <Route path="/" Component={Admin} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;