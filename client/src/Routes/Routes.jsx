import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

import Secret from "../Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal user routes
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'history',
        element: <PaymentHistory></PaymentHistory>
      },

      // Admin only Routes
      {
        path: 'adminHome',
        element: <AdminRoute> <AdminHome></AdminHome> </AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute> <AddItems></AddItems>  </AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute> <ManageItems></ManageItems> </AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute> <UpdateItem></UpdateItem> </AdminRoute>,
        loader: ({ params }) => fetch(`https://bistro-boss-server-eight-pearl.vercel.app/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>
      }
    ],
  },
]);

export default router;
