import React, { Component } from 'react';
import Main from './MainBai1';

class App extends Component {
  state = {
    A:0,
    flag:0,
    Goc:0 ,
    ClassName:"Maincontent0"
  }
  _onchangeInput=(event)=>{
    this.setState({
      A:event.target.value,
      flag:0
    })
    //console.log(this.state.A);
  }
  ClickOk=()=>{
    this.setState({
      flag:1
    })
  }
  Quay=()=>{
    var goc = this.state.Goc;
    goc = (goc+1)%4;
    this.setState({
      Goc:goc
    })
    // var str = "Maincontent"+goc;
    // this.setState({
    //   ClassName:str
    // })
  }
  render() {
    return (
      <div>
        <input type="number" placeholder="Nhap So" onChange={this._onchangeInput}/>
        <button onClick={this.ClickOk} > OK</button>
        <button onClick={this.Quay}> Quay</button>
        <div className={this.state.ClassName} >
          <Main data={this.state}/>
        </div>
      </div>
    )
  }
}

export default App;
