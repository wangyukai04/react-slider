import React from "react";
import Utils from "../Utils";
export default class UserAdd extends React.Component{
    handleSubmit = (e)=>{
        e.preventDefault();
        let id = Date.now();
        let username = this.refs.username.value;
        let email = this.refs.email.value;
        // 保存成功之后跳到列表页面
        Utils.saveUser({id,username,email});
        this.props.history.push("/user/list");
    };
    /*
    * this.props
    * history 历史 可以操作读取和写入历史
    * location 位置 location.pathname获取当前路径
    * match 如果route中的path属性和当前浏览器中的url匹配的话 就有值
    * */
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="h3">添加用户</div>
                <div className="form-group">
                    <label className="control-label" htmlFor="username">名称</label>
                    <input required ref="username" className="form-control" type="text" id="username"/>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="email">邮箱</label>
                    <input required ref="email" className="form-control" type="email" id="email"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-info">添加</button>
                </div>
            </form>
        )
    }
}