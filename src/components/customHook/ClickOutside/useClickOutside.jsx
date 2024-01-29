import { useEffect } from "react";

function useClickOutside(ref, handler) {
  useEffect(() => {
    const listner = (e) => {
        console.log(ref.current.contains(e.target))
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };

    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    };
  }, [ref, handler]);
}

export default useClickOutside;
