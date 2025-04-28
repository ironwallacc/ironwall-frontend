export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-white text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
