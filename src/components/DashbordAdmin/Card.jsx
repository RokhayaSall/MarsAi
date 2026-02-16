

export default function Card({ title, value, subtitle, icon: Icon, children }) {
  return (
    <div
      className="relative bg-white border border-gray-200 rounded-xl p-6 
    shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      {/* Icon (optionnelle) */}
      {Icon && (
        <div className="absolute top-5 right-5 text-gray-300">
          <Icon size={18} />
        </div>
      )}

      <p className="text-sm text-gray-500 font-medium tracking-wide">{title}</p>

      <p className="text-3xl font-semibold text-gray-900 mt-2">{value}</p>

      {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
