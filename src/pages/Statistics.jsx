import { BarChart, NoRecipe, PieChart } from "../components";
import GlobalLoading from "../components/GlobalLoading";
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
    <div className="min-h-screen align-element ">
      {data && data.length === 0 && <NoRecipe />}
      {!data && <GlobalLoading />}

      {data && data.length !== 0 && (
        <div className="">
          <h1 className=" text-6xl font-bold text-center">Statistics</h1>
          <PieChart datas={data} />
          <BarChart datas={data} />
        </div>
      )}
    </div>
  );
}

export default Statistics;
