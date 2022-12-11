import React from "react";
import "./Main.styles.scss";
import GlideCarousel from "./GlideCarousel";
// import MainCarouselCopy from "./MainCarouselCopy";

import { ArrowLeft } from "../../assets/img/icons";
import { ArrowRight } from "../../assets/img/icons";

import Dresses from "../../assets/img/clothing-сategory/dresses.jpg";
import Skirts from "../../assets/img/clothing-сategory/skirts.jpg";
import Tops from "../../assets/img/clothing-сategory/tops.jpg";
import Bags from "../../assets/img/clothing-сategory/bags.jpg";
import Swimwear from "../../assets/img/clothing-сategory/swimwear.jpg";
import Shoes from "../../assets/img/clothing-сategory/shoes.jpg";

import BannerLeft from "../../assets/img/main-banners/center-banners/banner-right.jpg";
import BannerRight from "../../assets/img/main-banners/center-banners/banner-left.jpg";
import BannerBottom from "../../assets/img/main-banners/bottom-banners.jpg";

import SectionAbout from "../../assets/img/section-about.jpg";

import MainBrands from "./MainBrands";

function Main() {
  return (
    <div>
      <div className=" container-main">
        <div className=" container main__cards">
          <div className="main__card">
            <img src={Dresses} alt="dresses" />
            <h1 className="card__text">Dresses</h1>
          </div>

          <div className="main__card">
            <img src={Skirts} alt="skirts" />
            <h1 className="card__text">Skirts</h1>
          </div>

          <div className="main__card">
            <img src={Tops} alt="tops" />
            <h1 className="card__text">Tops</h1>
          </div>

          <div className="main__card">
            <img src={Bags} alt="bags" />
            <h1 className="card__text">Bags</h1>
          </div>

          <div className="main__card">
            <img src={Swimwear} alt="swimwear" />
            <h1 className="card__text">Swimwear</h1>
          </div>

          <div className="main__card">
            <img src={Shoes} alt="shoes" />
            <h1 className="card__text">Shoes</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="glide__title">New arrivals</h1>
        <GlideCarousel/>
      </div>

      <div className="container banner__center">
        <img src={BannerLeft} alt="banner-lefts" className="banners__item" />
        <img src={BannerRight} alt="banner-right" className="banners__item" />
      </div>

      <div className="container">
          <h1 className="glide__title">Our picks for you</h1>
          <GlideCarousel className="glide2"></GlideCarousel>
      </div>

      <section className="s-about container">
        <div className="about">
          <div className="about__information">
            <h1 className="about__title">
              Eco Aware brands: Exclusively at Dresnote
            </h1>
            <p className="about__text">
              Science Story is a collaboration between Dressnote and creative
              thinkers, researchers and brands who are developing cutting-edge
              materials designed to address the environmental impacts of the
              textile industry.
            </p>
            <button className="about__button-shop">Shop Eco collection</button>
          </div>
          <img src={SectionAbout} alt="About" className="about-img" />
        </div>
      </section>

      <div className="banners">
        <img
          src={BannerBottom}
          alt="banner-bottom"
          className="banner__bottom"
        />
      </div>

      <section className="s-brands container">
        <MainBrands />
      </section>
    </div>
  );
}

export { Main };
