import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  credentials: "include",
};

axios.defaults.withCredentials = true;

export const authFetch = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
  config,
});

const logout = async () => {
  await authFetch.get("/auth/logout");
};

authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      logout();
    }
    return Promise.reject(error);
  }
);
