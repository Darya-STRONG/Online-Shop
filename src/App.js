import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './App.scss';
import  NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import  Clothing from './components/Catalog/Clothing';

function App() {
  return (
    <>
    
        <Routes>
          <Route>
            <Route index path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Clothing/>}/>
            <Route path = "*" element={<NotFound/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;
