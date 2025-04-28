import { useState } from "react";
import { Home, Shield, Settings } from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menus = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Anti-Cheat", icon: <Shield size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8">IronWall</h1>
      <nav className="flex flex-col gap-4">
        {menus.map((menu) => (
          <button
            key={menu.name}
            onClick={() => setActive(menu.name)}
            className={`flex items-center gap-3 p-3 rounded-lg ${
              active === menu.name ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            {menu.icon}
            {menu.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}
