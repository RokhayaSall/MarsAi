import { useState, useEffect } from 'react';

export default function JuryEditModal({ jury, onClose, onUpdate }) {
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
        `http://localhost:3000/api/admin/jury/${jury.id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        throw new Error('Erreur lors de la mise à jour');
      }

      const updatedJury = await res.json();
      onUpdate(updatedJury);
      onClose();
    } catch (err) {
      console.error(err);
      alert('Impossible de modifier le juré');
    }
  };

  if (!jury) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg"
      >
        <h3 className="text-lg font-semibold mb-4">Modifier le jury</h3>

        <label className="block mb-2">
          Prénom
          <input
            className="w-full border rounded-md p-2 mt-1"
            value={form.firstname}
            onChange={e => setForm({ ...form, firstname: e.target.value })}
            required
          />
        </label>

        <label className="block mb-2">
          Nom
          <input
            className="w-full border rounded-md p-2 mt-1"
            value={form.lastname}
            onChange={e => setForm({ ...form, lastname: e.target.value })}
            required
          />
        </label>

        <label className="block mb-2">
          Email
          <input
            type="email"
            className="w-full border rounded-md p-2 mt-1"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
        </label>

        <div className="flex justify-end gap-3 mt-4">
          <button type="button" onClick={onClose} className="text-gray-600">
            Annuler
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}
