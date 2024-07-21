import { useSelector } from "react-redux";

function About() {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="card bg-base-100 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl shadow-xl p-6 mx-4">
      <div className="flex flex-col sm:flex-row items-center">
        <img src={user.photoURL} alt="Foydalanuvchi fotosi" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-4 sm:mb-0 sm:mr-4" />
        <div className="card-body">
          <h1 className="text-xl font-bold capitalize mb-2">{user.displayName}</h1>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">Registered Time: </span>
            {user.metadata.creationTime}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">Email: </span>
            {user.email}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Last Login: </span>
            {user.metadata.lastSignInTime}
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default About;
