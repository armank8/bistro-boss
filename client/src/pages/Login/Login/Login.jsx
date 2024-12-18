import authentication2 from "../../../assets/others/authentication2.png";
import authentication from "../../../assets/others/authentication.png";


export default function Login() {
  return (
    <div
      className="hero_container hero min-h-screen "
      style={{ backgroundImage: `url(${authentication}) ` }}
    >
      <div className="hero-content">
        {/* Left */}
        <div className="text-center flex justify-center">
          <img className="" src={authentication2} alt="" />
        </div>
        {/* Right */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
