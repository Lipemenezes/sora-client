import axios from 'axios';
import authHeader from './services/authHeader';

export default axios.create({
  baseURL: 'http://localhost:8000/',
  headers: authHeader(),
});
