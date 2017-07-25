import React from "react";
import ReactDOM from "react-dom";
import Slider from "./components/Slider";
import "./index.less"

const IMAGES = [
    {src:require("./img/1.jpg")},
    {src:require("./img/2.jpeg")},
    {src:require("./img/3.jpg")},
    {src:require("./img/4.jpg")}
];

ReactDOM.render(
    <Slider images={IMAGES}/>,
    document.querySelector("#root")
);