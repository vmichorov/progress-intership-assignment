import React from "react";
import Slider from "react-rangeslider";

import "../styles/App.css";
import "react-rangeslider/lib/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { volume: 33 };
  }

  handleStart = () => {
    console.log("Change event started");
  };

  handleChange = (value) => {
    this.setState({ volume: value });
  };

  handleComplete = () => {
    console.log("Change event completed");
  };

  render() {
    return (
      <div className="app">
        <h4 className="value">Value: {this.state.volume}</h4>
        <Slider
          className="slider"
          min={0}
          max={100}
          step={1}
          value={this.state.volume}
          onChange={this.handleChange}
          labels={{
            0: "0%",
            20: "20%",
            40: "40%",
            60: "60%",
            80: "80%",
            100: "100%",
          }}
        />
      </div>
    );
  }
}

export default App;
