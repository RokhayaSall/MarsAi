

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"

export const apiFetch = async (url, options = {}) => {
  const res = await fetch(`${API_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || "Erreur API")
  }

  return data
}
