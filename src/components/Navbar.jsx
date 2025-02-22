//firebase
import { auth } from "../firebase/fireBaseConfig";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

//redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/userSlice";

//rrd
import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

//components
import { FaBarsStaggered } from "react-icons/fa6";
import { Mode, Weather } from "../components";
import NavLinks from "./NavLinks";

function Navbar() {
  const { amount } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logoutProfile = async () => {
    try {
      await signOut(auth);
      toast.success(`See you soon`);
      dispatch(logout());
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <header className=" bg-base-200">
      <nav className=" align-element navbar">
        <div className=" navbar-start">
          <NavLink to="/" className="hidden lg:btn ">
            <h1 className=" font-extrabold font-serif"> MyKitchen</h1>
          </NavLink>
          {/* DROPDOWN START */}
          <div className="dropdown ml-2 ">
            <label tabIndex="0" className="btn btn-ghost lg:hidden ">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-sm bg-base-100 rounded-box z-[1]  p-2 shadow "
            >
              <NavLinks />
              <li>
                <Mode />
              </li>{" "}
              <li>
                <button onClick={logoutProfile}>Logout</button>
              </li>
            </ul>
          </div>
          {/* DROPDOWN END */}
        </div>

        <div className=" navbar-center hidden lg:flex">
          <ul className=" menu menu-horizontal">
            {" "}
            <NavLinks />
          </ul>
        </div>
        <div className=" navbar-end">
          <Weather />

          <span className="hidden lg:block">
            <Mode />
          </span>
          <div className="avatar ml-5">
            <div className="rounded-full ring ring-offset-2 size-8 object-cover">
              <Link to="/about">
                {" "}
                <img src={user.photoURL} alt="" className="object-cover" />
              </Link>
            </div>
          </div>

          <NavLink
            to="/cart"
            className="indicator btn btn-ghost btn-circle btn-md ml-4"
          >
            <div className=" indicator">
              <span className="indicator-item badge badge-primary badge-sm">
                {amount}
              </span>
              <BsCart3 className="w-6 h-6 " />
            </div>
          </NavLink>

          <button
            onClick={logoutProfile}
            className="hidden lg:btn ml-5 lg:btn-primary  "
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
