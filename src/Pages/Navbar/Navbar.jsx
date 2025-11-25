import { Link } from "react-router-dom";


const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/myWork"}>My Work</Link>
      </li>
      {/* <li>
        <Link to={"/about"}>About</Link>
      </li> */}
      <li>
        <Link to={"/resume"}>Resume</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
      
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm fixed font-semibold z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
        <div >
          <Link to={"/"} className="text-xl font-bold">
            Shaharul Islam Sakib
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{menuItems}</ul>
      </div>
      <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
  </div>
    </div>
  );
};

export default Navbar;
