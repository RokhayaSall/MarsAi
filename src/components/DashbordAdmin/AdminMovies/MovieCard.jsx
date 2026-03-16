export default function MovieCard({
  movie,
  onEdit,
  onDelete,
  onToggleVisibility,
  isListView,
}) {
  return (
    <div
      className={`flex items-center p-5 transition hover:bg-gray-50 ${
        isListView ? 'flex-row justify-between' : 'flex-col gap-4'
      }`}
    >
      {/* Colonne Titre */}
      <div className="flex-1 min-w-[500px]">
        <p className="font-semibold text-gray-900 text-lg">
          {movie.original_title}
        </p>
        <p className="text-gray-500 text-sm">{movie.english_title}</p>
      </div>

      {/* Colonne Durée / Langue */}
      <div className="flex-1 min-w-[300px] text-gray-500 text-sm">
        {movie.duration} min / {movie.language}
      </div>

      {/* Actions */}
      <div className="w-80 flex gap-4 justify-center">
        <button
          onClick={() => onEdit(movie)}
          className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md font-medium"
        >
          Éditer
        </button>
        <button
          onClick={() => onDelete(movie.id)}
          className="px-4 py-2 bg-red-50 text-red-600 rounded-md font-medium"
        >
          Supprimer
        </button>
        <button
          onClick={() => onToggleVisibility(movie.id)}
          className={`px-4 py-2 rounded-md font-medium ${
            movie.is_visible
              ? 'bg-green-50 text-green-600'
              : 'bg-gray-50 text-gray-600'
          }`}
        >
          {movie.is_visible ? 'Visible' : 'Masqué'}
        </button>
      </div>
    </div>
  );
}
