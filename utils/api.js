// api.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com', // Replace with your API base URL
  timeout: 1000,
});

export const fetchData = async (url) => {
  const response = await axiosInstance.get(url);
  return response.data;
};
