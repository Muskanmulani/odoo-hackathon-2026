import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Register User
export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/register`,
    userData
  );

  return response.data;
};

// Login User
export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/login`,
    userData
  );

  return response.data;
};

// Logout User
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Save Token
export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

// Get Token
export const getToken = () => {
  return localStorage.getItem("token");
};

// Save User
export const saveUser = (user) => {
  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
};

// Get User
export const getUser = () => {
  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : null;
};

// Check Login Status
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};