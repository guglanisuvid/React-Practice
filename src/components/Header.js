import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {

    const [loginLogoutBtn, setLoginLogoutBtn] = useState("Login");

    const { userLoginId, setUserName } = useContext(UserContext);

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header flex justify-between items-center gap-4 px-6 bg-[#ECF8E5] shadow-md text-lime-800">
            <div className="logo-container">
                <Link to={"/"}><img src={LOGO_URL} className="w-24" /></Link>
            </div>
            <input className="px-4 py-2 rounded-lg bg-green-100 placeholder:text-lime-800 text-lime-800 font-semibold outline-none shadow-lg"
                type="text"
                value={userLoginId}
                onChange={(e) => setUserName(e.target.value)}
            />

            <div className="nav-items w-1/2">
                <ul className="w-full flex justify-between">
                    <li>Status : {onlineStatus ? "Online✅" : "Offline❌"}</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li>Cart</li>
                    <li>
                        <button
                            className="login-logout-btn"
                            onClick={() => {
                                loginLogoutBtn === "Login" ? setLoginLogoutBtn("Logout") : setLoginLogoutBtn("Login");
                            }}>
                            {loginLogoutBtn}
                        </button>
                    </li>
                    <li className="font-semibold">{userLoginId}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;