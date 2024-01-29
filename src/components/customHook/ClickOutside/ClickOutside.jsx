import { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";

function ClickOutside() {
  const [show, setShow] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setShow(false));
  return (
    <div ref={ref}>
      {show ? (
        <h1>
          THIS IS THE BOX <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          consequuntur iure iusto amet architecto natus.
        </h1>
      ) : (
        <button onClick={()=>setShow(true)}>Open</button>
      )}
    </div>
  );
}

export default ClickOutside;
