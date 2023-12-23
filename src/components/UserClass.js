import React from "react";
import { PROFILE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

class UserClass extends React.Component {
    constructor() {
        super();
        this.state = {
            profileInfo: {}
        }
    }

    async componentDidMount() {
        const data = await fetch(PROFILE_URL + "guglanisuvid");

        const json = await data.json();

        this.setState(
            {
                profileInfo: json
            }
        );
    }

    render() {

        const { avatar_url, name, bio, html_url, login } = this.state.profileInfo;

        return (
            <div className="profile-container">
                <div className="profile-img">
                    <img src={avatar_url} />
                </div>
                <div className="profile-info">
                    <h2>Name : {name}</h2>
                    <h2>Bio : {bio}</h2>
                    <h2>Profile : <Link to={html_url} target="_blank">@{login}</Link></h2>
                </div>
            </div>
        )
    }
}

export default UserClass;