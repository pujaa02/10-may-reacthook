//without hook
import React from "react";
import "./App.css";

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incre = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  decre = () => {
    if (this.state.count !== 0) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  };
  render() {
    return (
      <>
        <h1 id="countdown">Current Count is : {this.state.count}</h1>
        <button class="btn" onClick={this.incre}>
          Increment
        </button>
        <button class="btn" onClick={this.decre}>
          Decrement
        </button>
       
      </>
    );
  }
}
export default Count;
