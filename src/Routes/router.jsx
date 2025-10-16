import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../Root/Root";
import Apps from "../pages/Apps";
import Install from "../pages/Install";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/install",
        element: <Install></Install>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
