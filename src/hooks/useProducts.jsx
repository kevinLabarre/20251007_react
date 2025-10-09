import axios from "axios";

export const useProducts = () => {
  const url = "http://localhost:3001/products";
  const getProducts = () => {
    return axios.get(url);
  };

  const addProduct = (newProduct) => {
    return axios.post(url, newProduct);
  };

  return { getProducts, addProduct };
};
