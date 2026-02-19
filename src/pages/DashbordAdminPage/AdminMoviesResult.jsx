// AdminMoviesResult.jsx
import { useState, useEffect } from 'react';
import Sidebar from '../../components/DashbordAdmin/Sidebar';
import TopScoreCard from '../../components/DashbordAdmin/AdminMoviesResult/TopScoreCard';
import SearchBar from '../../components/DashbordAdmin/AdminMoviesResult/SearchBar';
import LeaderboardTable from '../../components/DashbordAdmin/AdminMoviesResult/LeaderBoardTable';

export default function MovieResults() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/admin/movies-result`
        );
        const result = await res.json();

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
        <p className="text-gray-500 animate-pulse">Chargement des films...</p>
      </div>
    );
  }

  // Filtrer par recherche
  const filteredMovies = movies.filter(movie =>
    movie.original_title?.toLowerCase().includes(search.toLowerCase())
  );

  // Trier par score
  const sortedMovies = filteredMovies.sort((a, b) => b.score - a.score);

  //  Meilleur film
  const topMovie = sortedMovies[0] || null;

  // Ajouter le rang global
  const rankedMovies = sortedMovies.map((movie, index) => ({
    ...movie,
    rank: index + 1,
  }));

  // Pagination
  const totalPages = Math.ceil(rankedMovies.length / moviesPerPage);
  const currentMovies = rankedMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* 🥇 Meilleure Note */}
        {topMovie ? (
          <TopScoreCard
            score={topMovie.score.toFixed(1)}
            title={topMovie.original_title}
            author={topMovie.author || 'ca marche pas'}
          />
        ) : (
          <div className="text-center text-gray-400">Aucun film disponible</div>
        )}

        {/* Recherche */}
        <SearchBar search={search} setSearch={setSearch} />

        {/* Leaderboard */}
        <LeaderboardTable movies={currentMovies} />

        {/* Pagination */}
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
              Page {currentPage} sur {totalPages}
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
