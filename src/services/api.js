import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.20.18.179:3333'
});

export default api;