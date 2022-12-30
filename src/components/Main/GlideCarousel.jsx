import React from "react";
import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import { Link } from "react-router-dom";
import { ArrowSvg } from "../../assets/img/icons";
import Card from "../Card";
import "./GlideCarousel.scss";
import Favorite from "../../pages/Favorite";
import { WitoutItemSvg } from "../../../src/assets/img/icons";
import { useDispatch, useSelector } from "react-redux";




import "./Main.styles.scss";
import {HeartFavorites} from '../../assets/img/icons';

import { ArrowLeft } from "../../assets/img/icons";
import { ArrowRight } from "../../assets/img/icons";

const Arrow = () => {
  const [hover, setHover] = useState(null);
  return (
    <>
      <ArrowSvg className="arrow" setHover={setHover} hover={hover} />
    </>
  );
};

const glideConfig = {
  perView: 4,
  type: "carousel",
  // autoplay:2000,
  // animationDuration: 600,
  // animationTimingFunc: "linear",
  // hoverpause: true,
};

const GlideCarousel = ({ head, prod = [], className = "glide" }) => {
  const slider = new Glide(`.${className}`, glideConfig);
  const { loading, error, clothing } = useSelector((store) => store.clothing);


  useEffect(() => {
    slider.mount();
  }, [slider]);

  return (
    <>
      <div className="slider container">
        <div className={className}>
          <div className="glide__arrows slider__head" data-glide-el="controls">
            <h2 className="slider__titel">{head}</h2>
            <button className="slider__arrow" data-glide-dir="<">
              <Arrow />
            </button>
            <button
              className="slider__arrow slider__arrow_left"
              data-glide-dir=">"
            >
              <Arrow />
            </button>
          </div>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {prod.map((item, index) => {
                return (
                  <li className="glide__slide" key={`slide_${index}`}>
                  {clothing && <Card value={item} key={index} />}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlideCarousel;


// const glideConfig = {
//   perView:4,
//   // startAt:0,
//   type:"carousel",
//   animationTimingFunc: "linear",
//   // hoverpause: true,
//   // autoplay: 1000,
// }

// const GlideCarousel = ({className = 'glide'}) => {
//   const slider = new Glide(`.${className}`, glideConfig);
//   const [products, setProduct] = useState([]);

//   useEffect(()=> {
//     fetch('https://fakestoreapi.com/products/category/women\'s clothing')
//             .then(res=>res.json())
//             .then(json=>setProduct(json))
//   },[])

//   useEffect(()=>{
//     slider.mount()
//   },[slider]);

//    return (
//     <div className="container">
//       <div className={className}>
//         <div className="glide__arrows" data-glide-el="controls">
//           <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><ArrowLeft/></button>
//           <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><ArrowRight/></button>
//         </div>

//       <div className="glide__track" data-glide-el="track">
//       <ul className="glide__slides">
//           {
//             products.map(({image,id})=> {
//               return (
//                 <li className="glide__slide" key={id}>
//                 <button className="heart-favorites">{<HeartFavorites/>}</button>
//                 <img src={image} alt="zara1" className="fix-img"/>
//                 <div className='card_four__content'>
//                   <h1 className='card_four__title'>ZARA</h1>
//                   <p>Patterned suite</p>
//                   <p>$75.90</p>
//                 </div>
//               </li>
//               )
//             })
//           }
//       </ul>
//       </div>
//       </div>
//     </div>
//    )
// }

// export default GlideCarousel;

