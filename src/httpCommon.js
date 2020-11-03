import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_HOST || 'http://localhost:8000/',
});
