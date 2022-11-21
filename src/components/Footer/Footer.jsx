import React from 'react';
import './Footer.scss';

import {Instagram} from '../../assets/img/icons';
import {Facebook} from '../../assets/img/icons';
import {Twitter} from '../../assets/img/icons';
import {Pinterest} from '../../assets/img/icons';
import {Youtube} from '../../assets/img/icons';

function Footer() {
  return (
  <div>
  <section className='information'>
    <div className='footer container'>
      <div className='footer__support'>
          <h1 className='footer__support__title'>Customer support</h1>
          <li className='footer__support__nav'>Size guides</li>
          <li className='footer__support__nav'>Shipping</li>
          <li className='footer__support__nav'>Returns</li>
          <li className='footer__support__nav'>Track my order</li>
      </div>

      <div className='footer__account'>
          <h1 className='footer__account__title'>My account</h1>
          <li className='footer__account__nav'>Order history</li>
          <li className='footer__account__nav'>Payment methods</li>
          <li className='footer__account__nav'>Account settings</li>
          <li className='footer__account__nav'>Favorites</li>
      </div>

      <div className='footer__singup'>
        <p className='footer__singup__text'>Sign up today for email exclusives including early access to Sale, the latest trends
           and arrivals from your favorite designers and can’t miss promotions.</p>
           <div className='footer__singup__input'>
              <input type="footer__input-text" placeholder='Enter your Email' className='footer__input-email'/>
              <button className='footer__singup__button'>Subscribe</button>
           </div>
           <div className='footer__messengers'>
                
                <ul className='footer__messengers__item'>
                <li className='instagram'>
                  <a href="" className="footer__messengers__link">
                    {<Instagram/>}
                  </a>
                </li>

                <li className='Facebook'>
                  <a href="" className="footer__messengers__link">
                    {<Facebook/>}
                  </a>
                </li>

                <li className='Twitter'>
                  <a href="" className="footer__messengers__link">
                    {<Twitter/>}
                  </a>
                </li>

                <li className='Pinterest'>
                  <a href="" className="footer__messengers__link">
                    {<Pinterest/>}
                  </a>
                </li>

                <li className='Youtube'>
                  <a href="" className="footer__messengers__link">
                    {<Youtube/>}
                  </a>
                </li>
              </ul>

            </div>
      </div>
    </div>
  </section>

  <div className='copywriter container'>
      <h1 className="copywriter__logo">
        <span className="copywriter__logo-bold">dress</span>note
      </h1>
      <p className='сopywriter__item'>(С) 2021 All rights reserved</p>
  </div>
  </div>

  );
}

export {Footer};