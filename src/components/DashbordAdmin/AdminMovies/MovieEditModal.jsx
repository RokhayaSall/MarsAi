import { useState, useEffect } from 'react';

export default function MovieEditModal({ movie, onClose, onUpdate }) {
  const [form, setForm] = useState({
    original_title: '',
    english_title: '',
    youtube_url: '',
    duration: '',
    language: '',
    original_synopsis: '',
    english_synopsis: '',
  });

  useEffect(() => {
    if (movie) {
      setForm({
        original_title: movie.original_title,
        english_title: movie.english_title,
        youtube_url: movie.youtube_url,
        duration: movie.duration,
        language: movie.language,
        original_synopsis: movie.original_synopsis,
        english_synopsis: movie.english_synopsis,
      });
    }
  }, [movie]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/movies/${movie.id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error('Erreur lors de la mise à jour');

      const updatedMovie = await res.json();
      onUpdate(updatedMovie);
      onClose();
    } catch (err) {
      console.error(err);
      alert('Impossible de mettre à jour le film');
    }
  };

  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg space-y-3 overflow-y-auto max-h-[90vh]"
      >
        <h3 className="text-lg font-semibold mb-2">Modifier le film</h3>

        {[
          { label: 'Titre original', key: 'original_title' },
          { label: 'Titre anglais', key: 'english_title' },
          { label: 'URL YouTube', key: 'youtube_url' },
          { label: 'Durée (min)', key: 'duration' },
          { label: 'Langue', key: 'language' },
          { label: 'Synopsis original', key: 'original_synopsis' },
          { label: 'Synopsis anglais', key: 'english_synopsis' },
        ].map(field => (
          <label key={field.key} className="block">
            {field.label}
            <input
              type="text"
              value={form[field.key]}
              onChange={e => setForm({ ...form, [field.key]: e.target.value })}
              className="w-full border rounded-md p-2 mt-1"
              required
            />
          </label>
        ))}

        <div className="flex justify-end gap-3 mt-3">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 px-3 py-1 rounded-md border"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}
