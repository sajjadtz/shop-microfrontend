# Shop Hub - Micro Frontend Project


Shop Hub is a modular e-commerce platform built using [Vue3](https://vuejs.org/) and [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/). The project consists of multiple micro frontends, each responsible for specific functionalities like authentication, order management, user profile, and product handling. These micro frontends work independently but are integrated into a cohesive system that offers a unified user experience.

By using this micro frontend structure, the platform is highly modular, enabling each team to work on different parts of the application independently while sharing core functionalities like authentication, cart, and profile data seamlessly.


## Project Structure

The **Shop Hub** project consists of four micro frontends:

1. **Auth Micro Frontend**
2. **Order Micro Frontend**
3. **User Micro Frontend**
4. **Product Micro Frontend**

## Technologies Used

- `Vue 3` for building components and views.
- `Pinia` for state management across micro frontends.
- `Webpack Module Federation` for sharing modules between micro frontends.
- `Webpack` for bundling the micro frontends.
- `TypeScript` for better type safety.

## Micro Frontends Overview

### 1. Auth Micro Frontend (`auth`)

- **Purpose**: Handles user authentication.
- **Features**:
  - Login form for user authentication.
  - `AuthStore`: A Pinia store for saving user data (user info, access tokens, etc.).

**Exposed Modules**:

```js
// Webpack Module Federation Exposes
exposes: {
    "./LoginForm": "./src/components/auth/login-form.vue", // Login form
    "./AuthStore": "./src/store/auth.store.ts", // Pinia store for authentication
}
```

### 2. Order Micro Frontend (`order`)

- **Purpose**: Manages the cart and order system.
- **Features**:
  - Imports `AuthStore` from the `auth` micro frontend to authenticate users for order management.
  - Order list component to display all user orders.
  - Cart component to manage cart items.
  - `CartStore`: A Pinia store for managing the cart state.

**Exposed Modules**:

```js
// Webpack Module Federation Exposes
exposes: {
    "./useCart": "./src/composables/cart/useCart.ts", // Composable service for cart services(fetch, changeItem, checkout, etc.)
    "./CartStore": "./src/store/cart.store.ts", // Pinia store for cart
    "./Cart": "./src/components/cart/cart.vue", // Cart component
    "./OrderList": "./src/components/order/order-list.vue", // Order list component
}
```

### 3. User Micro Frontend (`user`)

- **Purpose**: Manages user profile.
- **Features**:
  - Imports `AuthStore` from the `auth` micro frontend to authenticate the user for updating profile information.
  - Update profile form for users to update their information.

**Exposed Modules**:

```js
// Webpack Module Federation Exposes
exposes: {
    "./ProfileInfo": "./src/components/profile/profile-info.vue", // Profile form component
}
```

### 4. Product Micro Frontend (`product`)

- **Purpose**: Manages products, both for listing and creating.
- **Features**:
  - Imports `AuthStore` from the `auth` micro frontend to ensure authenticated access to product creation.
  - Imports `CartStore` and `useCart` from the `order` micro frontend to provide cart functionality in the product list.
  - Product list component that displays available products.
  - Create product form to handle new product creation.

**Exposed Modules**:

```js
// Webpack Module Federation Exposes
exposes: {
    "./ProductList": "./src/components/product/product-list.vue", // Product list component
    "./ProductForm": "./src/components/product/product-form.vue", // Create product form component
}
```

## Main Project (`shop-hub`)

The **main project** imports components and stores from the micro frontends to compose a full shop experience.

### Features:

- Imports the `AuthStore` and `LoginForm` from the `auth` micro frontend to manage authentication throughout the platform.
- Imports the `ProfileInfo` from the `user` micro frontend to allow profile updates.
- Imports the `ProductList` and `ProductForm` from the `product` micro frontend to handle product-related operations.
- Imports the `OrderList`, `Cart` component, and `CartStore` from the `order` micro frontend to provide order and cart functionalities.

### Dependencies in `shop-hub`:

```js
// Webpack Module Federation Remotes
remotes: {
    user: "user@http://localhost:3004/remoteEntry.js",
    auth: "auth@http://localhost:3005/remoteEntry.js",
    product: "product@http://localhost:3002/remoteEntry.js",
    order: "order@http://localhost:3003/remoteEntry.js",
}
```

### Project Structure:

```bash
.
├── auth/                 # Auth micro frontend
├── order/                # Order micro frontend
├── user/                 # User micro frontend
├── product/              # Product micro frontend
├── shop-hub/             # Main project
```

## Installation and Setup

Each micro frontend is an independent project, so follow the steps below to get started:

1. **Clone the repository**:

   ```bash
    git clone https://github.com/sajjadtz/shop-microfrontend.git
    cd shop-microfrontend
   ```

2. **Install dependencies**:
   For each micro frontend (`auth`, `order`, `user`, `product`) and the main project:

   ```bash
    cd <micro-frontend-folder>
    npm install
   ```

3. **Run the micro frontends**:
   Each micro frontend runs on a different port. Start each micro frontend using:

   ```bash
    npm start
   ```

   For example:

   - `shop-hub` (main project) on `http://localhost:3001`
   - `product` on `http://localhost:3002`
   - `order` on `http://localhost:3003`
   - `user` on `http://localhost:3004`
   - `auth` on `http://localhost:3005`

## Usage

After starting all the micro frontends and the main project, navigate to `http://localhost:3001` to interact with the platform. The micro frontends will be dynamically loaded as needed, and the shared stores (e.g., `AuthStore`, `CartStore`) will provide seamless integration across the entire platform.

## Module Federation Configuration

Each micro frontend uses **Webpack Module Federation** to expose its components and stores. Below is an example of the federation configuration in each micro frontend's `webpack.config.js`:

```js
new ModuleFederationPlugin({
  name: "auth",
  filename: "remoteEntry.js",
  exposes: {
    "./LoginForm": "./src/components/auth/login-form.vue",
    "./AuthStore": "./src/store/auth.store.ts",
  },
  shared: require("./package.json").dependencies,
});
```

This setup allows the `auth` micro frontend to expose its `AuthStore` and `LoginForm`, which can be imported by other micro frontends like `order`, `user`, and `product`.
