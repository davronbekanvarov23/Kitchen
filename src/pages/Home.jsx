//redux
import { useSelector } from "react-redux";

//rrd

//custum hooks
import { useCollection } from "../hooks/useCollection";

//components
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useSelector((state) => state.user);
  const { data } = useCollection(
    "Todos",
    ["uid", "==", user.uid],
    ["createdAt"]
  );
  return (
    <div
      className=" bg-[url('/public/HomeBg.jpg')] bg-cover min-h-[700px] 
  lg:min-h-[483px]
  "
    >
      {" "}
      <div className="align-element">
        <h1 className=" font-bold   text-3xl text-white">Recipes</h1>
        {data && data.length == 0 && (
          <div className=" ml-auto mr-auto text-center p-4 card bg-base-300  shadow-xl max-w-xs mt-20 ">
            <h1 className=" text-xl font-semibold  ">No Recipe </h1>
            <p className=" font-mono font-semibold">
              Please, add to your Recipe
            </p>
            <Link
              className="btn btn-success max-w-32 ml-auto mr-auto mt-5 "
              to="/create"
            >
              {" "}
              Add Recipe
            </Link>
          </div>
        )}

        <TodoList data={data} />
      </div>
    </div>
  );
}

export default Home;
