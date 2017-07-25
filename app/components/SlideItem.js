import React from "react";

export default class SlideItem extends React.Component{
    render(){
        return(
            <li className="slider">
                <img src={this.props.image.src}/>
            </li>
        )
    }
}