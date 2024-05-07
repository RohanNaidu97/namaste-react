import React from "react";  


class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 2,
        }
        
    }

    async componentDidMount(){
        // console.log("Child did Mount");

        // this.state = {
        //     userInfo : {
        //         name : "fummy",
        //         location : "default",
        //         avatar_url : "https//:dummy"
        //     }
        // };
        
        const data = await fetch("https://api.github.com/users/rohannaidu97");
        const json = await data.json();

        console.log(json);

        this.setState(
            {
                userInfo : json
            }
        )
    }

    render() {
        console.log("Child Render");

        return(
            <div className="user-card card m-5">
                <h2> Count : { this.state.count } </h2>
                <button onClick = { () => {
                        this.setState( {
                                count : this.state.count + 1
                            }
                        )
                    }
                } className="btn btn-outline-success mx-auto col-auto">
                    Increase Focus
                </button>
                <h2> Name : { this.props.name } </h2>
                <h3> Location : { this.props.location }  </h3>
                <h4> Contact : @ajaySharma </h4>
            </div>
        );
    }
}

export default UserClass;