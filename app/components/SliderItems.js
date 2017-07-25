import React from "react";
import SlideItem from "./SlideItem";

export default class SliderItems extends React.Component{
    render(){
        let style = {
            width: (this.props.images.length+1) * 700 + "px",
            left: this.props.index * -700 + "px",
            transitionDuration: "1s", // 渐变时间
        };
        return(
            <ul className="sliders" style={style}>
                {
                    this.props.images.map((image,index)=>(
                        <SlideItem
                            key={index}
                            image={image}/>
                    ))
                }
                <SlideItem
                    key={this.props.images.length}
                    image={this.props.images[0]}/>
            </ul>
        )
    }
}