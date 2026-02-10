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

    fetch('http://localhost:3000/api/admin/jury', {
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
      className="bg-white p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      {['firstname', 'lastname', 'email', 'password'].map(field => (
        <input
          key={field}
          type={field === 'password' ? 'password' : 'text'}
          placeholder={field}
          className="border p-2 rounded-md"
          onChange={e => setForm({ ...form, [field]: e.target.value })}
          required
        />
      ))}

      <div className="md:col-span-4 flex justify-end">
        <button className="bg-[#1d3d55] text-white px-4 py-2 rounded-md">
          Créer
        </button>
      </div>
    </form>
  );
}
