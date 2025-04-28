export default function Topbar() {
  return (
    <header className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-6 shadow">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <span>Welcome, Admin</span>
        <img
          src="https://via.placeholder.com/30"
          alt="profile"
          className="rounded-full w-8 h-8"
        />
      </div>
    </header>
  );
}
