import { useTranslation } from 'react-i18next';

export default function TopScoreCard({ score, title, author }) {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-50 rounded-2xl shadow-lg p-8 text-center mx-auto max-w-xl">
      <p className="text-6xl md:text-7xl font-extrabold text-blue-700">
        {score}
      </p>
      <p className="text-sm md:text-base font-semibold mt-2 text-gray-500">
        {t('topScore.bestScore')}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">
        {title}
      </h2>
      <p className="text-gray-600 mt-1">
        {t('topScore.by')} {author}
      </p>
    </div>
  );
}