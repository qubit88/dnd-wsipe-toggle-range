import React from "react";
import data from "./data";
import ListItem from "./ListItem/ListItem";
import DraggableList from "./DraggableList/DraggableList";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data
    };
  }

  OnMove = (id, prevId, after) => {
    let movedItem;
    const newList = this.state.data.filter(item => {
      if (item.id === id) {
        movedItem = item;
        return false;
      }

      return true;
    });

    let prevIndex = newList.findIndex(item => item.id === prevId);

    const newIndex = after ? prevIndex : prevIndex + 1;

    newList.splice(newIndex, 0, movedItem);
  };

  render() {
    const type1 = this.state.data.filter(item => item.type === "one");
    const type2 = this.state.data.filter(item => item.type === "two");

    const Item = ({ item, isActive }) => (
      <ListItem item={item} isActive={isActive} />
    );

    const style = {
      width: "80%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    };

    return (
      <div className="App">
        <div className="App__row">
          <h1>One</h1>

          <DraggableList
            style={style}
            data={type1}
            DraggableItem={Item}
            onMove={this.onMove}
          />
        </div>
        <div className="App__row">
          <h1>Two</h1>

          <DraggableList
            style={style}
            data={type2}
            DraggableItem={Item}
            onMove={this.onMove}
          />
        </div>
      </div>
    );
  }
}

export default App;
