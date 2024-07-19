import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import { useState } from "react";
import { addProduct } from "../app/productSlice";
import { formatPrice } from "../utils";
function SingleMeal() {
  const { user } = useSelector((state) => state.user);
  const { data } = useCollection(
    "Todos",
    ["uid", "==", user.uid]
    // ["createdAt"]
  );
  const { title } = useParams();

  let newMeal = [];
  if (data) {
    newMeal = data.filter((info) => {
      return title == info.title;
    });
  }
  let singleMeal = newMeal[0];
  console.log(singleMeal);
  const dispatch = useDispatch();

  const [productAmount, setProductAmount] = useState(1);

  const setAmount = (type) => {
    if (type == "decrease") {
      setProductAmount((prev) => prev - 1);
    } else if (type == "increase") {
      setProductAmount((prev) => prev + 1);
    }
  };

  const addToBag = () => {
    const newProduct = {
      ...singleMeal,
      amount: productAmount,
    };
    dispatch(addProduct(newProduct));
  };

  return (
    <div className=" bg-base-300">
      <div className="align-element">
        <h1 className="font-bold text-3xl">Recipe Elements</h1>
        {!singleMeal && (
          <span className="loading loading-spinner text-primary"></span>
        )}
        {singleMeal && (
          <div className=" w-full py-5">
            <div className="carousel carousel-center w-full bg-slate-800 rounded-box space-x-4 p-4">
              <div className="carousel-item">
                <img src={singleMeal.imageUrl} alt="Pizza" />
              </div>
            </div>
            <div className="flex flex-col font-semibold gap-2 mb-5">
              <h1 className=" font-bold text-2xl">{singleMeal.title}</h1>
              <p>
                <span className=" font-bold">Ingredients: </span>
                {singleMeal.ingredients}
              </p>
              <p>
                <span className=" font-bold">Cooking Time: </span>
                {singleMeal.cookingTime} minutes
              </p>
              <p>
                <span className=" font-bold">Nation: </span>

                {singleMeal.category}
              </p>

              <p>
                <span className=" font-bold">Method </span>
                <br />
                {singleMeal.description}
              </p>
            </div>

            <div className="  flex items-start justify-center flex-col w-full gap-2">
              <div className="flex  items-center gap-2">
                <h1 className=" text-xl font-medium ">Amount:</h1>{" "}
                <button
                  onClick={() => setAmount("increase")}
                  className="btn btn-secondary"
                >
                  +
                </button>
                <h3 className="w-4">{productAmount}</h3>
                <button
                  onClick={() => setAmount("decrease")}
                  className="btn btn-secondary"
                  disabled={productAmount == 1 ? true : false}
                >
                  -
                </button>
                <p className=" ml-10">
                  <span className=" font-bold">Price: </span>

                  {formatPrice(singleMeal.price * productAmount)}
                </p>
              </div>

              <Link to='/cart' onClick={addToBag} className="btn btn-primary ">
                Add to Bag
              </Link>
              <Link to="/" className="btn ml-auto  btn-error">
                Back
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleMeal;
