import { Edit, Trash2, Youtube } from 'lucide-react';

export default function MovieCard({ movie, onEdit, onDelete }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6 w-full sm:w-80 mx-auto flex flex-col justify-between transition hover:shadow-md">
      {/* Titre et infos */}
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
          {movie.original_title}
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">
          Titre anglais: {movie.english_title}
        </p>
        <p className="text-gray-500 text-sm sm:text-base">
          Durée: {movie.duration} min
        </p>
        <p className="text-gray-500 text-sm sm:text-base">
          Langue: {movie.language}
        </p>
        <p className="text-gray-500 text-sm sm:text-base mt-1 line-clamp-3">
          {movie.original_synopsis}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto justify-center sm:justify-start">
        {movie.youtube_url && (
          <a
            href={movie.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 text-sm sm:text-base transition"
          >
            <Youtube size={16} /> Voir
          </a>
        )}

        <button
          onClick={() => onEdit(movie)}
          className="flex items-center gap-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 text-sm sm:text-base transition"
        >
          <Edit size={16} /> Éditer
        </button>

        <button
          onClick={() => onDelete(movie.id)}
          className="flex items-center gap-1 px-3 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 text-sm sm:text-base transition"
        >
          <Trash2 size={16} /> Supprimer
        </button>
      </div>
    </div>
  );
}
