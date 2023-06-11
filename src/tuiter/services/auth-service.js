import axios from "axios";
const SERVER_API_URL = "http://localhost:4000/api";
const USERS_URL = "http://localhost:4000/api/users";



const api = axios.create({ withCredentials: true });


export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
  };
  
  export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data;
  };
  
  export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
  };
  
  export const register = async ({ username, password}) => {
    const userData = { username, password};
  
    try {
      const response = await api.post(`${USERS_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw new Error('Registration failed. Please try again.');
    }
  };
  
  
  export const login = async ({ username, password }) => {
    const userData = { username, password };
  
    try {
      const response = await api.post(`${USERS_URL}/login`, userData);
      return response.data;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials and try again.');
    }
  };
  
  