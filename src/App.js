import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './App.scss';
import  NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import  Clothing from './components/Catalog/Clothing';

import { Layout } from './components/Layout';

function App() {
  return (
    <>
    
        <Routes>
          <Route path='/' element = {<Layout/>}>
            <Route index path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Clothing/>}/>
            <Route path = "*" element={<NotFound/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;
