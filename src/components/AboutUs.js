import UserClass from "./UserClass";
import User from "./User";
import React from "react";
import UserContext from "../utlis/UserContext";

class AboutUs extends React.Component{
    constructor(){
        super();
        console.log("Parent Cconstructor");
    }

    async componentDidMount(){
        // console.log("Parent did Mount");
    }

    render() {
        console.log("Parent Render");
        return(
            <div className="about-us">
                <h1> This project will help us get a JOB !!!</h1>
                <h2> We are going to Netherlands </h2>

                <div>
                    <UserContext.Consumer>
                        { (data) => (<h1> { data.loggedInUser } </h1>) }
                    </UserContext.Consumer>
                </div>

                <User name = {"Ajay Sharma Function One"} location = {"Netherlands"} />

                <UserClass name = {"Ajay Sharma Class One"} location = {"Netherlands"} />
            </div>
        );
    }
}

export default AboutUs;