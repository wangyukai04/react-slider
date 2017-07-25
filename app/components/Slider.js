import React,{Component} from "react";
import "./Slider.less";
import SliderItems from "./SliderItems";
import SliderArrows from "./SliderArrows";
import SliderDots from "./SliderDots";
export default class Slider extends Component{
    constructor(){
        super();
        this.state = {index:0}
    }
    componentDidMount(){
        this.sliders = document.querySelector(".sliders");
        if(this.props.autoPlay){
            this.go();
        }
    }
    go = ()=>{
        // 开始自动轮播
        this.timer = setInterval(()=>{
            this.turn(1);
        },this.props.delay * 1000);
    };
    turn = (step)=>{
        // 表示移动index step步长
        let index = this.state.index + step;
        if (index > this.props.images.length){
            this.sliders.style.transitionDuration = "0s";
            this.sliders.style.left = 0;
            setTimeout(()=>{
                this.sliders.style.transitionDuration = this.props.speed + "s";
                this.setState({index:1});
            },20);
            return;
        }else if(index < 0){
            this.sliders.style.transitionDuration = "0s";
            this.sliders.style.left = this.props.images.length * -700 + "px";
            setTimeout(()=>{
                this.sliders.style.transitionDuration = this.props.speed + "s";
                this.setState({index:this.props.images.length - 1});
            },20);
            return;
        }
        this.setState({index});
    };
    render(){
        return (
            <div
                onMouseOver={()=>{clearInterval(this.timer)}}
                onMouseOut={this.props.autoPlay?this.go:null}
                className="slider-wrapper">
                <SliderItems
                    index={this.state.index}
                    images={this.props.images}/>
                {this.props.arrow?<SliderArrows
                    speed={this.props.speed}
                    turn={this.turn}
                />:null}
                <SliderDots turn={this.turn} index={this.state.index} images={this.props.images}/>
            </div>
        )
    }
}