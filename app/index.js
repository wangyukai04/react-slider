import React from "react";
import ReactDOM from "react-dom";
import Slider from "./components/Slider";
import "./index.less"

const IMAGES = [
    {src:require("./img/1.jpg")},
    {src:require("./img/2.gif")},
    {src:require("./img/3.jpg")},
    {src:require("./img/4.jpg")}
];

ReactDOM.render(
    <Slider
        images = {IMAGES}
        autoPlay = {true}
        delay = {1.5}
        speed = {1}
        arrow = {true} // 是否显示左右箭头导航
        dots = {true} // 是否显示点状导航
    />,
    document.querySelector("#root")
);