import axios from "axios";

export const useProducts = () => {
  const getProducts = () => {
    return axios.get("http://localhost:3001/products");
  };

  return { getProducts };
};
