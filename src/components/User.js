import React from "react";
import {Link,Route} from "react-router-dom";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
export default class User extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-4">
                    <ul className="nav nav-tabs nav-stacked">
                        <li><Link to="/user/list">用户列表</Link></li>
                        <li><Link to="/user/add">新增用户</Link></li>
                    </ul>
                </div>
                <div className="col-md-8">
                    <Route path="/user/list" component={UserList}></Route>
                    <Route path="/user/add" component={UserAdd}></Route>
                </div>
            </div>
        )
    }
}