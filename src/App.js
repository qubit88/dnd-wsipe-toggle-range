import React from "react";
import data from "./data";
import ListItem from "./ListItem/ListItem";
import DraggableList from "./DraggableList/DraggableList";
import Toggle from "./Toggle/Toggle";
import Range from "./Range/Range";
import RangeNumbers from "./Range/RangeNumbers";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data,
      draggable: false,
      rangeValue: 2
    };
  }

  onMove = (id, prevId, type) => {
    let movedItem;
    const dropIndex = this.state.data.findIndex(item => item.id === prevId);
    const newList = this.state.data.filter((item, i) => {
      if (item.id === id) {
        movedItem = item;
        return false;
      }

      return true;
    });

    movedItem = { ...movedItem, type: type };

    newList.splice(dropIndex, 0, movedItem);

    this.setState({ data: [...newList] });
  };

  onDelete = id => {
    const newData = this.state.data.filter(item => item.id !== id);
    this.setState({ data: [...newData] });
  };

  onToggleDraggable = () => {
    this.setState(state => ({ draggable: !state.draggable }));
  };

  onRangeChange = value => {
    this.setState({ rangeValue: value });
  };

  render() {
    const type1 = this.state.data.filter(item => item.type === "one");
    const type2 = this.state.data.filter(item => item.type === "two");

    const Item = ({ item, isActive, isDraggedOver }) => (
      <ListItem
        item={item}
        swipable={!this.state.draggable}
        isActive={isActive}
        isDraggedOver={isDraggedOver}
        onDelete={this.onDelete}
      />
    );

    const style = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      minHeight: "3em",
      backgroundColor: "#767577",
      padding: "2px 4px"
    };

    const rowStyle = {
      width: "100%",
      maxHeight: "3em",
      height: "10vw",
      margin: `${this.state.rangeValue}px 0`
    };

    return (
      <div className="App">
        <div className="App__toggle-row">
          <Toggle
            checked={this.state.draggable}
            onChange={this.onToggleDraggable}
            color="#06d7a0"
          />
          <span
            style={{ color: this.state.draggable && "#06d7a0" }}
            className="App__toggle-text"
          >
            draggable mode
          </span>
        </div>

        <div className="App__range-row">
          <RangeNumbers
            onChange={this.onRangeChange}
            value={this.state.rangeValue}
            color="#4A148C"
            activeColor="#06d7a0"
          />
          <Range
            color={"linear-gradient(to right, rgba(0,0,0,0) 0%, #4A148C 100%)"}
            value={this.state.rangeValue}
            onChange={this.onRangeChange}
          />
        </div>

        <div className="App__row">
          <h1>One</h1>

          <DraggableList
            type="one"
            style={style}
            rowStyle={rowStyle}
            data={type1}
            DraggableItem={Item}
            onMove={this.onMove}
            draggable={this.state.draggable}
          />
        </div>
        <div className="App__row">
          <h1>Two</h1>

          <DraggableList
            type="two"
            style={style}
            rowStyle={rowStyle}
            data={type2}
            DraggableItem={Item}
            onMove={this.onMove}
            draggable={this.state.draggable}
          />
        </div>
      </div>
    );
  }
}

export default App;
