import toast from "react-hot-toast";
import { db } from "../firebase/fireBaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

function TodoList({ data }) {
  const daleteBtn = (id) => {
    deleteDoc(doc(db, "Todos", id))
      .then(() => {
        toast.success(" Meal  Deleted ");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4">
      {!data && <span className="loading loading-spinner text-primary"></span>}

      {data &&
        data.map((item) => {
          return (
            <>
              <div
                className="card bg-base-300 shadow-xl max-w-xs rounded-t-none"
                key={item.id}
              >
                <button
                  className=" absolute right-3 top-2"
                  onClick={() => daleteBtn(item.id)}
                >
                  <IoMdCloseCircleOutline size={25} />
                </button>
                <Link
                  to={`/Meal/${item.title}`}
                  className="p-4 flex gap-3 flex-col"
                >
                  <h1 className=" text-2xl font-bold capitalize">
                    {item.title}
                  </h1>
                  <p>{item.description.substring(0, 100)}...</p>

                  <p className=" ml-auto rounded-lg bg-pink-400   font-bold px-2 ">
                    ⏱ {item.cookingTime} minutes
                  </p>
                </Link>
                <img
                  src={item.imageUrl}
                  alt=""
                  width={320}
                  height={169}
                  className=" rounded-b-lg mt-5"
                />{" "}
              </div>
            </>
          );
        })}
    </div>
  );
}

export default TodoList;
