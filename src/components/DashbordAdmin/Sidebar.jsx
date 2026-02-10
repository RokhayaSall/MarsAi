import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#1d3d55] text-white h-screen p-6">
      <h1 className="text-xl font-bold mb-10">ADMIN</h1>

      <nav className="space-y-4 text-sm">
        <Link
          to="/admin"
          className="block cursor-pointer hover:text-accent transition"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/films"
          className="block cursor-pointer hover:text-accent transition"
        >
          Gestion Films
        </Link>

        <Link
          to="/admin/jury"
          className="block cursor-pointer hover:text-accent transition"
        >
          Jury
        </Link>

        <Link
          to="/admin/results"
          className="block cursor-pointer hover:text-accent transition"
        >
          Résultats
        </Link>

        <Link
          to="/admin/events"
          className="block cursor-pointer hover:text-accent transition"
        >
          Événements
        </Link>

        <Link
          to="/admin/config"
          className="block cursor-pointer hover:text-accent transition"
        >
          Configuration
        </Link>
      </nav>
    </aside>
  );
}
