import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useAuthStore } from "auth/AuthStore";

const axiosClient = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const authStore = useAuthStore();

    if (error.response?.status === 401) {
      return authStore.logout();
    }

    return Promise.reject(error);
  }
);

export const useFetchData = <R>(
  url = "",
  config: AxiosRequestConfig = {},
  setToken: boolean = false
) => {
  const authStore = useAuthStore();
  const token = authStore.getToken;

  if (!config.headers) config.headers = {};

  config.url = url;

  if (setToken) config.headers!["Authorization"] = `Bearer ${token}`;

  const fetchData = (): Promise<R> =>
    axiosClient<R>(config).then((res) => {
      return res?.data;
    });

  return fetchData;
};
