import { Navigate } from 'react-router-dom';

export default function AdminRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  try {
    const payloadBase64 = token.split('.')[1];
    if (!payloadBase64) {
      throw new Error('Invalid token');
    }

    const payload = JSON.parse(atob(payloadBase64));

    // Vérification expiration
    if (!payload.exp || payload.exp * 1000 < Date.now()) {
      localStorage.removeItem('token');
      return <Navigate to="/auth" replace />;
    }

    // Vérification rôle
    if (!payload.roles || !payload.roles.includes('Admin')) {
      return <Navigate to="/home" replace />;
    }

   return children;
    } catch (error) {
      console.error('AdminRoute token error:', error);
      localStorage.removeItem('token');
      return <Navigate to="/auth" replace />;
    }
}