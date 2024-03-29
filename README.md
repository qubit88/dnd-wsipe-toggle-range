## Swipe component

```
<SwipeRow>
    <HiddenView>
        <Confirm onDelete={() => onDelete(item.id)} />
    </HiddenView>
    <VisibleView swipable={swipable}>
        <Item item={item} isActive={isActive} />
    </VisibleView>
</SwipeRow>
```

Put content inside SwipeRow's two children. HiddenView and VisibleView.
VisibleView acepts `swipable` Boolean prop that conditionally allows swiping.

## Drag and drop component

```
 <DraggableList
    type="one"
    style={style}
    rowStyle={rowStyle}
    data={type1}
    DraggableItem={Item}
    onMove={this.onMove}
    draggable={this.state.draggable}
/>
```

`onMove` prop will receive id of the dropped item, id of the item on top of which the dragged item was dropped, type of List.
There can be multiple lists on page.
`type` should correspond to the property that differentiates list from other lists.
`style` applies to wrapping list, `rowStyle` to item in a list.
`DraggableItem` will receive `item`, `isActive` props.
`data` is an array with all items for the this list.
`item` is a component for item from this list. `isActive` is true if this item is dragged.
`draggable` Boolean prop allows or disallows dnd functionality

## Switch Toggle

```
<Toggle
    checked={this.state.draggable}
    onChange={this.onToggleDraggable}
    color="#06d7a0"
/>
```

## Range

`color` prop can be a color or gradient

```
<RangeNumbers
    onClick={this.onRangeChange}
    value={this.state.rangeValue}
    color="#4A148C"
    activeColor="#06d7a0"
/>
```

```
<Range
    color={"linear-gradient(to right, rgba(0,0,0,0) 0%, #4A148C 100%)"}
    value={this.state.rangeValue}
    onChange={this.onRangeChange}
/>
```
