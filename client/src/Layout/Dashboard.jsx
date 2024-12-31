import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart, FaStreetView } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Dashboard Sidebar */}
      <div className="w-64 bg-yellow-400 min-h-screen">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add a review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList></FaList>
              My Booking
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
