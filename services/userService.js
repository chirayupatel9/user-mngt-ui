import axios from 'axios';

const API_BASE_URL = '/api/users'; // Adjust the base URL as needed

const userService = {
  getAllUsers: async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  },

  registerUser: async (userData) => {
    const response = await axios.post(API_BASE_URL, userData);
    return response.data;
  },

  updateUserById: async (id, updatedData) => {
    const response = await axios.put(`${API_BASE_URL}/${id}`, updatedData);
    return response.data;
  },

  deleteUserById: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  },

  getUserById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  },

  getUserByEmail: async (email) => {
    const response = await axios.get(`${API_BASE_URL}?email=${email}`);
    return response.data;
  },

  loginUser: async (credentials) => {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  },
};

export default userService;
