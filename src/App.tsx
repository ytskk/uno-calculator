import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./ui/pages/home";

function App() {
  return (
      <div className="app">
        <Routes>
         <Route path={"/"} element={<Home/>}/>
        </Routes>
      </div>
  );
}

export default App;
