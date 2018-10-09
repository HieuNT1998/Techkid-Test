import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MainContent from './MainContet';
class App extends Component {
    state={
        UserList:[],
        displayString:""
    }
    _ChangeUserName=(e)=>{
        this.setState({
            displayString:e.target.value
        })
    }
    componentDidMount(){
        axios.get("http://localhost:6969/user")
        .then(req=>{
            console.log(req);
            this.setState({
                UserList:req.data.users
            })
        });
    }
    render() {
        const displyerUser = this.state.UserList.filter(user => user.username.includes(this.state.displayString));
        return (
            <div className="container">
            <div className="form-group">
                    <label >UserName:</label>
                    <input onChange={this._ChangeUserName} type="text" className="form-control" />
            </div>
            <MainContent user={displyerUser}/>    
            </div>
        )
    }
}

export default App;
