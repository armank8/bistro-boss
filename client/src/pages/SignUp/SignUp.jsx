import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import authBg from "../../assets/others/authentication.png";
import authentication2 from "../../assets/others/authentication2.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function SignUp() {
  const [showPassword,setShowPassword] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  // Old style
  //   const handleSignUp = (event) => {
  //     event.preventDefault();
  //     const form = event.target;
  //     const name = form.name.value;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     const user = { name, email, password };
  //     console.log(user);
  //   };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="hero-content">
        {/* Left */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="your name"
                className="input input-bordered"
              />
              {errors.name &&
                <span className="text-red-600">Name is Required </span>}
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email &&
                <span className="text-red-600">Email is Required </span>}
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className=" ">
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12
                })}
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                className="input input-bordered w-10/12"
              />
              {/* Show/Hide Toggler */}
              <button onClick={()=>setShowPassword(!showPassword)} className="bg-slate-300 py-3 px-1 rounded font-bold">               
              {showPassword ? 'Hide' : 'Show'} </button>
              </div>
              {errors.password?.type === 'required'   &&
                <span className="text-red-600">password is Required </span>}
              {errors.password?.type === 'minLength'   &&
                <span className="text-red-600">Password must be at least 6 characters</span>}
              {errors.password?.type === 'maxLength'   &&
                <span className="text-red-600">Password must be less than 12 characters </span>}
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
              {" "}<small>Or Sign Up with</small>
            </p>
            <p className="flex justify-center space-x-6 py-2">
              <FcGoogle />
              <FaFacebook />
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
