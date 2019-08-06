import React from "react";
import data from "./data";
import ListItem from "./ListItem/ListItem";
import DraggableList from "./DraggableList/DraggableList";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data,
      draggable: false
    };
  }

  onMove = (id, prevId) => {
    let movedItem;
    let index;
    const dropIndex = this.state.data.findIndex(item => item.id === prevId);
    const newType = this.state.data[dropIndex].type;
    const newList = this.state.data.filter((item, i) => {
      if (item.id === id) {
        movedItem = item;
        index = i;
        return false;
      }

      return true;
    });

    movedItem = { ...movedItem, type: newType };

    const newIndex = dropIndex > index ? dropIndex + 1 : dropIndex;

    newList.splice(newIndex, 0, movedItem);

    this.setState({ data: [...newList] });
  };

  onDelete = id => {
    const newData = this.state.data.filter(item => item.id !== id);
    this.setState({ data: [...newData] });
  };

  onToggleDraggable = () => {
    this.setState(state => ({ draggable: !state.draggable }));
  };

  render() {
    const type1 = this.state.data.filter(item => item.type === "one");
    const type2 = this.state.data.filter(item => item.type === "two");

    const Item = ({ item, isActive }) => (
      <ListItem item={item} isActive={isActive} onDelete={this.onDelete} />
    );

    const style = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    };

    const rowStyle = {
      width: "100%",
      maxHeight: "3em",
      height: "10vw"
    };

    return (
      <div className="App">
        <div>
          <input
            type="checkbox"
            onChange={this.onToggleDraggable}
            checked={this.state.draggable}
          />
          draggable mode
        </div>

        <div className="App__row">
          <h1>One</h1>

          <DraggableList
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
