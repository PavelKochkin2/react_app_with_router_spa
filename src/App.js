import { ErrorPage } from "./pages/Error";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import { ProductsPage } from "./pages/Products";
import { RootPage } from "./pages/Root";
import { ProductDetailsPage } from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <ProductDetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
