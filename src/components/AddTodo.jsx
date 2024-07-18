import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import { useEffect, useRef, useState } from "react";

function AddTodo() {
  // const [Ingredients, setIngredients] = useState([]);
  // const ref = useRef(null);
  // const addedIngredient = () => {
  //   setIngredients((prevObj) => [...prevObj, ref.current.value]);
  // };

  // useEffect(() => {
  //   ref.current.value = "";
  // }, [Ingredients]);

  return (
    <div className="card bg-base-100 max-w-[900px] shadow-xl p-8 align-element">
      <Form method="post" className="flex flex-col items-center gap-5">
        <h2 className="text-3xl font-semibold">Recipes</h2>
        <FormInput
          name="title"
          type="text"
          label="Title:"
          placeholder="example:Palov"
        />
        <FormInput
          name="cookingTime"
          type="number"
          label="Cooking Time:"
          placeholder="example:60"
        />
        {/* <div>
          <input
            name="ingredients"
            type="text"
            className="input input-bordered"
            label="Ingredients"
            placeholder="example:Rice"
            ref={ref}
          />
          <p className="btn" onClick={addedIngredient}>
            add
          </p>
          <div id="Ingredients">
            {Ingredients &&
              Ingredients.map((ing, index) => {
                return <li key={index}>{ing}</li>;
              })}
          </div>
        </div> */}
        <FormInput
          name="ingredients"
          type="text"
          label="Ingradients:"
          placeholder="rice,onion,meat..."
        />
        <FormInput
          name="imageUrl"
          type="url"
          label="Image Url:"
          placeholder="example:htpps://example.com"
        />
        <FormInput
          name="description"
          type="text"
          label="Description:"
          placeholder="type here"
        />
        <button className="btn btn-primary btn-block max-w-xs" > Add</button>
      </Form>
    </div>
  );
}

export default AddTodo;
