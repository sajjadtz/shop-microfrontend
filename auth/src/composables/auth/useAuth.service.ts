import { AuthState } from "../../store/auth.store";
import { useFetchData } from "../api/axios";
import { User } from "./types/user.type";

export const useAuthService = (data: User) => {
  return useFetchData<AuthState>(
    `/v1/user/login`,
    { method: "post", data },
    false
  );
};
