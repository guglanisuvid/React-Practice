import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [loginLogoutBtn, setLoginLogoutBtn] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL}></img>
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;