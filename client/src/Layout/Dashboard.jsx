import {
  FaAd,
  FaCalendar,
  FaFileContract,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaStreetView,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
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
              My Cart {cart.length}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList></FaList>
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          {/* Main Menu */}
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaList></FaList>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaFileContract></FaFileContract>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
