import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [fix, setFix] = useState(false);

  const navList = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/product"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/cart"}>My Cart</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  });

  return (
    <div
      className={`navbar fixed z-[3] px-2 md:px-10 top-0 left-0 right-0 border-b border-b-slate-300 ${
        fix ? "nav fix-nav" : "nav"
      }`}
    >
      <div className="navbar-start">
        <div>
          <Link to={"/"}>
            <img
              className="w-36"
              src="https://i.ibb.co/3W3c8D3/logo.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-md menu-horizontal px-1 gap-5 font-bold text-[#EEA72B]">
          {navList}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-16 rounded-full">
              <img src="" alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content w-60 mt-2 z-[3] -ml-48 border rounded p-6 shadow text-neutral-content bg-black"
          >
            <img className="rounded-full w-16 h-16 mx-auto" src="" alt="" />
            <h1 className="text-white text-center pt-2 pb-6">{}</h1>
            <li className="lg:hidden">{navList}</li>
            <li>
              <Link className="flex items-center gap-1" to={"/"}>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
