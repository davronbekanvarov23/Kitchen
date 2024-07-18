//redux
import { useSelector } from "react-redux";

//rrd

//custum hooks
import { useCollection } from "../hooks/useCollection";

//components
import TodoList from "../components/TodoList";

function Home() {
  const { user } = useSelector((state) => state.user);
  const { data } = useCollection(
    "Todos",
    ["uid", "==", user.uid],
    ["createdAt"]
  );

  return (
    <div className=" bg-[url('https://i.pinimg.com/736x/e6/7d/af/e67daf68a6e8f6d4a9283cb7d64b098c.jpg')] bg-cover h-screen">
      {" "}
      <div className="align-element">
        <h1 className=" font-bold ml-10 text-3xl text-white">Recipes</h1>
        <TodoList data={data} />
      </div>
    </div>
  );
}

export default Home;
