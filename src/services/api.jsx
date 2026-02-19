// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// export const apiFetch = async (url, options = {}) => {
//   const token = localStorage.getItem('token');

//   const res = await fetch(`${API_URL}${url}`, {
//     ...options,
//     headers: {
//       'Content-Type': 'application/json',
//       ...(token && { Authorization: `Bearer ${token}` }),
//       ...options.headers,
//     },
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error(data.message || 'Erreur API');
//   }

//   return data;
// };

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const apiFetch = async (url, options = {}) => {
  const token = localStorage.getItem('token');

  const res = await fetch(`${API_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || 'Erreur API');
  }

  return res.json();
};
