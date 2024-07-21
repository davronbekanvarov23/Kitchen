import { Link } from "react-router-dom";

function NoRecipe() {
  return (
    <div className=" ml-auto mr-auto text-center p-4 card bg-base-300 bg-opacity-80  shadow-xl max-w-xs mt-20 ">
      <h1 className=" text-xl font-semibold  ">No Recipe </h1>
      <p className=" font-mono font-semibold">Please, add to your Recipe</p>
      <Link
        className="btn btn-success max-w-32 ml-auto mr-auto mt-5 "
        to="/create"
      >
        {" "}
        Add Recipe
      </Link>
    </div>
  );
}

export default NoRecipe;
