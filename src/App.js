import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"; 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer";
import { useState,useEffect } from "react";
import UserContext from "./utlis/UserContext";


const AppLayout = () => {
    const [ userName, setUserName ] = useState("Griffin");

    useEffect( () => {
        //Make an API call and get the UserName and Password
        const data = {
            name : "Rohan Naidu"
        }
        setUserName(data.name)
    }, [])

    return(
        <UserContext.Provider value={ {loggedInUser : userName }}>
            <div className="app-layout">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
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