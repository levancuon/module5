import React from "react";
import ReactDOM from "react-dom/client"


const fruits = ["apple","orange","banana","mango"]
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1>List of fruits</h1>
        <ul>
            {fruits.map(items=>
            <li>{items}</li>
            )}
        </ul>
    </div>
)