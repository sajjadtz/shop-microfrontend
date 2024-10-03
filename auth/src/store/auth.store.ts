import { User } from "../composables/auth/types/user.type";
import { useIdentityService } from "../composables/auth/useIdentity.service";
import { defineStore } from "pinia";

export type AuthState = {
  user?: User;
  accessToken?: string;
};

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: undefined,
    accessToken: undefined,
  }),
  getters: {
    // check if user is logged in
    isLoggedIn: (state) => Boolean(state.accessToken),
    // check if user is admin
    isAdmin: (state) => Boolean(state.user?.role === "admin"),
    // get user data
    getIdentity: (state) => state.user,
    // get access token
    getToken: (state) => state.accessToken,
  },
  actions: {
    // read access token from local storage and if has value, set in store then fetch user identity from server
    initial() {
      const token = localStorage.getItem("token");

      if (token) {
        this.accessToken = token;
        this.fetchAndSetIdentityIfLoggedIn();
      }
    },
    // set access token and user data in store and local storage
    login({ accessToken, user }: AuthState) {
      if (accessToken && user) {
        localStorage.setItem("token", accessToken);
        this.accessToken = accessToken;
        this.user = user;
      }
    },
    // set user data in store
    setIdentity(user: User) {
      this.user = user;
    },
    // fetch user identity from server and set data in store
    fetchAndSetIdentityIfLoggedIn() {
      if (this.isLoggedIn) {
        const fetchIdentity = useIdentityService();
        void fetchIdentity().then((response) => {
          if (response != undefined) {
            this.setIdentity(response);
          }
        });
      }
    },
    // clear local storage and store
    logout() {
      this.accessToken = undefined;
      this.user = undefined;
      localStorage.removeItem("token");
    },
  },
});
