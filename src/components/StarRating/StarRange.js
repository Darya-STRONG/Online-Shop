import React, { useState } from 'react';
import Star from './Star';
import "../StarRating/Star.scss";
import Product from '../Product/Product';


function StarRating ({totalStars ,count,rate}) {
  const [starsSelected, setstarsSelected] = useState(0);

  return (

    <div className="star-rating">    

                {[...Array(totalStars)].map((n, i) => 
                <Star 
                key={i.toString()}
                selected={i<rate}
                onClick={() => setstarsSelected(i+1)}
                // onMouseEnter={() => setstarsSelected(i+1)}
                // onMouseLeave={() => setstarsSelected(0)}
                />
                )}
                <p className='text'>{rate} ({count} reviews)</p>

                
    </div>
  )
}
export default StarRating;
