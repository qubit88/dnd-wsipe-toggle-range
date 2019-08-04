import React from "react";
import data from "./data";
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
      if(item.id === id) {
        movedItem = item;
        return;
      }

      return item;
      
    } );

    let prevIndex = newList.findIndex(item => item.id === prevIndex);

    const newIndex = after ? prevIndex  : prevIndex + 1;

    newList.splice(newIndex, 0, movedItem);
  }

  

  render() {
    const type1 = this.state.data.filter(item => item.type === "one");
    const type2 = this.state.data.filter(item => item.type === "two");

    const Item = ({item, isActive}) => (<ListItem item={item} isActive={isActive} />)

    return (<div className="App"> 
          <h1>One</h1>

          <DraggableList data={type1} DraggableItem={Item} onMove={} ></DraggableList>
          
          <h1>Two</h1>

          <DraggableList data={type2} DraggableItem={Item} onMove={} ></DraggableList>
    </div>);
  }
}

export default App;
