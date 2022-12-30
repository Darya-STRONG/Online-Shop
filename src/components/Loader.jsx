import React from "react";
import '../components/Catalog/Clothing.scss';
import spinner from "../assets/img/spinner.svg";
import "../components/Main/Main.styles.scss";

const Loader = () => {
  return (
      <div className = "loader">
        {<img src={spinner} alt="spinner"/>}
      </div>
  );
};
export default Loader;