import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class App extends Component {
    state = {
        username:"",
        password:"",
    }
    _ChangeUserName=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    
    _ChangePassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    
    Submit=()=>{
        
            if(this.state.username != ""){
                if(this.state.password != ""){
                    axios.post("http://localhost:6969/user/login",this.state)
                    .then(req=>{this.props.history.push("/main")})
                    .catch(err=>{alert("Dang Nhap ko thanh cong")})
                }
                else{
                    alert("Ban chua nhap password");
                }
            }
            else{
                alert("Ban chua dien ten dang nhap");
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
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" onChange={this._ChangePassword} />
                </div>
               
                <button type="button" class="btn btn-success" onClick={this.Submit}>Login</button>
            </div>
        )
    }
}

export default App;
