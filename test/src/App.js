import React, { Component } from 'react';
import './App.css';
import Bai2 from './component/Bai2';
import Login from './component/Login';
import Bai2Systerm from './component/Bai2system';
import { BrowserRouter,Route } from "react-router-dom";
import Bai1 from './component/Bai1';
class App extends Component {
 
  render() {

    return (
      <BrowserRouter>
        <div>
        <Route exact path="/" render={(props)=>{
            return <Bai2 {...props}/>
        }}/>
        <Route exact path="/main" render={(props)=>{
            return <Bai2Systerm {...props}/>
        }}/>
        <Route exact path="/login" render={(props)=>{
            return <Login {...props}/>
        }}/>
        </div>
      </BrowserRouter>
      // <Bai1  />
      
    )
  }
}

export default App;
