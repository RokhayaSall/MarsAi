import { Edit, Trash2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function JuryRow({ jury, onEdit, onDelete }) {
  const handleDelete = () => {
    if (
      window.confirm(`Supprimer le jury ${jury.firstname} ${jury.lastname} ?`)
    ) {
      onDelete(jury.id);
    }
  };

  return (
    <div
      className="
        flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4
        bg-white border border-slate-200 p-5 rounded-2xl shadow-sm
        transition-all duration-300 hover:shadow-md hover:-translate-y-0.5
      "
    >
      {/* Profil + Infos */}
      <div className="flex items-start sm:items-center gap-4 w-full">
        {/* Avatar */}
        <div
          className="
            w-11 h-11 rounded-full bg-blue-500/10 text-blue-600
            flex items-center justify-center font-semibold text-sm
            border border-blue-500/20 flex-shrink-0
          "
        >
          {jury.firstname.charAt(0).toUpperCase()}
        </div>

        {/* Texte */}
        <NavLink to={`/dashboard/jury/${jury.id}`} className="flex-1 min-w-0">
          <div className="flex flex-col">
            <p className="font-semibold text-slate-800 text-lg truncate">
              {jury.firstname} {jury.lastname}
            </p>
            <p className="text-sm text-slate-500 truncate">{jury.email}</p>
          </div>
        </NavLink>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto mt-2 sm:mt-0">
        <button
          onClick={() => onEdit(jury)}
          className="flex items-center justify-center gap-1 w-full sm:w-auto px-3 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition"
        >
          <Edit size={16} /> Éditer
        </button>

        <button
          onClick={handleDelete}
          className="flex items-center justify-center gap-1 w-full sm:w-auto px-3 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition"
        >
          <Trash2 size={16} /> Supprimer
        </button>
      </div>
    </div>
  );
}
