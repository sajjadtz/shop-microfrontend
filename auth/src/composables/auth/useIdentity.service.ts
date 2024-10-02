import { useFetchData } from "../api/axios";
import { User } from "./types/user.type";

export const useIdentityService = () => {
  return useFetchData<User>(`/v1/user`, {}, true);
};
