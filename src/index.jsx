import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.jsx";
import { Constructor } from "./components/Constructor/Constructor.jsx";
import { AboutUs } from "./components/AboutUs/AboutUs.jsx";
import { Basket } from "./components/Basket/Basket.jsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "constructor",
        element: <Constructor />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
