import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";

import "./Main.styles.scss";
import {HeartFavorites} from '../../assets/img/icons';

import desigual from "../../assets/img/slider-new-arrivals/desigual.jpg";
import monki from "../../assets/img/slider-new-arrivals/monki.jpg";
import zara from "../../assets/img/slider-new-arrivals/zara.jpg";
import zara1 from "../../assets/img/slider-new-arrivals/zara1.jpg";

import ReclaimedVintage from "../../assets/img/slider-our-picks-for-you/ReclaimedVintage.jpg";
import TedBaker from "../../assets/img/slider-our-picks-for-you/TedBaker.jpg";
import Monki from "../../assets/img/slider-our-picks-for-you/Monki.jpg";
import PeopleTree from "../../assets/img/slider-our-picks-for-you/PeopleTree.jpg";

import { ArrowLeft } from "../../assets/img/icons";
import { ArrowRight } from "../../assets/img/icons";

const glideConfig = {
  perView:4,
  // startAt:0,
  type:"carousel",
}

const GlideCarousel = ({className = 'glide'}) => {
  const slider = new Glide(`.${className}`, glideConfig);
  const [products, setProduct] = useState([]);
  
  useEffect(()=>{
    slider.mount()
  },[slider,]);

  useEffect(()=> {
    fetch('https://fakestoreapi.com/products/category/women\'s clothing')
            .then(res=>res.json())
            .then(json=>setProduct(json))
  },[])

   return (
    <div className="container">
      <div className={className}>
        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><ArrowLeft/></button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><ArrowRight/></button>
        </div>

      <div className="glide__track" data-glide-el="track">
      <ul className="glide__slides">
          {
            products.map(({image,id})=> {
              return (
                <li className="glide__slide" key={id}>
                <button className="heart-favorites">{<HeartFavorites/>}</button>
                <img src={image} alt="zara1" className="fix-img" />
                <div className='card_four__content'>
                  <h1 className='card_four__title'>ZARA</h1>
                  <p>Patterned suite</p>
                  <p>$75.90</p>
                </div>
              </li>
              )
            })
          }

{/*         
        <li className="glide__slide" style={{width: 255}}>
          <button className="heart-favorites">{<HeartFavorites/>}</button>
          <img src={zara1} alt="zara1" />
          <div className='card_four__content'>
            <h1 className='card_four__title'>ZARA</h1>
            <p>Patterned suite</p>
            <p>$75.90</p>
          </div>
        </li>

        <li className="glide__slide">
          <button className="heart-favorites">{<HeartFavorites/>}</button>
          <img className="d-block w-255px" src={TedBaker} alt="TedBaker" />
          <div className='card_four__content'>
            <h1 className='card_four__title'>Ted Baker</h1>
            <p>Cropped suit in pink</p>
            <p>$36.90</p>
          </div>
        </li>

        <li className="glide__slide">
          <button className="heart-favorites">{<HeartFavorites/>}</button>
          <img className="d-block w-255px" src={Monki} alt="Monki" />
          <div className='card_four__content'>
            <h1 className='card_four__title'>Monki</h1>
            <p>Fine knit mini dress</p>
            <p>$42.00</p>
          </div>
        </li>

        <li className="glide__slide">
          <button className="heart-favorites">{<HeartFavorites/>}</button>
          <img className="d-block w-255px" src={PeopleTree} alt="PeopleTree" />
          <div className='card_four__content'>
            <h1 className='card_four__title'>People tree</h1>
            <p>Printed mini shirt dress</p>
            <div className="price">
              <p className="promotional-price">$35.90</p>
              <p>$51.90</p>
            </div>
          </div>
        </li> */}
      </ul>
      </div>
      </div>
    </div>
   )
}

export default GlideCarousel;