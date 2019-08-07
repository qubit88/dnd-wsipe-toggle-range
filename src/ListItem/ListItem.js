import React from "react";
import { SwipeRow, HiddenView, VisibleView } from "../SwipeRow";
import Item from "./Item";
import Confirm from "./Confirm";

function ListItem({ item, onDelete, swipable }) {
  return (
    <SwipeRow>
      <HiddenView>
        <Confirm onDelete={() => onDelete(item.id)} />
      </HiddenView>
      <VisibleView swipable={swipable}>
        <Item item={item} />
      </VisibleView>
    </SwipeRow>
  );
}

export default ListItem;
