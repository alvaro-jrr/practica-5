import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BasePage } from "./components/base-page";
import { ErrorPage } from "./features/error/error-page";
import { Toaster } from "./components/ui/toaster";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <BasePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        async lazy() {
          const { HomePage } = await import("@/features/home/home-page");

          return {
            Component: HomePage,
          };
        },
      },
      {
        path: "/login",
        async lazy() {
          const { LoginPage } = await import(
            "@/features/auth/pages/login-page"
          );

          return {
            Component: LoginPage,
          };
        },
      },
      {
        path: "/sign-up",
        async lazy() {
          const { SignUpPage } = await import(
            "@/features/auth/pages/sign-up-page"
          );

          return {
            Component: SignUpPage,
          };
        },
      },
      {
        path: "/offers",
        async lazy() {
          const { OffersPage } = await import(
            "@/features/offers/pages/offers-page"
          );

          return {
            Component: OffersPage,
          };
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    <Toaster />
  </React.StrictMode>
);
