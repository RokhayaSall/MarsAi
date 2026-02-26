import React from 'react';
import { useTranslation } from 'react-i18next';

function DashboardJury() {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">{t('dashboardJury.title')}</h1>
      <p className="text-gray-600">{t('dashboardJury.subtitle')}</p>
    </div>
  );
}

export default DashboardJury;