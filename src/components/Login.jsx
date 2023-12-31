import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../routersAndRoot/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { googleSignIn } = useContext(AuthContext);
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire(
          "Congratulations!",
          "You have successfully logged.",
          "success"
        );
        
              // form.reset();
              setError("");
              navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        Swal.fire(
          "Congratulations!",
          "You have successfully logged.",
          "success"
        );
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card shadow-2xl bg-base-100 max-w-md mx-auto my-32">
      <h1 className="text-5xl font-bold text-center mt-5 text-[#EEA72B]">
        Login now!
      </h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />
        </div>
        <p className="text-red-600">{error}</p>
        <div className="form-control mt-6">
          <button className="btn bg-[#EEA72B]">Login</button>
        </div>
        <p className="border-b-2 pb-5 text-center">
          Do not have an account? Please{" "}
          <Link className="text-[#EEA72B] font-bold underline" to={"/register"}>
            Register
          </Link>
        </p>

        <a onClick={handleGoogleLogin} className="btn mt-5" href="">
          <FaGoogle></FaGoogle>
          Login With Google
        </a>
      </form>
    </div>
  );
};

export default Login;
