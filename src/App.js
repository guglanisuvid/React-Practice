import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import UserContext from "./utils/userContext";

const About = lazy(() => import("./components/About"));

const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {

    const [userName, setUserName] = useState("Default User");

    return (
        <div className="app scroll-smooth">
            <UserContext.Provider value={{ userLoginId: userName, setUserName }}>
                <Header />
            </UserContext.Provider>
            <Outlet />
        </div >
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<h1>Loading...</h1>}><Contact /></Suspense>
            },
            {
                path: "restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);