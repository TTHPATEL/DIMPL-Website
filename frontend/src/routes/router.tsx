import { createBrowserRouter, redirect } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "../layouts/RootLayout";

// Lazy load components
const Home = lazy(() => import("../pages/HomeScreen"));

// Error boundary component
function ErrorBoundary() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg">Something went wrong. Please try again.</p>
    </div>
  );
}

const routes = {
  public: [
    {
      index: true,
      element: <Home />,
    },
  ],
  protected: [
    {
      path: "home",
      element: <Home />,
    },
  ],
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      // Public routes
      ...routes.public.map((route) => ({
        ...route,
        element: route.element,
      })),

      // Protected routes
      ...routes.protected.map((route) => ({
        ...route,
        element: route.element,
      })),

      // Catch-all route
      {
        path: "*",
        loader: () => redirect("/"),
      },
    ],
  },
]);
