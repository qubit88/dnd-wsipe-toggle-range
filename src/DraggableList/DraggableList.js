import React, { Component } from "react";
import "./DraggableList.css";

export class DraggableList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    let { data, DraggableItem, onMove, style, rowStyle } = this.props;
    return (
      <div style={style}>
        {data.map(i => {
          return (
            <div style={rowStyle}>
              <DraggableItem item={i} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DraggableList;
