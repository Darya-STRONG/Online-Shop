import React from "react";
import "./Navbar.scss";

import { Down } from "../../assets/img/icons";
import { Search } from "../../assets/img/icons";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <ul className="navbar__left navbar__list">
          <div className="navbar__item">
            <li className="navbar__link">New in </li>
            <Down />
          </div>
          <div className="navbar__item">
            <li className="navbar__link">Clothing</li>
            <Down />
          </div>
          <div className="navbar__item">
            <li className="navbar__link">Shoes</li>
            <Down />
          </div>
          <div className="navbar__item">
            <li className="navbar__link">Accessories</li>
            <Down />
          </div>
          <div className="navbar__item">
            <li className="navbar__link">Brands</li>
            <Down />
          </div>
          <div className="navbar__item">
            <li className="navbar__link">Sale</li>
            <Down />
          </div>
        </ul>
      </div>

      <div className="navbar__right">
        <Search />
        <p>Search for...</p>
      </div>
    </div>
  );
}

export default Navbar;
