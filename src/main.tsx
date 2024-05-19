import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { BasePage } from "./components/base-page";
import { HomePage } from "./features/home/home-page";
import { LoginPage } from "./features/auth/pages/login-page";
import { SignUpPage } from "./features/auth/pages/sign-up-page";
import { ErrorPage } from "./features/error/error-page";

const router = createBrowserRouter([
  {
    element: <BasePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
