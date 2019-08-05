import React from "react";
import { SwipeRow, HiddenView, VisibleView } from "../SwipeRow";
import Item from "./Item";
import Confirm from "./Confirm";

function ListItem({ item, onConfirmSwipe }) {
  return (
    <SwipeRow>
      <HiddenView>
        <Confirm onConfirm={onConfirmSwipe} />
      </HiddenView>
      <VisibleView>
        <Item item={item} />
      </VisibleView>
    </SwipeRow>
  );
}

export default ListItem;
