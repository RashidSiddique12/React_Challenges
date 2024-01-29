import { useMyContext } from "./Context";

function Title() {
  const {name,  setName, greet } = useMyContext();
  return (
    <div>
      <h1>Title : {name}</h1>
      <input type="text" onChange={(e) => {
        setName(e.target.value)
        greet()
      }} />
    </div>
  );
}

export default Title;
