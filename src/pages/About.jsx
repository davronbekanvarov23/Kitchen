import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function About() {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div
      className="align-element min-h-[700px] 
    lg:min-h-[483px] "
    >
      <div className="card bg-base-100 w-full max-w-[600px] shadow-xl mt-40 ml-auto mr-auto">
        <div className="flex">
          <img src={user.photoURL} alt="Shoes" className=" max-w-xs rounded" />
          <div className="card-body">
            <h1 className=" card-title capitalize"> {user.displayName}</h1>
            <p>
              <span className=" font-bold">Registered Time: </span>
              {user.metadata.creationTime}
            </p>
            <p>
              {" "}
              <span className=" font-bold">email:</span>
              {user.email}
            </p>
            <p>
              <span className=" font-bold">Last Login: </span>
              {user.metadata.lastSignInTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
