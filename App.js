import React from "react";
import ReactDOM from "react-dom/client";


 const Title = () => (<h1 id = "title " tabIndex="5"> This is Component composition </h1>);

const HeadingComponent = () => {
    return (<><div id = "container">
    {Title()}
    <Title/>
    { 123 + "321"}
    <h1> Hello World from Functional Component! </h1>
    </div></>)
    
};

const root = ReactDOM.createRoot( document.getElementById("root") );

root.render(<HeadingComponent/>);