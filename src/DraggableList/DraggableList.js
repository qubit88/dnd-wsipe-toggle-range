import React, { Component } from "react";
import "./DraggableList.css";

export class DraggableList extends Component {
  constructor(props) {
    super(props);
    this.draggedRef = React.createRef();
    this.state = {
      isDragged: false,
      draggedId: null,
      initialPos: null,
      shiftX: null,
      shiftY: null
    };
  }

  onDragStart = (event, id) => {
    this.setState({ draggedId: id });
  };

  onDrop = (event, dropId) => {
    event.preventDefault();

    this.props.onMove(this.state.draggedId, dropId);

    this.setState({ draggedId: null });
  };

  onTouchDragStart = (event, id) => {
    this.draggedRef.current = event.target.closest(".DraggableList__item");
    document.addEventListener("touchmove", this.onTouchDragMove);
    document.addEventListener("touchend", this.onTouchDragEnd);

    this.draggedRef.current.style.width =
      this.draggedRef.current.getBoundingClientRect().width + "px";

    let touchEvent = event.changedTouches[0];
    const shiftX =
      touchEvent.clientX - this.draggedRef.current.getBoundingClientRect().left;
    const shiftY =
      touchEvent.clientY - this.draggedRef.current.getBoundingClientRect().top;

    this.draggedRef.current.style.position = "fixed";
    this.draggedRef.current.style.zIndex = "1000";
    this.draggedRef.current.style.pointerEvents = "none";

    this.setState({
      draggedId: id,
      initialPos: {
        x: touchEvent.clientX,
        y: touchEvent.clientY
      },
      shiftX,
      shiftY
    });
  };

  onTouchDragMove = event => {
    const left = event.touches[0].clientX - this.state.shiftX;
    const top = event.touches[0].clientY - this.state.shiftY;

    console.log(
      event.touches[0].pageY,
      this.state.shiftY,
      this.draggedRef.current
    );

    this.draggedRef.current.style.left = left + "px";
    this.draggedRef.current.style.top = top + "px";
  };

  onTouchDragEnd = event => {
    document.removeEventListener("touchmove", this.onTouchDragMove);

    document.removeEventListener("touchend", this.onTouchDragEnd);

    const changedTouch = event.changedTouches[0];

    const dropTarget = document
      .elementFromPoint(changedTouch.clientX, changedTouch.clientY)
      .closest(".DraggableList__item");

    if (dropTarget) {
      const dropId = Number(dropTarget.dataset.id);

      this.props.onMove(this.state.draggedId, dropId);
    }

    this.setState({
      draggedId: null,
      initialPos: null,
      shiftX: null,
      shiftY: null
    });

    this.draggedRef.current.style.position = "static";
    this.draggedRef.current.style.zIndex = "initial";
    this.draggedRef.current.style.pointerEvents = "auto";
    this.draggedRef.current.style.width =
      this.props.rowStyle && this.props.rowStyle.width
        ? this.props.rowStyle.width
        : "100%";
  };

  render() {
    let { data, DraggableItem, style, rowStyle, draggable } = this.props;

    return (
      <div style={style}>
        {data.map(i => {
          return (
            <div
              key={i.id}
              data-id={i.id}
              onDragStart={
                draggable ? event => this.onDragStart(event, i.id) : undefined
              }
              onTouchStart={
                draggable
                  ? event => this.onTouchDragStart(event, i.id)
                  : undefined
              }
              onDrop={event => this.onDrop(event, i.id)}
              onDragOver={e => e.preventDefault()}
              draggable={draggable}
              style={rowStyle}
              className="DraggableList__item"
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
