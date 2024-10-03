import { useAuthStore } from "../../store/auth.store";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// create an axios client with base url
const axiosClient = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// intercept the axios response
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const authStore = useAuthStore();

    // if error code is 401(UnAuthorized) logout the user(clear the global store)
    if (error.response?.status === 401) {
      return authStore.logout();
    }

    return Promise.reject(error);
  }
);

// wrapper for axios client to handle auth token and maybe implement refreshToken scenario in the future
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
      return res.data;
    });

  return fetchData;
};
