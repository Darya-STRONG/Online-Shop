import './Product.scss';
import { useParams } from  "react-router-dom";
import React, {useEffect, useState} from 'react';
import axios from "axios";

import productImg from "../../assets/img/productImg/product.png";
import {HeartFavorites} from '../../assets/img/icons';
import Loader from "../Loader";
import StarRating from "../../components/StarRating/StarRange";


const Product = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({data}) => {
      setProductData(data);
      setLoading(false);
    });
  }, [id]);

  const { title, price, description, category, image, rating } = productData;
  return  loading ? (<Loader/>) : (
    <div className=' product product__wrap container'><div>
      <ul className="breadcrumbs">
        <li><a className="breadcrumb" href="#">Home/</a></li>
        <li><a className="breadcrumb" href="#">Clothing/</a></li>
        <li><a className="breadcrumb" href="#">Dresses/</a></li> 
        <li><a className="breadcrumb" href="#">Missguided/</a></li>
        <li><a className="breadcrumb" href="#">Printed poplin dress with puff sleeves/</a></li>
      </ul>
    </div>
    <div className="product__card">
      <div className="product__part-left">
        <img src={productImg} alt="productImg" />
      </div>
      <div className="product__part-right">
        <p className='product__text'>Misguided</p>
        <h3 className='product__title'>{title}</h3>
        <div className='rating'>
          <StarRating totalStars={5}/>
          <p className='text'></p>
        </div>
        
        <div className='product__price'>
          <p className='product__price-discount'>$44.90</p>
          <p className='product__price-basic'>$62.90</p>
        </div>
        <div className="choices">
          <p className="product__choices__text">Select color:<span className='product__choices__text-patterned'>White/red patterned</span></p>
          <div className="product__choices">
            <div className='product__choice product__choice-red'></div>
            <div className='product__choice product__choice-white'></div>
          <div/>
        </div>

        <div className="product__size">
          <p>Select size:</p>
          <p className='product__size-line'>Size guide</p>
        </div>
        <input className='product__size-inp' type="text" placeholder='Size'/>
        <div className='product__add'>
          <button className='product__add-cart'>Add to cart</button>
          <button className="product__add__heart-favorites heart-favorites">{<HeartFavorites/>}</button>
        </div>
        </div>
      </div>
    <div>
      </div>
    </div>
  </div>
  )

};

export default Product;