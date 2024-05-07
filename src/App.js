import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"; 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer";

const AppLayout = () => {
    return(
        <div className="app-layout">
            <Header />
            <Outlet />
        </div>
    );
}


const AboutUs = lazy( () => import("./components/AboutUs"));

const appRouter = createBrowserRouter( [
    {
        path : "/",
        element : <AppLayout></AppLayout>,
        children: [
            {
                path: "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <Suspense fallback = {<Shimmer/>} > <AboutUs /> </Suspense>
            },
            {
                path : "/contact",
                element : <ContactUs />
            },
            {
                path : "/restaurants/:resid",
                element : <RestaurantMenu />
            }
        ],
        errorElement : <Error />
    }
] )


const root = ReactDOM.createRoot( document.getElementById("root") );

root.render( <RouterProvider router = { appRouter } /> );


// const Title = () => (<h1 id = "title " tabIndex="5"> This is Component composition </h1>);

// const HeadingComponent = () => {
//     return (<><div id = "container">
//     {Title()}
//     <Title/>
//     { 123 + "321"}
//     <h1> Hello World from Functional Component! </h1>
//     </div></>)
    
// };