import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/js/all"
import App from "./App";
import "./scss/styles.scss";
import "./js/changeTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
