import { useUpdateUserService } from "./useUser.service";
import { useAuthStore } from "auth/AuthStore";

export const useUser = () => {
  const handleUpdateUser = async (username: string) => {
    const fetchData = useUpdateUserService(username);
    const authStore = useAuthStore();

    const response = await fetchData();
    if (response) {
      authStore.fetchAndSetIdentityIfLoggedIn();
    }
  };

  return { handleUpdateUser };
};
