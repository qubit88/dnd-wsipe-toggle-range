import React, { Component } from "react";
import "./DraggableList.css";

export class DraggableList extends Component {
  constructor(props) {
    super(props);

    this.state = { isDragged: false };
  }

  onDragStart = (event, id) => {
    this.setState({ isDragged: true });
    event.dataTransfer.setData("text/plain", id);
  };

  onDrop = (event, dropId) => {
    event.preventDefault();
    const id = Number(event.dataTransfer.getData("text"));

    this.props.onMove(id, dropId);
  };

  render() {
    let { data, DraggableItem, style, rowStyle, sort } = this.props;
    console.log(sort);
    return (
      <div style={style}>
        {data.map(i => {
          return (
            <div
              key={i.id}
              onDragStart={event => this.onDragStart(event, i.id)}
              onDrop={event => this.onDrop(event, i.id)}
              onDragOver={e => e.preventDefault()}
              draggable={sort}
              style={rowStyle}
            >
              <DraggableItem item={i} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DraggableList;
