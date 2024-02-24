import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Componente1 from "./Componente1.jsx";
import Componente2 from "./Componente2.jsx";
import { RouterProvider } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "componente1",
        element: <Componente1 />,
      },
      {
        path: "componente2",
        element: <Componente2 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
