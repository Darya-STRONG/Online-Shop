import React from 'react';
import {StarRatingImg} from '../../assets/img/icons';

 const Star = ({ selected=true, onMouseEnter,onMouseLeave,onClick,}) =>
    <div className={ (selected) ? "star selected" : "star" } 
        onClick={onClick}
        // onMouseLeave={onMouseLeave}
        // onMouseEnter={onMouseEnter}
    >
        <StarRatingImg/>
    </div>

export default Star;
