import { useAuthStore } from "../../store/auth.store";
import { useAuthService } from "./useAuth.service";
import { User } from "./types/user.type";

export const useAuth = () => {
  const handleLogin = async (body: User) => {
    const fetchData = useAuthService(body);
    const { login } = useAuthStore();
    
    // send login request
    const response = await fetchData();
    
    // check login response
    if (response) {
      // update global store
      login(response)
    }
  };

  return {
    handleLogin,
  };
};
