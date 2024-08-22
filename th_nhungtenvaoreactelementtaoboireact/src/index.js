import React from "react";
import ReactDom from "react-dom/client"

const name="Cuong";
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    React.createElement("h1",{style:{textAlign:"center"}},name)
)
