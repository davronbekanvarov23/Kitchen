//redux
import { useSelector } from "react-redux";

//rrd

//custum hooks
import { useCollection } from "../hooks/useCollection";

//components
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";
import { NoRecipe } from "../components";

function Home() {
  const { user } = useSelector((state) => state.user);
  const { data } = useCollection(
    "Todos",
    ["uid", "==", user.uid],
    ["createdAt"]
  );
  return (
    <div
      className=" bg-[url('/public/HomeBg.jpg')] bg-cover min-h-screen
  "
    >
      {" "}
      <div className="align-element">
        <h1 className=" font-bold   text-3xl text-white">Recipes</h1>
        {data && data.length == 0 && <NoRecipe />}

        <TodoList data={data} />
      </div>
    </div>
  );
}

export default Home;
