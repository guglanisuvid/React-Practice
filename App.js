const str = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "Hello World"),
        React.createElement("h2", {}, "From Suvid"),
    ]),
    React.createElement(
        "div",
        { id: "child2" },
        React.createElement("h1", {}, "Good Bye")
    ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(str);
