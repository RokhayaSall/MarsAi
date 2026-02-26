import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../../components/DashbordAdmin/Sidebar';
import TopScoreCard from '../../components/DashbordAdmin/AdminMoviesResult/TopScoreCard';
import SearchBar from '../../components/DashbordAdmin/AdminMoviesResult/SearchBar';
import LeaderboardTable from '../../components/DashbordAdmin/AdminMoviesResult/LeaderBoardTable';
import { apiFetch } from '../../services/api';

export default function MovieResults() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await apiFetch('/api/admin/movies-result');
        const safeData = result.data.map(movie => ({
          ...movie,
          score: movie.score != null ? Number(movie.score) : 0,
        }));
        setMovies(safeData);
      } catch (err) {
        console.error('Erreur fetch movies:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500 animate-pulse">{t('adminMoviesResult.loading')}</p>
      </div>
    );
  }

  const filteredMovies = movies.filter(movie =>
    movie.original_title?.toLowerCase().includes(search.toLowerCase())
  );
  const sortedMovies = filteredMovies.sort((a, b) => b.score - a.score);
  const topMovie = sortedMovies[0] || null;
  const rankedMovies = sortedMovies.map((movie, index) => ({
    ...movie,
    rank: index + 1,
  }));
  const totalPages = Math.ceil(rankedMovies.length / moviesPerPage);
  const currentMovies = rankedMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 max-w-7xl mx-auto px-6 py-10 space-y-10">
        {topMovie ? (
          <TopScoreCard
            score={topMovie.score.toFixed(1)}
            title={topMovie.original_title}
            author={topMovie.author || t('adminMoviesResult.authorUnknown')}
          />
        ) : (
          <div className="text-center text-gray-400">{t('adminMoviesResult.noMovies')}</div>
        )}

        <SearchBar search={search} setSearch={setSearch} />

        <LeaderboardTable movies={currentMovies} />

        {totalPages > 1 && (
          <div className="mt-6 flex justify-center items-center gap-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className={`px-4 py-2 rounded-full border ${
                currentPage === 1
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              }`}
            >
              ←
            </button>

            <span className="font-medium">
              {t('adminMoviesResult.page', { currentPage, totalPages })}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className={`px-4 py-2 rounded-full border ${
                currentPage === totalPages
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              }`}
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}