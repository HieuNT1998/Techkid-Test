import React, { Component } from 'react';
import Row from './Row';
class App extends Component {
  state = {

  }
  rendercontent() {
    const ArrRow = [];
    if (this.props.data.Goc === 0) {
      ArrRow.push(<h3 style={{ textAlign: "center" }}>1</h3>);
      for (var i = 1; i <= this.props.data.A; i++) {
        ArrRow.push(<Row row={i} Goc={this.props.data.Goc} />)
      }
      return <div className="container"> {ArrRow} </div>
    }
    if (this.props.data.Goc === 1) {
      for (var i = this.props.data.A; i >0; i--) {
        ArrRow.push(<div className="Col"><Row row={i} Goc={this.props.data.Goc}/></div>)
      }
      ArrRow.push(<div className="Col" style={{ textAlign: "center"}} ><h3>1</h3></div>);
      return <div className="Goc1"> {ArrRow} </div>
    }
    if(this.props.data.Goc === 2){
      for (var i = this.props.data.A; i >0; i--) {
        ArrRow.push(<Row row={i} Goc={this.props.data.Goc} />)
      }
      ArrRow.push(<h3 style={{ textAlign: "center"}}>1</h3>);
      return <div className="container Goc2"> {ArrRow} </div>
    }
    if (this.props.data.Goc === 3) {
      ArrRow.push(<div className="Col"><div style={{ textAlign: "center" }}><h3>1</h3></div></div>);
      for (var i = 1; i <= this.props.data.A; i++){
        ArrRow.push(<div className="Col" ><Row row={i} Goc={this.props.data.Goc}/></div>)
      }
      return <div className="Goc3"> {ArrRow} </div>
    }
  }
  render() {
    return (
      <div>
        {this.props.data.flag === 1 ? this.rendercontent() : ""}
      </div>
    )
  }
}

export default App;
