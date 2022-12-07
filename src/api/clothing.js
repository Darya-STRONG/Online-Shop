import axios from "axios";

const getClothing = async function () {
  return axios.get("https://fakestoreapi.com/products/category/women's clothing");
}


export {getClothing};