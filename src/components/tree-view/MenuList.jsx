import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  console.log(list.length);
  return (
    <ul>
      {list && list.length > 0
        ? list.map((items) => <MenuItem key={items.label} items={items} />)
        : null}
    </ul>
  );
}

export default MenuList;
