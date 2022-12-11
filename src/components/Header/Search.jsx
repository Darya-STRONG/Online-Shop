import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { SearchIcons } from "../../assets/img/icons";
import "./Navbar.scss";


const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const { cloth } = useSelector((store) => store.clothing);

  const searchDis = (e) => {
    const filterData = cloth.filter((item) => {
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
          {searchResult.map(({title}) => {
            return <p>{title}</p>;
          })}
        </div>)}
    </div>
  )
}

export default Search;
