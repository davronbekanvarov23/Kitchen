import { NoRecipe, PieChart } from "../components";
import { useCollection } from "../hooks/useCollection";
import { useSelector } from "react-redux";

function Statistics() {
  const { user } = useSelector((state) => state.user);
  const { data } = useCollection(
    "Todos",
    ["uid", "==", user.uid],
    ["createdAt"]
  );
  return (
    <div
      className="min-h-screen "
    >
      {data && data.length === 0 && <NoRecipe />}
      {data && data.length !== 0 && (
        <div className="align-element">
          <h1 className=" text-6xl font-bold text-center">Statistics</h1>
          <PieChart datas={data} />
        </div>
      )}
    </div>
  );
}

export default Statistics;
