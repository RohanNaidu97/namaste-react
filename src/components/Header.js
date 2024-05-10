import { useState } from "react";
import { APP_LOGO } from "../utlis/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";


const Header = () => {
    const [ btnNameReact, setBtnNameReact ] = useState( "Login" );

    const onlineStatus = useOnlineStatus();

    return(
        <div className = "header font-serif bg-orange-400 mx-auto">
            <div className="nav-bar flex flex-nowrap items-center justify-between hover:orange-200 hover:bg-gray-700 hover:text-white">
                <img className = "app-logo size-20" alt = "app logo" src = { APP_LOGO } />
                <ul className="flex flex-nowrap space-x-2">
                    <li> Online Status { onlineStatus === true ? "Yes" : "No" } </li>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/about"> About Us </Link>  </li>
                    <li> <Link to="/contact"> Contact Us </Link>  </li>
                    <li> Cart </li>
                    <li> <button className="btnNameReact bt" 
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