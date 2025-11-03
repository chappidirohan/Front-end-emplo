// src/api/axios.js
import axios from 'axios';

// Create a base Axios instance
const api = axios.create({
  baseURL: 'http://localhost:8080', // Your Spring Boot backend
});

// Automatically attach JWT token (if exists)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
