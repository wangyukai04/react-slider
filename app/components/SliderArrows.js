/**
 * Created by Administrator on 2017/7/25.
 */
import React from "react";
import "./SliderArrows.less"
export default class SliderArrows extends React.Component{
    constructor(){
        super();
        this.state = {isMove:false}
    }
    before = ()=>{
        this.change(-1);
    };
    next = ()=>{
        this.change(1);
    };
    change = (go)=>{
        if(!this.state.isMove){
            this.setState({isMove:true});
            this.props.turn(go);
            setTimeout(()=>{
                this.setState({isMove:false});
            },this.props.speed * 1000)
        }
    };
    render(){
        return (
            <div className="slider-arrows">
                <span onClick={this.before} className="arrow arrow-left">&lt;</span>
                <span onClick={this.next}  className="arrow arrow-right">&gt;</span>
            </div>
        )
    }
}