import { useState } from "react";

const User = (props) => {
    const [ count, setCount ] = useState(0);

    return(
        <div className="user-card card m-5">
                <h2> Count : { count } </h2>
                <h2> Name : {props.name} </h2>
                <h3> Location : { props.location } </h3>
                <h4> Contact : @ajaySharma </h4>
            </div>
    );
}

export default User;