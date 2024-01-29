
import { useMyContext } from "./Context";
import Header from "./Header";

function Home() {
  const { name} = useMyContext();
  return (
    <div>
      <h1>Home</h1>
      <h3>{name}</h3>
      <Header />
    </div>
  );
}

export default Home;
