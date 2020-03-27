import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Tracks from "./data.json"

ReactDOM.render(
    <App tracks={Tracks} />,
    document.getElementById('app')
);

