import axios from "axios";
import {  useEffect } from "react";
const axiosScuery = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxios = () => {

  useEffect(() => {
    axiosScuery.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
            console.log('kdgjlkdf')
           

        }
      }
    );
  }, []);
  return axiosScuery;
};

export default useAxios;
