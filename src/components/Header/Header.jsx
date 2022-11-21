import React from "react";
import "./Header.styles.scss";
import Navbar from "./Navbar";

import { Heart } from "../../assets/img/icons";
import { ShoppingBag } from "../../assets/img/icons";
import { User } from "../../assets/img/icons";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__top">
            <div className="header__nav">
              <div className="header__nav">
                <h1 className="logo">
                  <span className=" logo logo-bold">dress</span>note
                </h1>
              </div>
              <ul className="header__nav header-nav">
                <li className="header-nav__item">
                  <a href="" className="header-nav__link">
                    {<Heart />}
                  </a>
                </li>

                <li className="header-nav__item">
                  <a href="" className="header-nav__link">
                    {<ShoppingBag />}
                  </a>
                </li>

                <li className="header-nav__item">
                  <a href="" className="header-nav__link">
                    {<User />}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="header__navbar">
          <Navbar />
        </div>
      </div>

      <div className="header__bottom">
        <div className="header__bottom container-stock">
          <p className="container-stock__text">
            Up to 50% off all dresses when use code DRESSLOVER
          </p>
          <a className="container-stock__button" href="/">
            Shop dresses
          </a>
        </div>
      </div>
    </div>
  );
};

export { Header };
