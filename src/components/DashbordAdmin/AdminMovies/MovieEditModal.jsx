import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function MovieEditModal({ movie, onClose, onUpdate }) {
  const { t } = useTranslation();

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

      if (!res.ok) throw new Error(t('movieEditModal.updateError'));

      const updatedMovie = await res.json();
      onUpdate(updatedMovie);
      onClose();
    } catch (err) {
      console.error(err);
      alert(t('movieEditModal.updateError'));
    }
  };

  if (!movie) return null;

  const fields = [
    { label: t('movieEditModal.originalTitle'), key: 'original_title' },
    { label: t('movieEditModal.englishTitle'), key: 'english_title' },
    { label: t('movieEditModal.youtubeUrl'), key: 'youtube_url' },
    { label: t('movieEditModal.duration'), key: 'duration' },
    { label: t('movieEditModal.language'), key: 'language' },
    { label: t('movieEditModal.originalSynopsis'), key: 'original_synopsis' },
    { label: t('movieEditModal.englishSynopsis'), key: 'english_synopsis' },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg space-y-3 overflow-y-auto max-h-[90vh]"
      >
        <h3 className="text-lg font-semibold mb-2">{t('movieEditModal.title')}</h3>

        {fields.map(field => (
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
            {t('movieEditModal.cancel')}
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            {t('movieEditModal.save')}
          </button>
        </div>
      </form>
    </div>
  );
}