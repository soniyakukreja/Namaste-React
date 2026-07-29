import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter } from "react-router";
import {RouterProvider } from "react-router";
import { Outlet } from "react-router";

const AppLayout = ()=>(
    <div>
        <Header />
        <Outlet />
        {/* <Body />
        <Footer /> */}
    </div>
)

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/contact',
        element:<Contact />
      }
    ],
    errorElement:<Error />

  },
  
  
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);