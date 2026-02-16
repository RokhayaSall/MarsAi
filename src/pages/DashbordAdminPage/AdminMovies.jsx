import { useState, useEffect } from 'react';
import Sidebar from '../../components/DashbordAdmin/Sidebar';
import MovieList from '../../components/DashbordAdmin/AdminMovies/MovieList';
import MovieEditModal from '../../components/DashbordAdmin/AdminMovies/MovieEditModal';

export default function AdminMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingMovie, setEditingMovie] = useState(null);
  const moviesPerPage = 6;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/admin/movies`
        );
        const data = await res.json();
        setMovies(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleEdit = movie => setEditingMovie(movie);

  const handleDelete = async id => {
    const ok = window.confirm('Supprimer ce film ?');
    if (!ok) return;
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/movies/${id}`,
        { method: 'DELETE' }
      );
      if (!res.ok) throw new Error('Erreur suppression');
      setMovies(prev => prev.filter(m => m.id !== id));
    } catch (err) {
      console.error(err);
      alert('Impossible de supprimer le film');
    }
  };

  const handleUpdate = updatedMovie => {
    setMovies(prev =>
      prev.map(m => (m.id === updatedMovie.id ? updatedMovie : m))
    );
  };

  // Pagination
  const totalPages = Math.ceil(movies.length / moviesPerPage);
  const currentMovies = movies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  if (loading)
    return (
      <p className="p-10 text-gray-500 animate-pulse">
        Chargement des films...
      </p>
    );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Gestion des Films
        </h1>

        <MovieList
          movies={currentMovies}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center items-center gap-3">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className={`w-10 h-10 rounded-lg border flex items-center justify-center ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50'}`}
            >
              {'<'}
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-lg font-bold transition-all ${currentPage === i + 1 ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700'}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className={`w-10 h-10 rounded-lg border flex items-center justify-center ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50'}`}
            >
              {'>'}
            </button>
          </div>
        )}

        {editingMovie && (
          <MovieEditModal
            movie={editingMovie}
            onClose={() => setEditingMovie(null)}
            onUpdate={handleUpdate}
          />
        )}
      </main>
    </div>
  );
}
