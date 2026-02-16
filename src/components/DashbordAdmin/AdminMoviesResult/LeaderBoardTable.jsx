import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function LeaderboardTable({ movies }) {
  // ⚡ Initialisation du state avec une fonction lazy pour calculer les fallback scores
  const [moviesWithScore] = useState(() =>
    movies.map(movie => ({
      ...movie,
      fallbackScore: movie.score ?? +(9.2 + Math.random() * 0.2).toFixed(1),
    }))
  );

  return (
    <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500">Miniature</th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500">Rang</th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500">Titre</th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500">Auteur</th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500">Pays</th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500">Score</th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500">Statut</th>
            <th scope="col" className="px-4 py-2" />
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {moviesWithScore.map((movie, index) => (
            <tr key={movie.id} className="hover:bg-gray-50 transition cursor-pointer">
              <td className="px-4 py-2">
                <img
                  src={movie.cover_image || '/placeholder.png'}
                  alt={movie.original_title}
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className="px-4 py-2 font-medium">{index + 1}</td>
              <td className="px-4 py-2">{movie.original_title}</td>
              <td className="px-4 py-2">{movie.author}</td>
              <td className="px-4 py-2">{movie.country}</td>
              <td className="px-4 py-2 font-semibold">{movie.fallbackScore.toFixed(1)}</td>
              <td className="px-4 py-2">
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
                  {movie.status || 'EN COURS'}
                </span>
              </td>
              <td className="px-4 py-2 text-gray-400 hover:text-gray-700">
                <ArrowRight size={18} aria-hidden="true" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
