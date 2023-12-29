import UserContext from "../utils/userContext";
import UserClass from "./UserClass";

const About = () => {

    return (
        <div className="my-8">
            <h1 className="text-4xl font-bold text-lime-800 px-6 text-center">About</h1>
            <UserClass />
            <UserContext.Consumer>
                {({ userLoginId }) => (
                    <h2 className="text-center">
                        <span className="font-semibold">{userLoginId} </span>
                        is using the app currently.
                    </h2>
                )}
            </UserContext.Consumer>
        </div>
    )
}

export default About;