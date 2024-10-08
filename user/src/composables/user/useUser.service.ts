import { useFetchData } from "../api/axios";
import { User } from "./types/user.type";

export const useUpdateUserService = (username: string) => {
  return useFetchData<User>(
    `/v1/user`,
    {
      data: { username },
      method: "patch",
    },
    true
  );
};
