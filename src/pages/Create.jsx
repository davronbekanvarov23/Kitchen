// import Pagination from "../components/Pagination";
//rrd
import { useActionData, useNavigate } from "react-router-dom";

//react
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

//components
import { AddTodo } from "../components";

//firebase
import { db } from "../firebase/fireBaseConfig";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";

//action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let description = formData.get("description");
  let completed = formData.get("completed");
  let ingredients = formData.get("ingredients");
  let cookingTime = formData.get("cookingTime");
  let category = formData.get("category");
  let imageUrl = formData.get("imageUrl");
  let price = formData.get("price");
  return {
    title,
    completed,
    description,
    cookingTime,
    ingredients,
    imageUrl,
    category,
    price,
  };
};

function Create() {
  const userData = useActionData();
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const actionData = useActionData();
  useEffect(() => {
    if (actionData) navigate("/");
  }, [actionData]);

  // const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

  useEffect(() => {
    if (userData) {
      const newTodo = {
        title: userData.title,
        description: userData.description,
        completed: userData.completed == "on" ? true : false,
        cookingTime: userData.cookingTime,
        ingredients: userData.ingredients,
        imageUrl: userData.imageUrl,
        category: userData.category,
        price: userData.price,
        uid: user.uid,
        // createdAt: serverTimestamp(),
      };

      addDoc(collection(db, "Todos"), newTodo)
        .then(() => {
          toast.success("Added new recipe succesfully:)");
        })
        .catch((error) => toast.error(error.message));
    }
  }, [userData]);

  return (
    <div className="align-element min-h-screen">
      <AddTodo />

      {/* <Pagination items={items} itemsPerPage={9}/> */}
    </div>
  );
}

export default Create;
