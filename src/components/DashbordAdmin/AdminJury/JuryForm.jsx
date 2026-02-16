import { useState } from 'react';

export default function JuryForm({ onCreate }) {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/api/admin/jury`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(onCreate);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-6 rounded-xl shadow-sm mb-8 grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      {['firstname', 'lastname', 'email', 'password'].map(field => (
        <input
          key={field}
          type={field === 'password' ? 'password' : 'text'}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          onChange={e => setForm({ ...form, [field]: e.target.value })}
          required
        />
      ))}

      <div className="md:col-span-4 flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Créer
        </button>
      </div>
    </form>
  );
}
