import React from "react";
import { SwipeRow, HiddenView, VisibleView } from "../SwipeRow";
import Item from "./Item";
import Confirm from "./Confirm";

function ListItem({ item, onDelete }) {
  return (
    <SwipeRow>
      <HiddenView>
        <Confirm onDelete={() => onDelete(item.id)} />
      </HiddenView>
      <VisibleView>
        <Item item={item} />
      </VisibleView>
    </SwipeRow>
  );
}

export default ListItem;
