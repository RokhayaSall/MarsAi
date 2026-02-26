import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function JuryEditModal({ jury, onClose, onUpdate }) {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  useEffect(() => {
    if (jury) {
      setForm({
        firstname: jury.firstname,
        lastname: jury.lastname,
        email: jury.email,
      });
    }
  }, [jury]);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/jury/${jury.id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        throw new Error(t('juryModal.errorUpdate'));
      }

      const updatedJury = await res.json();
      onUpdate(updatedJury);
      onClose();
    } catch (err) {
      console.error(err);
      alert(t('juryModal.errorAlert'));
    }
  };

  if (!jury) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 rounded-xl p-6 w-full max-w-md shadow-lg"
      >
        <h3 className="text-lg font-semibold mb-4">{t('juryModal.title')}</h3>

        <label className="block mb-3">
          {t('juryModal.firstname')}
          <input
            className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            value={form.firstname}
            onChange={e => setForm({ ...form, firstname: e.target.value })}
            required
          />
        </label>

        <label className="block mb-3">
          {t('juryModal.lastname')}
          <input
            className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            value={form.lastname}
            onChange={e => setForm({ ...form, lastname: e.target.value })}
            required
          />
        </label>

        <label className="block mb-3">
          {t('juryModal.email')}
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
        </label>

        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition"
          >
            {t('juryModal.cancel')}
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {t('juryModal.save')}
          </button>
        </div>
      </form>
    </div>
  );
}