import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("../page/home"))
const Login = React.lazy(() => import("../page/login"))
const NotFound = React.lazy(() => import("../page/404"))

const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />
    },
    {
    path: "/login",
    element: <Login />
    },
    {
    path: "*",
    element: <NotFound />
    }
])

export default router