import React, { Component } from "react";
import "./Range.scss";

export class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  onChange = event => {
    const value = event.target.value;
    this.props.onChange(value);
  };

  render() {
    let { value, min, max } = this.props;
    return (
      <div className="Range">
        <input
          type="range"
          min={min || 0}
          max={max || 10}
          value={value}
          onChange={this.onChange}
          className="Range__input"
        />
      </div>
    );
  }
}

export default Range;
