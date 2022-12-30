import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './App.scss';
import  NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import  Clothing from './components/Catalog/Clothing';
import NewIn from './pages/NewIn';
import Search from './components/Header/Search';
import Product from './components/Product/Product';
import Favorite from './pages/Favorite';
import { Layout } from './components/Layout';
import ShopCard from './pages/ShopCard';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element = {<Layout/>}>
            <Route index path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Clothing/>}/>
            <Route path="/newIn" element={<NewIn />}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/favorite" element={<Favorite />} />
            <Route path = "*" element={<NotFound/>}/>
            <Route path="/bag" element={<ShopCard />} />

          </Route>
        </Routes>
    </>
  );
}

export default App;
