import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../services/authService';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [success, setSuccess] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = isLogin
        ? { email: form.email, password: form.password }
        : form;

      const res = isLogin ? await login(payload) : await register(payload);

      if (res.token) {
        localStorage.setItem('token', res.token);

        setSuccess(
          isLogin
            ? 'Vous êtes connecté avec succès'
            : 'Vous êtes inscrit avec succès'
        );

        setTimeout(() => {
          navigate('/');
        }, 800);
      } else {
        // REGISTER
        setSuccess('Inscription réussie, Vous pouvez vous connecter');
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.message);
      setSuccess('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center m-10 md:m-15 md:mb-30">
      <div className="w-full max-w-md bg-gray-50 p-8 rounded shadow-sm border">
        <h2 className="text-2xl font-semibold text-center mb-6 uppercase tracking-wide">
          {isLogin ? 'Connexion' : 'Inscription'}
        </h2>

        {success && (
          <div className="mb-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100 px-5 py-3 text-green-800 text-sm shadow-sm">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 uppercase tracking-wide">
              Adresse e-mail
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              autoComplete="email"
              onChange={handleChange}
              className="w-full p-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 uppercase tracking-wide">
              Mot de passe
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-3 pr-12 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                autoComplete={isLogin ? 'current-password' : 'new-password'}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label={
                  showPassword
                    ? 'Masquer le mot de passe'
                    : 'Afficher le mot de passe'
                }
              >
                {showPassword ? (
                  <FaEye className="text-gray-500" />
                ) : (
                  <FaEyeSlash className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {!isLogin && (
            <>
              <div className="mb-5">
                <label className="block text-sm font-medium mb-2 uppercase tracking-wide">
                  Prénom
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  className="w-full p-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2 uppercase tracking-wide">
                  Nom
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  className="w-full p-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </>
          )}

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded transition"
            disabled={loading}
          >
            {loading
              ? 'Chargement...'
              : isLogin
                ? 'Se connecter'
                : "S'inscrire"}
          </button>
        </form>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-6 block text-center text-gray-600 hover:underline"
        >
          {isLogin
            ? 'Pas de compte ? Inscrivez-vous'
            : 'Déjà un compte ? Connectez-vous'}
        </button>
      </div>
    </div>
  );
}
