import axios from "axios";

const getCarousel = async function () {
  return axios.get("https://fakestoreapi.com/products/category/women's clothing");
}

export {getCarousel};