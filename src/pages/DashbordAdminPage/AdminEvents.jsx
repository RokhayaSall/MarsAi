import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AdminEvents() {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{t('adminEvents.title')}</h1>
      <p className="text-gray-600">{t('adminEvents.description')}</p>
    </div>
  );
}