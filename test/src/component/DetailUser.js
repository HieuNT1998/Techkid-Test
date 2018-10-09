import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class App extends Component {
    
    render() {
        return (
            <div className="UserDetail alert alert-info"> 
                <h4><strong>UserName:</strong>{this.props.user.username}</h4>
                <h4><strong>FullName:</strong>{this.props.user.fullname}</h4>
                <h4><strong>Email:</strong>{this.props.user.email}</h4>
                
            </div>
        )
    }
}

export default App;
