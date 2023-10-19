import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../routersAndRoot/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, password, email, photo);

    if (!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
      setError(
        "Error: Your password needs to be longer and contain a capital letter and special character."
      );
    } else {
      createUser(email, password)
        .then((res) => {
          console.log(res.user);
            updateUserProfile(name, photo)
            .then(res=> {
                console.log(res);
                Swal.fire(
                    'Congratulations!',
                    'You have successfully registered.',
                    'success'
                  )
                  setError('')
                  form.reset();
            })
            .catch(err=> {
                setError(err.message);
            })
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
    }
  };
  return (
    <div>
      <div className="">
        <div className="card max-w-md mx-auto shadow-2xl bg-base-100 mt-24">
          <h1 className="text-5xl font-bold text-center mt-5 text-[#EEA72B]">
            Register now!
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md font-bold">Full name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md font-bold">Photo URL</span>
              </label>
              <input
                type="photo"
                name="photo"
                placeholder="Your photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md font-bold">Email</span>
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
                <span className="label-text text-md font-bold">Password</span>
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
            <div className="form-control">
              <button className="btn bg-[#EEA72B]">Register</button>
            </div>
            <p className=" text-center">
              Already have an account? Please{" "}
              <Link
                className="text-[#EEA72B] font-bold underline"
                to={"/login"}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
