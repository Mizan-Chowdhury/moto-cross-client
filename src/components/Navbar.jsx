import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../routersAndRoot/AuthProvider";
import Swal from "sweetalert2";

const avater = "https://i.ibb.co/sPb5G3G/585e4bcdcb11b227491c3396-1.png";

const Navbar = () => {
  const [fix, setFix] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    if (user) {
      Swal.fire("", "You have successfully logged out.", "success");
    }
    logOut()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
      className={`navbar fixed z-[3] px-3 md:px-10 top-0 left-0 right-0 ${
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
      {user ? (
        <div className="navbar-end flex items-center gap-3">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-16 rounded-full">
                <img src={user?.photoURL ? user.photoURL : avater} alt="" />
              </div>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content w-60 mt-2 z-[3] -ml-48 border rounded p-6 shadow text-neutral-content bg-black"
            >
              <div>
              <img
                  className="rounded-full w-16 h-16 mx-auto"
                  src={user?.photoURL ? user.photoURL : avater}
                  alt=""
                />
                <h1 className="text-white text-xl text-center pt-2 pb-6">
                  {user?.displayName}
                </h1>
              </div>
              <ul className="text-lg">
                <li className="lg:hidden">{navList}</li>
                <li>
                  <Link
                    onClick={handleLogOut}
                    className="flex items-center gap-1"
                    to={"/"}
                  >
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <NavLink className={"py-1 px-4 font-bold bg-[#EEA72B]"} to={"/login"}>
            Login
          </NavLink>
        </div>
      )}
    </div>
  );
};

//
export default Navbar;
