import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api",
  baseURL:"https://real-time-chat-application-a7bs.onrender.com/api",
  withCredentials: true,
});
