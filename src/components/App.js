import React from "react";
import {HashRouter as Router,Route,Switch,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./Home";
import User from "./User";
import Profile from "./Profile";

// exact 表示严格匹配
// Switch 只匹配一次
export default class App extends React.Component{
render(){
return (
<Router>
    <div>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <div className="navbar-brand">用户管理系统</div>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/user">用户管理</Link></li>
                    <li><Link to="/profile">个人设置</Link></li>
                </ul>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-1">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/user" component={User}/>
                        <Route path="/profile" component={Profile}/>
                    </Switch>
                </div>
            </div>
        </div>
    </div>
</Router>
)
}
}