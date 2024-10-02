import { AuthState } from "../../store/auth.store";
import { useFetchData } from "../api/axios";
import { User } from "./types/user.type";

export const useAuthService = (data: User) => {
  return useFetchData<AuthState>(
    `/v1/auth/login-by-password`,
    { method: "post", data },
    false
  );
};
