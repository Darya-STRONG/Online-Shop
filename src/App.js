import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './App.scss';
import  NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path = "*" element={<NotFound/>}/>
        </Routes>
    </>
  );
}

export default App;
