import './Product.scss';
import { useParams } from  "react-router-dom";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {HeartFavorites} from '../../assets/img/icons';
import Loader from "../Loader";
import StarRating from "../../components/StarRating/StarRange";
import GlideCarousel from '../Main/GlideCarousel';
import { cardAdd } from '../../store/actions/cartActions';
import { useDispatch } from 'react-redux';
import { SizeBar } from "./SizeBar";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState({});
  const { id } = useParams();
  const [size, setSize] = useState(null);


  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
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
        <img src={image} alt="productImg" />
      </div>
      <div className="product__part-right">
        <p className='product__text'>{category}</p>
        <h3 className='product__title'>{title}</h3>
        <div className='rating'>
          <StarRating totalStars={5} rate={Math.round(rating?.rate)} count={rating?.count}/>
        </div>
        
        <div className='product__price'>
          <p className='product__price-discount'>{price}</p>
          <p className='product__price-basic'>$62.90</p>
        </div>
        <div className="choices">
          <p className="product__choices__text">Select color:<span className='product__choices__text-patterned'>White/red patterned</span></p>
          <div className="product__choices">
            <div className='product__choice product__choice-red'></div>
            <div className='product__choice product__choice-white'></div>
          <div/>
        </div>
        <div className='product__description'>
            <h1>Product details</h1>
            <p className='product__description-text'>{description}</p>
        </div>
        <div className="product__size">
          <p>Select size:</p>
          <p className='product__size-line'>Size guide</p>
        </div>
        <SizeBar setSize = {setSize} size = {size}/>
        <div className='product__add'>
          <button className="product__add-cart" onClick = {()=> {
            dispatch(cardAdd({ ...productData, size : size, costDelivery:10, count:1, itemId: new Date().getTime(),}));
            

          }}>Add to cart</button>
          <button className="product__add__heart-favorites heart-favorites">{<HeartFavorites/>}</button>
        </div>
        </div>
        <div>
        </div>
      </div>
    <div>
      </div>
    </div>
    <GlideCarousel className="glide3"></GlideCarousel>
  </div>
  )

};

export default Product;