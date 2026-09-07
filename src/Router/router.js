import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "./Root";
import Shop from "../Pages/Shop";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "signUp", Component: SignUp },
      { path: "login", Component: Login },
      
    ],
  },
]);
