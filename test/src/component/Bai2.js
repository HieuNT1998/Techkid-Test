import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from 'axios';
class App extends Component {
    state = {
        username: "",
        fullname: "",
        email: "",
        password: "",
        confirmpassword: ""
    }
    _ChangeUserName = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    _ChangeFullName = (event) => {
        this.setState({
            fullname: event.target.value
        })
    }
    _ChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    _ChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    _ChangeConfirmPassword = (event) => {
        this.setState({
            confirmpassword: event.target.value
        })
    }
    Register = () => {

        var flag1 = 1;
        var flag2 = 1;
        for (let i = 0; i < this.state.username.length; i++) {
            if (this.state.username[i] == ' ') {
                flag1 = 0;
            }
        }
        for (let i = 0; i < this.state.password.length; i++) {
            if (this.state.password[i] == ' ') {
                flag2 = 0;
            }
        }
        if (flag1 == 0) {
            alert("UserName ko dc chua khoang trong");
        }
        else if (flag2 == 0) {
            alert("PassWord ko dc chua khoang trong");
        }
        else {
            if (this.state.username != "") {
                if (this.state.password != "") {
                    if (this.state.password === this.state.confirmpassword) {
                        axios.post("http://localhost:6969/user", this.state)
                            .then(req => { this.props.history.push("/main") });

                    }
                    else {
                        alert("Mat khau xac nhan ko dung");
                    }
                }
                else {
                    alert("Ban chua nhap password");
                }
            }
            else {
                alert("Ban chua dien ten dang nhap");
            }
        }

    }
    render() {
        return (
            <div className="container">
                <div class="form-group">
                    <label for="usr">UserName:</label>
                    <input onChange={this._ChangeUserName} type="text" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="pwd">FullName:</label>
                    <input type="text" onChange={this._ChangeFullName} class="form-control" />
                </div>
                <div class="form-group">
                    <label for="pwd">Email:</label>
                    <input type="text" class="form-control" onChange={this._ChangeEmail} />
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" onChange={this._ChangePassword} />
                </div>
                <div class="form-group">
                    <label for="pwd">Confirm Password:</label>
                    <input type="password" class="form-control" onChange={this._ChangeConfirmPassword} />
                </div>
                <button type="button" className="btn btn-success" onClick={this.Register}>Register</button>
                <Link to={`/login`}>
                    <button type="button" className="btn btn-success" >Login</button>
                </Link>
            </div>
        )
    }
}

export default App;
