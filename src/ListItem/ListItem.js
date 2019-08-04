import React from "react";

function ListItem(props) {
  return (
    <SwipeRow>
      <HiddenView>
        <Confirm />
      </HiddenView>
      <VisibleView>
        <Item />
      </VisibleView>
    </SwipeRow>
  );
}

export default ListItem;
