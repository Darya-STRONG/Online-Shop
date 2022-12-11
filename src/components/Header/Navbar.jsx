import React from "react";
import "./Navbar.scss";
import Search from "./Search";
import { useSelector } from "react-redux";

import { Down } from "../../assets/img/icons";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <ul className="navbar__left navbar__list">
          <div className="navbar__item">
          <NavLink className="navbar__link" to="/New-in">New in</NavLink>
            <Down />
          </div>
          <div className="navbar__item">
            <NavLink className="navbar__link" to="/catalog">Clothing</NavLink>
            <Down />
          </div>
          <div className="navbar__item">
            <NavLink className="navbar__link" to="/Shoes">Shoes</NavLink>
            <Down />
          </div>
          <div className="navbar__item">
            <NavLink className="navbar__link" to="/Accessories">Accessories</NavLink>
            <Down />
          </div>
          <div className="navbar__item">
            <NavLink className="navbar__link" to="/Brands">Brands</NavLink>
            <Down />
          </div>
          <div className="navbar__item">
          <NavLink className="navbar__link" to="/Sale">Sale</NavLink>
            <Down />
          </div>
        </ul>
      </div>
        <Search/>
    </div>
  );
}

export default Navbar;
