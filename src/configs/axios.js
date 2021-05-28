import axios from "axios";
import { baseUrl } from "./urls";

const axiosInstance = axios.create({
  baseURL: baseUrl
});

export default axiosInstance;