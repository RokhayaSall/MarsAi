import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { apiFetch } from '../../services/api';
import Sidebar from '../../components/DashbordAdmin/Sidebar';

import Card from '../../components/DashbordAdmin/Card';
import ProgressBar from '../../components/DashbordAdmin/ProgressBar';
import { Film, Users, Globe, Clipboard } from 'lucide-react';

export default function DashbordAdmin() {
  const { t } = useTranslation();

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
        setError(t('admin.dashboard.errors.load'));
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [t]);

  if (loading) {
    return (
      <div className="p-10 text-gray-500 animate-pulse bg-gray-50 min-h-screen">
        {t('admin.dashboard.loading')}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-red-600 bg-gray-50 min-h-screen">
        {error}
      </div>
    );
  }

  return (
    <div className="flex bg-gray-50 min-h-screen text-gray-900">
      <Sidebar light />

      <main className="flex-1">
        <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <Card
            title={t('admin.dashboard.cards.movies.title')}
            value={stats?.movies?.count ?? 0}
            subtitle={t('admin.dashboard.cards.movies.subtitle', {
              count: stats?.movies?.today ?? 0,
            })}
            icon={Film}
          >
            <ProgressBar percent={stats?.movies?.progress ?? 0} light />
          </Card>

          <Card
            title={t('admin.dashboard.cards.jury.title')}
            value={stats?.jury?.finishedJury ?? 0}
            icon={Users}
          />

          <Card
            title={t('admin.dashboard.cards.countries.title')}
            value={stats?.countries?.count ?? 0}
            icon={Globe}
          >
            <p className="text-sm text-gray-500 mt-1">
              {t('admin.dashboard.cards.countries.topZone')}:{' '}
              {stats?.countries?.topZone ?? '—'}
            </p>
          </Card>

          <Card
            title={t('admin.dashboard.cards.workshops.title')}
            value={`${stats?.workshops?.occupancy ?? 0}%`}
            icon={Clipboard}
          >
            <ProgressBar percent={stats?.workshops?.occupancy ?? 0} light />
          </Card>

          <Card
            title={t('admin.dashboard.cards.directors.title')}
            value={stats?.directors?.activeCount ?? 0}
            subtitle={t('admin.dashboard.cards.directors.subtitle', {
              count: stats?.directors?.todayIncrease ?? 0,
            })}
            icon={Users}
          />
        </section>
      </main>
    </div>
  );
}