import { useUpdateUserService } from "./useUser.service";
import { useAuthStore } from "auth/AuthStore";

export const useUser = () => {
  const handleUpdateUser = async (username: string) => {
    const fetchData = useUpdateUserService(username);
    const authStore = useAuthStore();

    // send request for updating user
    const response = await fetchData();

    // check update response
    if (response) {
      // if response was ok, fetch new identity from server
      authStore.fetchAndSetIdentityIfLoggedIn();
    }
  };

  return { handleUpdateUser };
};
