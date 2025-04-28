import { Home, LayoutDashboard, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-gray-900 text-gray-200 w-64 min-h-screen flex flex-col p-4">
      <div className="text-2xl font-bold mb-8">
        <Link to="/">IronWall</Link>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center space-x-2 hover:text-white">
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="flex items-center space-x-2 hover:text-white">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
      </nav>

      <button className="mt-auto flex items-center space-x-2 text-red-400 hover:text-red-600">
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
}
