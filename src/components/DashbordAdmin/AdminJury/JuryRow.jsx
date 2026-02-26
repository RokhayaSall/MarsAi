import { useTranslation } from 'react-i18next';
import { Edit, Trash2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function JuryRow({ jury, onEdit, onDelete }) {
  const { t } = useTranslation();

  const handleDelete = () => {
    const ok = window.confirm(
      t('juryRow.confirmDelete', { firstname: jury.firstname, lastname: jury.lastname })
    );
    if (ok) {
      onDelete(jury.id);
    }
  };

  return (
    <div
      className="
        flex justify-between items-center
        bg-white
        border border-slate-200
        p-5
        rounded-2xl
        shadow-sm
        transition-all duration-300
        hover:shadow-md
        hover:-translate-y-0.5
      "
    >
      {/* Profil + Infos */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div
          className="
            w-11 h-11
            rounded-full
            bg-blue-500/10
            text-blue-600
            flex items-center justify-center
            font-semibold
            text-sm
            border border-blue-500/20
          "
        >
          {jury.firstname.charAt(0).toUpperCase()}
        </div>

        {/* Texte */}
        <NavLink
          to={`/dashboard/jury/${jury.id}`}
          className="text-decoration-none"
        >
          <div className="flex flex-col">
            <p className="font-semibold text-slate-800 text-lg">
              {jury.firstname} {jury.lastname}
            </p>
            <p className="text-sm text-slate-500">{jury.email}</p>
          </div>
        </NavLink>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={() => onEdit(jury)}
          className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition"
        >
          <Edit size={16} /> {t('juryRow.edit')}
        </button>

        <button
          onClick={handleDelete}
          className="flex items-center gap-1 px-3 py-1 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition"
        >
          <Trash2 size={16} /> {t('juryRow.delete')}
        </button>
      </div>
    </div>
  );
}