## Swipe component

`<SwipeRow> <HiddenView> <Confirm onDelete={() => onDelete(item.id)} /> </HiddenView> <VisibleView swipable={swipable}> <Item item={item} isActive={isActive} /> </VisibleView> </SwipeRow>`

    Put content inside SwipeRow's two children. HiddenView and VisibleView. VisibleView exepts `swipable` Boolean prop that conditionally allows swiping.

## Drag and drop component

`<DraggableList type="one" style={style} rowStyle={rowStyle} data={type1} <DraggableList type="one" style={style} rowStyle={rowStyle} data={type1} DraggableItem={Item} onMove={this.onMove} draggable={this.state.draggable} />={Item} onMove={this.onMove} draggable={this.state.draggable} />`
onMove prop will receive id of the dropped item, id of the item on top of which the dragged item was dropped, type of List. The can be multiple lists on page. The type should corrspond to the list where the item will be dropped. `style` applies to wrapping list, `rowStyle` to item in a list. `DraggableItem` will receive `item`, `isActive`
props. `data` is an array with all items for the this list. `item` is an item from this list. `isActive` is true if this item is dragged.

## Switch Toggle

`<Toggle checked={this.state.draggable} onChange={this.onToggleDraggable} color="#06d7a0" />`

## Range

`<RangeNumbers onClick={this.onRangeChange} value={this.state.rangeValue} color="#4A148C" activeColor="#06d7a0" />`

`<Range color={"linear-gradient(to right, rgba(0,0,0,0) 0%, #4A148C 100%)"} value={this.state.rangeValue} onChange={this.onRangeChange} />`
