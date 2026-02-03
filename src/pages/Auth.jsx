
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login, register } from "../services/authService"


export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const payload = isLogin
        ? { email: form.email, password: form.password }
        : form

      const res = isLogin
        ? await login(payload)
        : await register(payload)

      if (res.token) {
        localStorage.setItem("token", res.token)
        navigate("/") 
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-gray-50 p-8 rounded shadow-sm border">
      <h2 className="text-2xl font-semibold text-center mb-6 uppercase tracking-wide">
        {isLogin ? "Connexion" : "Inscription"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2 uppercase tracking-wide">
            Adresse e-mail
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-2 uppercase tracking-wide">
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
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
            ? "Chargement..."
            : isLogin
            ? "Se connecter"
            : "S'inscrire"}
        </button>
      </form>

      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-6 block text-center text-gray-600 hover:underline"
      >
        {isLogin
          ? "Pas de compte ? Inscrivez-vous"
          : "Déjà un compte ? Connectez-vous"}
      </button>
    </div>
  </div>
)
}
