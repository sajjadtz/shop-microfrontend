import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/index.vue";
import Login from "../pages/login/index.vue";
import Cart from "../pages/cart/index.vue";
import CreateProduct from "../pages/product-create/index.vue";
import Orders from "../pages/orders/index.vue";
import Profile from "../pages/profile/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/product-create",
    name: "CreateProduct",
    component: CreateProduct,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
