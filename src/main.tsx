import React from "react";
import ReactDOM from "react-dom/client";
import Counters from "./routes/counters/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./NavBar";
import Index from "./Index";
import Cards from "./routes/cards/App";

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/counters", element: <Counters /> },
  { path: "/cards", element: <Cards /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
