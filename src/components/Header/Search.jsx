import React,{ useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { SearchIcons } from "../../assets/img/icons";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import { clothingLoading, clothingLoadingSuccess,clothingLoadingFailed } from "../../store/actions/clothingActions";
import axios from "axios";
import { getClothing } from "../../api/clothing";


const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const { clothing } = useSelector((store) => store.clothing);
  const dispatch = useDispatch();

  
  useEffect(()=> {
    if(clothing.length == 0) {
      dispatch(clothingLoading(true));
      getClothing()
      .then(({data}) => {
        dispatch(clothingLoadingSuccess(data))
      })
      .catch((error)=> {
        dispatch(clothingLoadingFailed(error.message));
      })
    }

  },[]);

  const closeSearch = () => {
    setSearchInput("");
    setSearchResult([]);
  }

  const searchDis = (e) => {
    setSearchInput(e.target.value)
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
        type="text" placeholder="Search for..." onChange={searchDis} value={searchInput}/>
        {!!searchResult.length && (
          <div className="search__result">
          {searchResult.map(({title,id},index) => {
            return !! id ?(
              <Link to={`product/${id}`} onClick={closeSearch} key={`srch_${index}`}>
                <p>{title}</p>
              </Link>):(<p key={`srch_${index}`}>{title}</p>)
            
          })}
        </div>)}
    </div>
  )
}

export default Search;



