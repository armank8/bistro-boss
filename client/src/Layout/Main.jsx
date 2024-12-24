import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  // console.log(location);
  const trackLocation = location.pathname.includes("login") || location.pathname.includes("signup");
  // console.log(trackLocation);
  return (
    <div>
      {trackLocation || <Navbar></Navbar>}
      <Outlet></Outlet>
      {trackLocation || <Footer></Footer>}
    </div>
  );
};

export default Main;
