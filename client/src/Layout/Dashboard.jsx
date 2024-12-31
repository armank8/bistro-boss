import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-slate-500 flex">
      <div className="w-64 bg-yellow-400">
        <ul>
            <li>My Cart</li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
