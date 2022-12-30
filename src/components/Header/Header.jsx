import React from "react";
import "./Header.styles.scss";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Header.styles.scss";

import { Heart } from "../../assets/img/icons";
import { ShoppingBag } from "../../assets/img/icons";
import { User } from "../../assets/img/icons";
import { LogoSvg } from "../../assets/img/icons";

const Header = () => {
  return (
    <div>

<header className="header header__position">
        <div className="header__top container">
          <div className="header__logo">
            <Link to="/">
              <LogoSvg />
            </Link>
          </div>
          <div className="pagination">
            <Link to="/favorite">
              <Heart className="pagination__icon" />
            </Link>
            <User className="pagination__icon" />
            <Link to="/bag">
              <ShoppingBag className="pagination__icon pagination__icon_pos" />
            </Link>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="header__navbar">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export { Header };
