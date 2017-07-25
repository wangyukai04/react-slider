import React from "react";
import "./SliderDots.less";
export default class SliderDots extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="slider-dots">
                {
                    this.props.images.map((item,index)=>(
                        <span onClick={()=>{this.props.turn(index-this.props.index)}}
                              className={index===this.props.index||(index===0&&this.props.index===this.props.images.length)?"dot active":"dot"}
                              key={index}></span>
                    ))
                }
            </div>
        )
    }
}