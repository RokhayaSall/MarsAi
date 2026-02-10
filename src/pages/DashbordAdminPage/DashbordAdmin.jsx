import { useEffect, useState } from 'react';

import Sidebar from '../../components/DashbordAdmin/Sidebar';
import DashbordHeader from '../../components/DashbordAdmin/DashbordHeader';
import Card from '../../components/DashbordAdmin/Card';
import ProgressBar from '../../components/DashbordAdmin/ProgressBar';

export default function DashbordAdmin() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/dashboard');

        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }

        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error('Dashboard fetch error:', err);
        setError('Impossible de charger le dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  // 🔄 Loading
  if (loading) {
    return (
      <div className="p-10 text-gray-500 animate-pulse">
        Chargement du dashboard…
      </div>
    );
  }

  // ❌ Error
  if (error) {
    return <div className="p-10 text-red-600">{error}</div>;
  }

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-black-100 min-h-screen">
        <DashbordHeader />

        <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Films évalués par le Jury"
            value={stats?.movies?.count ?? 0}
          >
            <ProgressBar percent={0} />
          </Card>

          <Card
            title="Jurés ayant finalisé leur lots"
            value={stats?.jury?.finishedJury ?? 0}
          />

          <Card title="Pays représentés" value={stats?.countries?.count ?? 0}>
            <p className="text-sm text-gray-400">
              Zone dominante : {stats?.countries?.topZone ?? '—'}
            </p>
          </Card>

          <Card
            title="Taux d'occupation workshops"
            value={`${stats?.workshops?.occupancy ?? 0}%`}
          >
            <ProgressBar percent={stats?.workshops?.occupancy ?? 0} />
          </Card>

          <Card
            title="Comptes Réalisateurs actifs"
            value={stats?.directors?.activeCount ?? 0}
          >
            <p className="text-sm text-gray-400">
              +{stats?.directors?.todayIncrease ?? 0} aujourd’hui
            </p>
          </Card>
        </section>
      </main>
    </div>
  );
}
