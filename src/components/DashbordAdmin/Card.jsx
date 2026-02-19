export default function Card({ title, value, subtitle, icon: Icon, children }) {
  return (
    <div
      className="
      relative
      bg-white/5 
      backdrop-blur-xl 
      border border-white/10
      rounded-3xl 
      p-6
      shadow-lg
      transition-all duration-300
      hover:bg-white/10
      hover:shadow-2xl
      hover:-translate-y-1
    "
    >
      {/* Icon */}
      {Icon && (
        <div className="absolute top-5 right-5 text-black/30">
          <Icon size={20} />
        </div>
      )}

      <p className="text-sm text-black/60 font-medium tracking-wide">{title}</p>

      <p className="text-3xl font-bold text-black mt-3">{value}</p>

      {subtitle && <p className="text-xs text-black/40 mt-2">{subtitle}</p>}

      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}
