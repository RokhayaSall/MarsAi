import { useEffect, useState } from 'react';
import { apiFetch } from '../../services/api';
import Sidebar from '../../components/DashbordAdmin/Sidebar';
import Header from '../../components/layout/Navbar';

import Card from '../../components/DashbordAdmin/Card';
import ProgressBar from '../../components/DashbordAdmin/ProgressBar';
import { Film, Users, Globe, Clipboard } from 'lucide-react';

export default function DashbordAdmin() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await apiFetch('/api/dashboard');
        setStats(data);
      } catch (err) {
        setError('Impossible de charger le dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) return <div className="p-10">Chargement...</div>;
  if (error) return <div className="p-10 text-red-600">{error}</div>;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Films évalués par le Jury"
            value={stats?.movies?.count ?? 0}
            icon={Film}
          >
            <ProgressBar percent={stats?.movies?.progress ?? 0} light />
          </Card>

          <Card
            title="Jurys ayant finalisé leur lots"
            value={stats?.jury?.finishedJury ?? 0}
            icon={Users}
          />

          <Card
            title="Pays représentés"
            value={stats?.countries?.count ?? 0}
            icon={Globe}
          />

          <Card
            title="Taux d'occupation workshops"
            value={`${stats?.workshops?.occupancy ?? 0}%`}
            icon={Clipboard}
          />

          <Card
            title="Nombres de Réalisateurs inscrits"
            value={stats?.directors?.activeCount ?? 0}
            subtitle={`+${stats?.directors?.todayIncrease ?? 0} aujourd’hui`}
            icon={Users}
          />
        </main>
      </div>
    </div>
  );
}
