import toast from "react-hot-toast";
import { db } from "../firebase/fireBaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TodoList({ data }) {
  const daleteBtn = (id) => {
    deleteDoc(doc(db, "Todos", id))
      .then(() => {
        toast.success("Deleted ");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  // const [mode, setChange] = useState(localStorage.getItem("theme"));
  // useEffect(() => {
  //   setChange()
  // }, [mode]);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4">
      {!data && <span className="loading loading-spinner text-primary"></span>}

      {data &&
        data.map((item) => {
          return (
            <>
              <Link
                className="card bg-base-300 shadow-xl max-w-xs rounded-t-none"
                key={item.id}
              >
                <button
                  className=" absolute right-3 top-2"
                  onClick={() => daleteBtn(item.id)}
                >
                  <IoMdCloseCircleOutline size={25} />
                </button>
                <div className="p-4 flex gap-3 flex-col">
                  <h1 className=" text-2xl font-bold">{item.title}</h1>
                  <p>{item.description.substring(0, 100)}...</p>

                  <p className=" ml-auto rounded-lg bg-pink-500   font-bold px-2 ">
                    ⏱ {item.cookingTime} minutes
                  </p>
                </div>
                <img
                  src={item.imageUrl}
                  alt=""
                  width={320}
                  height={169}
                  className=" rounded-b-lg mt-5"
                />{" "}
              </Link>
            </>
          );
        })}
    </div>
  );
}

export default TodoList;
