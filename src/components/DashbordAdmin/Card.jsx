export default function Card({ title, value, subtitle, children }) {
  return (
    <div className="bg-white rounded-lg shadow p-5">
      <p className="text-sm text-gray-500">{title}</p>

      <p className="text-3xl font-bold mt-1">{value}</p>

      {subtitle && <p className="text-xs text-blue-400 mt-1">{subtitle}</p>}

      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
