import { useState } from "react";
import MenuList from "./MenuList";

function MenuItem({ items }) {
//   console.log(items.children);
const [open, setOpen] = useState(false);

  return (
    <div>
      <li onClick={()=> setOpen(prev=>!prev)}> {items.label} <span > {items.children && items.children.length > 0 ? (open? "-" : "+") : null}</span></li>
      {items.children && items.children.length > 0 && open ? (
        <MenuList list={items.children} />
      ) : null}
    </div>
  );
}

export default MenuItem;
