import React from "react";
import { SwipeRow, HiddenView, VisibleView } from "../SwipeRow";
import Item from "./Item";
import Confirm from "./Confirm";

function ListItem({ item }) {
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
