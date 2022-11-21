import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./Main.styles.scss";

import desigual from "../../assets/img/slider-new-arrivals/desigual.jpg";
import monki from "../../assets/img/slider-new-arrivals/monki.jpg";
import zara from "../../assets/img/slider-new-arrivals/zara.jpg";
import zara1 from "../../assets/img/slider-new-arrivals/zara1.jpg";

export default class MainCarousel extends Component {
  render() {
    return (
      <Carousel className="container">
        <Carousel.Item>
            <img src={zara1} alt="zara1" />
            <Carousel.Caption>
            <div className='card_four__content'>
              <h1 className='card_four__title'>ZARA</h1>
              <p>Patterned suite</p>
              <p>$75.90</p>
            </div>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-255px" src={desigual} alt="desigual" />
          <Carousel.Caption>
          <div className='card_four__content'>
            <h1 className='card_four__title'>Desigual</h1>
            <p>Ethnic dress with embroidery</p>
            <p>$139.90</p>
          </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-255px" src={zara} alt="zara" />
          <Carousel.Caption>
          <div className='card_four__content'>
            <h1 className='card_four__title'>Zara</h1>
            <p>Patchwork mini skirt</p>
            <p>$55.90</p>
          </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-255px" src={monki} alt="monki" />
          <Carousel.Caption>
          <div className='card_four__content'>
            <h1 className='card_four__title'>Monki</h1>
            <p>Ultramarine culottes</p>
            <p>$62.90</p>
          </div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    );
  }
}
