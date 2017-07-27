import React from "react";
import Utils from "../Utils";
export default class UserList extends React.Component{
    constructor(){
        super();
        this.state = {users:[]};
    }
    componentWillMount(){
        this.setState({
            users:Utils.getUsers()
        });
    }
    render(){
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>用户名</th>
                        <th>邮箱</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.users.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

        )
    }
}