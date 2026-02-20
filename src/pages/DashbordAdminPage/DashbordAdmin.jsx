import { useEffect, useState } from 'react';
import { apiFetch } from '../../services/api';
import Sidebar from '../../components/DashbordAdmin/Sidebar';

import Card from '../../components/DashbordAdmin/Card';
import ProgressBar from '../../components/DashbordAdmin/ProgressBar';
import { Film, Users, Globe, Clipboard } from 'lucide-react';

export default function DashbordAdmin() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await apiFetch('/api/dashboard');
        setStats(data);
      } catch (err) {
        console.error(err);
        setError('Impossible de charger le dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-gray-500 animate-pulse bg-gray-50 min-h-screen">
        Chargement du dashboard…
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-red-600 bg-gray-50 min-h-screen">{error}</div>
    );
  }

  return (
    <div className="flex bg-gray-50 min-h-screen text-gray-900">
      {/* Sidebar */}
      <Sidebar light /> {/* Passer prop light pour version claire */}
      {/* Main */}
      <main className="flex-1">
        {/* Dashboard Cards */}
        <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Films évalués par le Jury"
            value={stats?.movies?.count ?? 0}
            subtitle={`${stats?.movies?.today ?? 0} aujourd’hui`}
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
          >
            <p className="text-sm text-gray-500 mt-1">
              Zone dominante : {stats?.countries?.topZone ?? '—'}
            </p>
          </Card>

          <Card
            title="Taux d'occupation workshops"
            value={`${stats?.workshops?.occupancy ?? 0}%`}
            icon={Clipboard}
          >
            <ProgressBar percent={stats?.workshops?.occupancy ?? 0} light />
          </Card>

          <Card
            title="Comptes Réalisateurs actifs"
            value={stats?.directors?.activeCount ?? 0}
            subtitle={`+${stats?.directors?.todayIncrease ?? 0} aujourd’hui`}
            icon={Users}
          />
        </section>
      </main>
    </div>
  );
}
