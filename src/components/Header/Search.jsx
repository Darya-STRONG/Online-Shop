import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { SearchIcons } from "../../assets/img/icons";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import { clothingLoading, clothingLoadingSuccess,clothingLoadingFailed } from "../../store/actions/clothingActions";
import axios from "axios";
import { getClothing } from "../../api/clothing";
const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const { clothing } = useSelector((store) => store.clothing);

  const searchDis = (e) => {
    const filterData = clothing.filter((item) => {
      if (e.target.value == "") {
        return null;
      } else if (
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    if (filterData.length == 0 && e.target.value.length !== 0) {
      setSearchResult([
        {
          title: "No data",
        },
      ]);
    } else {
      setSearchResult(filterData);
    }
  };

  return (
    <div className="search">
      <label htmlFor="search__icon">{<SearchIcons/>}</label>
      <input 
        className="search__inp"
        type="text" placeholder="Search for..." onChange={searchDis}/>
        {!!searchResult.length && (
          <div className="search__result">
          {searchResult.map(({title,id},index) => {
            return(
              <Link to={`product/${id}`}>
                <p key={`srch_${index}`}>{title}</p>;
              </Link>
            )
          })}
        </div>)}
    </div>
  )
}

export default Search;



