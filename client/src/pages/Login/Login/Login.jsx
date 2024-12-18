import authentication2 from "../../../assets/others/authentication2.png";
import authentication from "../../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

export default function Login() {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
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
  };
  const handleValidateCaptcha = (e) => {
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
                required
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
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* Captcha */}
            <div className="form-control">
              <LoadCanvasTemplate />
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
        </div>
      </div>
    </div>
  );
}
