import { useTranslation } from 'react-i18next';

export default function Card({ title, value, subtitle, icon: Icon, children }) {
  const { t } = useTranslation();

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

      {/* Title */}
      <p className="text-sm text-black/60 font-medium tracking-wide">
        {t(title)}
      </p>

      {/* Value */}
      <p className="text-3xl font-bold text-black mt-3">{value}</p>

      {/* Subtitle */}
      {subtitle && <p className="text-xs text-black/40 mt-2">{t(subtitle)}</p>}

      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}