import MovieCard from './MovieCard';
import { useTranslation } from 'react-i18next';

export default function MovieList({ movies, onEdit, onDelete }) {
  const { t } = useTranslation();

  if (!movies.length) {
    return (
      <p className="text-gray-500 text-center py-10 bg-gray-50 rounded-xl shadow-sm">
        {t('movieList.noMovies')}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}