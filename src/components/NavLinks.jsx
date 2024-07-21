import { NavLink } from "react-router-dom";
const links = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "Create", path: "/create" },
  { id: 3, text: "About", path: "/about" },
  { id: 4, text: "Statistics", path: "/statistics" },
];
function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const { id, text, path } = link;
        return (
          <li key={id}>
            {" "}
            <NavLink to={path} className=" capitalize ">
              {" "}
              {text}{" "}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
