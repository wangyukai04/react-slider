import React,{Component} from "react";
import "./Slider.less";
import SliderItems from "./SliderItems";
export default class Slider extends Component{
    constructor(){
        super();
        this.state = {index:0}
    }
    componentDidMount(){
        this.go();
    }
    go = ()=>{
        // 开始自动轮播
        this.timer = setInterval(()=>{
            this.turn(1);
        },2000);
    };
    turn = (step)=>{
        // 表示移动index step步长
        let index = this.state.index + step;
        if (index >= this.props.images.length){
            index = 0;
        }
        this.setState({index});
    };
    render(){
        return (
            <div
                onMouseOver={()=>{clearInterval(this.timer)}}
                onMouseOut={this.go}
                className="slider-wrapper">
                <SliderItems
                    index={this.state.index}
                    images={this.props.images}/>
            </div>
        )
    }
}