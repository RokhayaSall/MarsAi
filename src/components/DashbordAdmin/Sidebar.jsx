import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { apiFetch } from '../../services/api';
import {
  LayoutDashboard,
  Film,
  Users,
  Trophy,
  Calendar,
  Settings,
} from 'lucide-react';

export default function Sidebar() {
  const [user, setUser] = useState({
    firstname: 'Admin',
    email: 'admin@festival.org',
  });

  // Fetch de l'utilisateur connecté
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await apiFetch('/auth/me');
        setUser({
          firstname: data.firstname,
          email: data.email,
        });
      } catch (err) {
        console.error("Impossible de récupérer l'admin :", err);
      }
    };
    fetchUser();
  }, []);

  const linkClass =
    'flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group';
  const activeClass =
    'bg-white/15 backdrop-blur-md shadow-lg border border-white/20';
  const inactiveClass = 'hover:bg-white/5 hover:translate-x-1';

  return (
    <aside className="w-80 min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white p-8 flex flex-col border-r border-white/10">
      {/* Profil */}
      <header className="flex items-center gap-4 mb-14">
        <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center font-bold text-lg text-gray-900">
          {user.firstname ? user.firstname.charAt(0).toUpperCase() : 'A'}
        </div>
        <div>
          <p className="text-base font-semibold">{user.firstname}</p>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 text-base font-medium">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/films"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Film size={20} />
          Gestion Films
        </NavLink>

        <NavLink
          to="/admin/jury"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Users size={20} />
          Jury
        </NavLink>

        <NavLink
          to="/admin/results"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Trophy size={20} />
          Résultats
        </NavLink>

        <NavLink
          to="/admin/events"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Calendar size={20} />
          Événements
        </NavLink>

        <NavLink
          to="/admin/config"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Settings size={20} />
          Configuration
        </NavLink>
      </nav>

      <div className="mt-auto pt-12 text-sm text-white/40">
        MarsAI Admin v1.0
      </div>
    </aside>
  );
}
