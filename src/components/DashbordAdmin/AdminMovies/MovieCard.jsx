import { Edit, Trash2, Youtube } from 'lucide-react';

export default function MovieCard({ movie, onEdit, onDelete }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-900">
          {movie.original_title}
        </h3>
        <p className="text-gray-500 mt-1">
          Titre anglais: {movie.english_title}
        </p>
        <p className="text-gray-500 mt-1">Durée: {movie.duration} min</p>
        <p className="text-gray-500 mt-1">Langue: {movie.language}</p>
        <p className="text-gray-500 mt-1 line-clamp-2">
          {movie.original_synopsis}
        </p>
      </div>

      <div className="flex gap-2 mt-4 flex-wrap">
        {movie.youtube_url && (
          <a
            href={movie.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition"
          >
            <Youtube size={16} /> Voir
          </a>
        )}

        <button
          onClick={() => onEdit(movie)}
          className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition"
        >
          <Edit size={16} /> Éditer
        </button>

        <button
          onClick={() => onDelete(movie.id)}
          className="flex items-center gap-1 px-3 py-1 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition"
        >
          <Trash2 size={16} /> Supprimer
        </button>
      </div>
    </div>
  );
}
