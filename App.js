import React from "react";
import ReactDOM from "react-dom/client";

const hw = <h1>Hello World Using JSX!</h1>

const Name = () => (
    <h1>
        By Suvid
    </h1>
);

const Hw = () => (

    <div>
        <h1>
            Hello World using React Components!
        </h1>

        <Name />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Hw />);