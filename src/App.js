import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"; 

const AppLayout = () => {
    return(
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot( document.getElementById("root") );

root.render(<AppLayout/>);


// const Title = () => (<h1 id = "title " tabIndex="5"> This is Component composition </h1>);

// const HeadingComponent = () => {
//     return (<><div id = "container">
//     {Title()}
//     <Title/>
//     { 123 + "321"}
//     <h1> Hello World from Functional Component! </h1>
//     </div></>)
    
// };