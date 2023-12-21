import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [loginLogoutBtn, setLoginLogoutBtn] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <Link to={"/"}><img src={LOGO_URL}></img></Link>
            </div>
            <div className="login-logout">
                <button
                    className="login-logout-btn"
                    onClick={() => {
                        loginLogoutBtn === "Login" ? setLoginLogoutBtn("Logout") : setLoginLogoutBtn("Login");
                    }}>
                    {loginLogoutBtn}
                </button>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;