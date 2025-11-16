import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx"
import "./index.css"

const root: ReactDOM.Root = ReactDOM.createRoot(document.querySelector("#root")!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);