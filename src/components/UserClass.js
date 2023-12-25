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
            <div className="flex gap-8 px-6 mt-8 text-lime-800">
                <img className="rounded-full" src={avatar_url} />
                <div className="flex flex-col justify-evenly text-xl">
                    <h2><span className="font-semibold">Name :</span> {name}</h2>
                    <h2><span className="font-semibold">Bio :</span> {bio}</h2>
                    <h2><span className="font-semibold">Profile :</span> <Link to={html_url} target="_blank">@{login}🔗</Link></h2>
                </div>
            </div>
        )
    }
}

export default UserClass;