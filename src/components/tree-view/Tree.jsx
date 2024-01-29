import menus from "./data";
import MenuList from "./MenuList";

function Tree() {
  return (
    <div>
      <MenuList list={menus} />
    </div>
  );
}

export default Tree;
