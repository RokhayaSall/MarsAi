import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Formulaire pour ajouter un jury
export default function JuryForm({ onCreate }) {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email)) {
      setError(t('juryForm.invalidEmail'));
      setSuccess('');
      return;
    }

    setError('');
    try {
      await onCreate(form); // onCreate peut renvoyer une promesse si le back est async
      setSuccess(t('juryForm.success'));
      setForm({
        firstname: '',
        lastname: '',
        email: '',
      });

      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(t('juryForm.error'));
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
      className="bg-white border border-slate-200 p-8 rounded-2xl shadow-md mb-10 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {['firstname', 'lastname'].map(field => (
        <div key={field} className="flex flex-col">
          <label
            htmlFor={field}
            className="block text-sm font-medium mb-2 uppercase tracking-wide"
          >
            {t(`juryForm.${field}`)}
          </label>

          <input
            id={field}
            name={field}
            value={form[field]}
            type={field === 'email' ? 'email' : 'text'}
            placeholder={t(`juryForm.${field}`)}
            className="bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 p-4 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            onChange={handleChange}
            required
          />
        </div>
      ))}

      {error && <div className="md:col-span-2 text-red-500 text-sm mb-2">{error}</div>}
      {success && <div className="md:col-span-2 text-green-600 text-sm mb-2">{success}</div>}

      <div className="flex flex-col md:col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 uppercase tracking-wide"
        >
          {t('juryForm.email')}
        </label>

        <div className="flex gap-3">
          <input
            id="email"
            name="email"
            value={form.email}
            type="email"
            placeholder={t('juryForm.email')}
            className="flex-1 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 p-4 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="px-20 p-4 rounded-xl text-sm font-medium bg-emerald-500/10 text-emerald-600 border border-slate-200 shadow-sm hover:bg-emerald-500/20 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all whitespace-nowrap"
          >
            {t('juryForm.submit')}
          </button>
        </div>
      </div>
    </form>
  );
}