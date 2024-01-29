import useWindowResize from "./useWindowResize"


function WindowResize() {
    const windowSize = useWindowResize();
    const {width, height} = windowSize;
  return (
    <div>
      <h2>Width : {width}</h2>
      <h2>Height : {height}</h2>
    </div>
  )
}

export default WindowResize
