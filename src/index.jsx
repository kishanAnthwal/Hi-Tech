import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { ErrorPage } from "./ErrorPage";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Blog from "./pages/blog.jsx";
import Branches from "./pages/branches.jsx";
import Career from "./pages/career.jsx";
import Contact from "./pages/contact.jsx";
import Courses from "./pages/courses.jsx";
import Support from "./pages/support.jsx";
import Mobile from "./pages/mobile.jsx";
import Laptop from "./pages/laptop.jsx";
import Hard_software from "./pages/hard_software.jsx";
import EMMC from "./pages/EMMC.jsx";
import OCA from "./pages/OCA.jsx";
import Iphone from "./pages/iphone.jsx";
import Layout from "./layout";
import './utility.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"branches",
        element:<Branches/>
      },
         {
        path:"career",
        element:<Career/>
      },
         {
        path:"contact",
        element:<Contact/>
      },
         {
        path:"courses",
        element:<Courses/>
      },
         {
        path:"support",
        element:<Support/>
      },
         {
        path:"mobile",
        element:<Mobile/>
      },
         {
        path:"laptop",
        element:<Laptop/>
      },
         {
        path:"hard_software",
        element:<Hard_software/>
      },
         {
        path:"emmc",
        element:<EMMC/>
      },
         {
        path:"oca",
        element:<OCA/>
      },
         {
        path:"iphone",
        element:<Iphone/>
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
