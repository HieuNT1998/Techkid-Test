import React, { Component } from 'react';
class App extends Component {
  state = {

  }
  GiaiThua(k) {
    if (k == 0) return 1;
    else {
      var G = 1;
      for (var i = 1; i <= k; i++) {
        G = G * i;
      }
      return G;
    }
  }
  renderPascal() {
    var Arr = [];
    var Max = parseInt(this.props.row);
    var GiaiThuaMax = this.GiaiThua(Max)
    // console.log("max==="+Max);
    for (var i = 0; i <= Max; i++) {
      // console.log("MAX = "+Max+"i = ",+i);  
      var k = (GiaiThuaMax) / (this.GiaiThua(i) * this.GiaiThua(Max - i));
      Arr.push(k);
      
    }
    if(this.props.Goc===0||this.props.Goc===2){
      Arr = Arr.map(item => (
        <span> &nbsp; {item} &nbsp; </span>
      ));
      return <h3 style={{ textAlign: "center" }} >{Arr}</h3>;
    }
    
    else{
      Arr = Arr.map(item => (
        <h3> {item} </h3>
      ));
      return <div style={{ textAlign: "center" }} >{Arr}</div>;
    }
  }
  render() {
    return (
      <div>
        {this.props.row ? this.renderPascal() : ""}
      </div>
    )
  }
}

export default App;
