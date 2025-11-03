import api from "../api/axios";

interface LoginResponse {
  token: string;
  username: string;
  role: string;
}

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/api/auth/login", { username, password });

  const { token, username: user, role } = response.data;
  localStorage.setItem("token", token);
  localStorage.setItem("username", user);
  localStorage.setItem("role", role);

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("role");
};
