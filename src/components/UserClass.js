import React from "react";  


class UserClass extends React.Component{
    render() {
        return(
            <div className="user-card">
                <h2> Name : Ajay Sharma </h2>
                <h3> Location : Manali </h3>
                <h4> Contact : @ajaySharma </h4>
            </div>
        );
    }
}

export default UserClass;