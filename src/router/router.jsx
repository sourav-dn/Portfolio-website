import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Projects/ProjectDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects/:id", 
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default router;
