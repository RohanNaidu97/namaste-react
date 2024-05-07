import { useState } from "react";
import { APP_LOGO } from "../utlis/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";


const Header = () => {
    const [ btnNameReact, setBtnNameReact ] = useState( "Login" );

    const onlineStatus = useOnlineStatus();

    return(
        <div className = "header">
            <div className="nav-bar">
                <img id = "app-logo" alt = "app logo" src = { APP_LOGO } />
                <ul>
                    <li> Online Status { onlineStatus === true ? "Yes" : "No" } </li>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/about"> About Us </Link>  </li>
                    <li> <Link to="/contact"> Contact Us </Link>  </li>
                    <li> Cart </li>
                    <li> <button className="btnNameReact" 
                            onClick = { () => { 
                                btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact( "Login" )  } }>
                            {btnNameReact}
                        </button> </li>
                </ul>
                
            </div>
        </div>
    );
}

export default Header;