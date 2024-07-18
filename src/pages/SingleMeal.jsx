import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
function SingleMeal() {
  const { user } = useSelector((state) => state.user);
  const { data } = useCollection(
    "Todos",
    ["uid", "==", user.uid],
    ["createdAt"]
  );
  const { title } = useParams();

  let newMeal;
  if (data) {
    newMeal = data.filter((info) => {
      return title == info.title;
    });
  }
  return (
    <div className=" bg-base-300">
      <div className="align-element">
        <h1 className="font-bold text-3xl">Recipe Elements</h1>
        {!newMeal && (
          <span className="loading loading-spinner text-primary"></span>
        )}
        {newMeal &&
          newMeal.map((meal) => {
            return (
              <div key={meal.id} className=" w-full py-5">
                <div className="carousel carousel-center w-full bg-slate-800 rounded-box space-x-4 p-4">
                  <div className="carousel-item">
                    <img src={meal.imageUrl} alt="Pizza" />
                  </div>
                </div>
                <div className="flex flex-col font-semibold gap-2 mb-5">
                  <h1 className=" font-bold text-2xl">{meal.title}</h1>
                  <p>
                    <span className=" font-bold">Ingredients: </span>
                    {meal.ingredients}
                  </p>
                  <p>
                    <span className=" font-bold">Cooking Time: </span>
                    {meal.cookingTime} minutes
                  </p>
                  <p>
                    <span className=" font-bold">Method </span>
                    <br />
                    {meal.description} minutes
                  </p>
                </div>
                <Link to="/" className="btn ">
                  Back
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SingleMeal;
