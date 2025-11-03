import api from '../api/axios';

// LOGIN request
export const login = async (username, password) => {
  const response = await api.post('/api/auth/login', { username, password });

  // Extract data from backend response
  const { token, username: user, role } = response.data;

  // Store details locally for session
  localStorage.setItem('token', token);
  localStorage.setItem('username', user);
  localStorage.setItem('role', role);

  return response.data;
};

// REGISTER request
export const register = async (payload) => {
  const response = await api.post('/api/auth/register', payload);
  return response.data;
};

// LOGOUT function
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('role');
};
