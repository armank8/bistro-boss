import { Link } from "react-router-dom";
import authBg from "../../assets/others/authentication.png";
import authentication2 from "../../assets/others/authentication2.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function SignUp() {
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
  };
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="hero-content">
        {/* Left */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="your name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {/* Button */}
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          {/* Bottom Options */}
          <div className="text-center">
            <Link to="/login">
              <p>
                <small className="text-yellow-600">
                  Already Registered ? Go to Login
                </small>
              </p>
            </Link>
            <p>
              {" "}
              <small>Or Sign Up with</small>
            </p>
            <p className="flex justify-center space-x-6 py-2">
              <FcGoogle />
              <FaFacebook></FaFacebook>
              <FaGithub />
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="text-center lg:text-left">
          <img src={authentication2} alt="" />
        </div>
      </div>
    </div>
  );
}
