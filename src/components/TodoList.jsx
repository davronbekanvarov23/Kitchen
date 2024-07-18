import toast from "react-hot-toast";
import { db } from "../firebase/fireBaseConfig";
import { doc, deleteDoc,  } from "firebase/firestore";

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

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4">
      {" "}
      {!data && <span className="loading loading-spinner text-primary"></span>}
      {data &&
        data.map((item) => {
          console.log(item);
          return (
            <div
              className="card bg-base-100 p-4 shadow-xl max-w-xs "
              key={item.id}
            >
              <h1 className=" text-2xl">
                <span className=" font-bold">Title:</span>
                {item.title}
              </h1>
              <p>
                <span className=" font-bold">Description:</span>
                {item.description}
              </p>
              <div className="flex gap-5">
                {" "}
                <button
                  className="btn btn-secondary max-w-[30%] "
                  onClick={() => daleteBtn(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
