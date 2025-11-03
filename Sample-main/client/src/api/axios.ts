import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // Spring Boot backend
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken"); // fixed
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
