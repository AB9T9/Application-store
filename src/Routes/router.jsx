import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../Root/Root";
import Apps from "../pages/Apps";
import Install from "../pages/Install";
import Details from "../pages/Details";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
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
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
    ],
  },
]);

export default router;
