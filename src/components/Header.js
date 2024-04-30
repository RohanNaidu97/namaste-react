import { APP_LOGO } from "../utlis/constants";


const Header = () => {
    return(
        <div className = "header">
            <div className="nav-bar">
                <img id = "app-logo" alt = "app logo" src = { APP_LOGO } />
                <ul>
                    <li> Home </li>
                    <li> About Us </li>
                    <li> Contact Us </li>
                    <li> Cart </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;