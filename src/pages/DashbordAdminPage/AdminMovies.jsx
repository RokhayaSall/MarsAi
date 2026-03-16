import { useEffect, useState } from 'react';
import Sidebar from '../../components/DashbordAdmin/Sidebar';
import Header from '../../components/layout/Navbar';
import MovieList from '../../components/DashbordAdmin/AdminMovies/MovieList';
import MovieEditModal from '../../components/DashbordAdmin/AdminMovies/MovieEditModal';
import ConfirmPopup from '../../components/ui/ConfirmPopup';
import { apiFetch } from '../../services/api';

export default function AdminMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingMovie, setEditingMovie] = useState(null);
  const [movieToDelete, setMovieToDelete] = useState(null);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const moviesPerPage = 6;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await apiFetch('/api/admin/movies');
        setMovies(data);
      } catch (err) {
        console.error('Erreur fetch movies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleEdit = movie => setEditingMovie(movie);

  const toggleVisibility = async movieId => {
    try {
      const token = localStorage.getItem('token');

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/movies/${movieId}/visibility`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        // Met à jour le state local pour refléter le changement
        setMovies(prev =>
          prev.map(m =>
            m.id === movieId ? { ...m, is_visible: m.is_visible ? 0 : 1 } : m
          )
        );
      } else {
        alert(data.error || 'Impossible de modifier la visibilité');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur serveur');
    }
  };

  const confirmDelete = async () => {
    if (!movieToDelete) return;

    try {
      const token = localStorage.getItem('token');

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/movies/${movieToDelete}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error('Erreur suppression');

      setMovies(prev => prev.filter(m => m.id !== movieToDelete));
      setMovieToDelete(null);
    } catch (err) {
      console.error(err);
      setShowErrorPopup(true);
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
      {/* Sidebar fonctionnelle */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col">
        {/* Navbar qui contrôle la sidebar */}
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className="flex-1 p-6 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Gestion des Films
          </h2>

          <MovieList
            movies={currentMovies}
            onEdit={handleEdit}
            onDelete={setMovieToDelete}
            toggleVisibility={toggleVisibility}
          />

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center gap-3">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className={`w-10 h-10 rounded-lg border flex items-center justify-center ${
                  currentPage === 1
                    ? 'opacity-30 cursor-not-allowed'
                    : 'hover:bg-gray-50'
                }`}
              >
                {'<'}
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-bold transition-all ${
                    currentPage === i + 1
                      ? 'bg-[#1E293B] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className={`w-10 h-10 rounded-lg border flex items-center justify-center ${
                  currentPage === totalPages
                    ? 'opacity-30 cursor-not-allowed'
                    : 'hover:bg-gray-50'
                }`}
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

          {/* DELETE MOVIE */}
          <ConfirmPopup
            isOpen={!!movieToDelete}
            title="Supprimer le film"
            message="Êtes-vous sûr de vouloir supprimer ce film ? Cette action est irréversible."
            confirmText="Supprimer"
            cancelText="Annuler"
            onCancel={() => setMovieToDelete(null)}
            onConfirm={confirmDelete}
          />

          {/* ERROR */}
          <ConfirmPopup
            isOpen={showErrorPopup}
            title="Erreur"
            message="Impossible de supprimer le film."
            confirmText="OK"
            onConfirm={() => setShowErrorPopup(false)}
            onCancel={() => setShowErrorPopup(false)}
          />
        </main>
      </div>
    </div>
  );
}
