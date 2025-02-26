import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // backend API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

// axios import ettik, baseurl olarak localhost'da 8000 portunu verdik
