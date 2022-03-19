import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import GameConfiguration from './ui/pages/GameConfiguration'
import Home from "./ui/pages/home";

function App() {
  return (
      <div className="app h-full">
        <Routes>
         <Route path={"/"} element={<Home/>}/>
         <Route path={"/game-configuration"} element={<GameConfiguration/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
