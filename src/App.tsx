import React from 'react';
import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Home from './modules/Home';
import Characters from './modules/Characters';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
    </Routes>
  )
}

export default App;