import React from 'react';
import "./Main.styles.scss";

import NewBalance from '../../assets/img/main-brands/new-balance-2.jpg';
import DrMartens from '../../assets/img/main-brands/dr-martens.jpg';
import Converse from '../../assets/img/main-brands/converse.jpg';
import SteveMartens from '../../assets/img/main-brands/steve-martens.jpg';
import Ugg from '../../assets/img/main-brands/ugg.jpg';


function MainBrands() {
  return (
    <div className='brands'>
      <div className='brand'>
        <img src={NewBalance} alt="NewBalance" />
      </div>

      <div className='brand'>
        <img src={DrMartens} alt="DrMartens" />
      </div>

      <div className='brand'>
        <img src={Converse} alt="Converse" />
      </div>

      <div className='brand'>
        <img src={SteveMartens} alt="SteveMartens" />
      </div>

      <div className='brand'>
        <img src={Ugg} alt="Ugg" />
      </div>

      <div className='brand'>
        <a  className='brand_button' href="/">All brands</a>
        
      </div>

    </div>
  );
}

export default MainBrands;