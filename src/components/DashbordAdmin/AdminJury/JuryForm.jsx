import { useState } from 'react';

export default function JuryForm({ onCreate }) {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // ← Nouveau state pour message succès

  const handleSubmit = async e => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email)) {
      setError('Merci de saisir un email valide !');
      setSuccess('');
      return;
    }

    setError('');
    try {
      await onCreate(form); // onCreate peut renvoyer une promesse si le back est async
      setSuccess('Mail envoyé avec succès !');
      setForm({
        firstname: '',
        lastname: '',
        email: '',
      });

      // Message succès disparaît après 3 secondes
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError("Erreur lors de l'envoi du mail.");
      setSuccess('');
      console.error(err);
    }
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white
        border border-slate-200
        p-8
        rounded-2xl
        shadow-md
        mb-10
        grid grid-cols-1 md:grid-cols-2 gap-6
      "
    >
      {['firstname', 'lastname', 'email'].map(field => (
        <div key={field} className="flex flex-col">
          <label
            htmlFor={field}
            className="block text-sm font-medium mb-2 uppercase tracking-wide"
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>

          <input
            id={field}
            name={field}
            value={form[field]}
            type={field === 'email' ? 'email' : 'text'}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="
              bg-slate-50
              border border-slate-200
              text-slate-800
              placeholder-slate-400
              p-4
              rounded-xl
              focus:outline-none
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
              transition-all
            "
            onChange={handleChange}
            required
          />
        </div>
      ))}

      {error && (
        <div className="md:col-span-2 text-red-500 text-sm mb-2">{error}</div>
      )}
      {success && (
        <div className="md:col-span-2 text-green-600 text-sm mb-2">
          {success}
        </div>
      )}

      <div className="md:col-span-2">
        <button
          type="submit"
          className="
            w-full
            py-3 rounded-xl
            text-sm font-medium
            bg-emerald-500/10 text-emerald-600
            border border-emerald-500/20
            shadow-sm
            hover:bg-emerald-500/20
            hover:shadow-md
            hover:-translate-y-0.5
            transition-all duration-200
          "
        >
          Valider
        </button>
      </div>
    </form>
  );
}
