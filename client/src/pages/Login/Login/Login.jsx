import authentication2 from "../../../assets/others/authentication2.png";
import authentication from "../../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const { signIn } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;
    const captcha = form.captcha.value;
    console.log(email, pass, captcha);
    signIn(email, pass).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div
      className="hero_container hero min-h-screen "
      style={{ backgroundImage: `url(${authentication}) ` }}
    >
      <div className="flex flex-wrap md:flex-nowrap justify-center">
        {/* Left */}
        <div className="text-center lg:flex justify-center">
          <img className="" src={authentication2} alt="" />
        </div>
        {/* Right */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login</h1>
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
              />
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* Captcha */}
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                name="captcha"
                type="text"
                placeholder="Enter the Captcha above"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-neutral btn-xs mt-5"
              >
                Validate
              </button>
            </div>
            {/*submit btn  */}
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-primary"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
          {/* Bottom Options */}
          <div className="text-center">
            <Link to="/signup">
              <p>
                <small className="text-yellow-600">
                  New here? Create a new Account
                </small>
              </p>
            </Link>
            <p>
              {" "}
              <small>Or Sign in with</small>
            </p>
            <p className="flex justify-center space-x-6 pt-2">
              <FcGoogle />
              <FaFacebook></FaFacebook>
              <FaGithub />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
