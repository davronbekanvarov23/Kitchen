import { PieChart } from "../components";
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
    <div className="align-element">
      <h1 className=" text-6xl font-bold">Statistics</h1>
      <PieChart datas={data} />
    </div>
  );
}

export default Statistics;
