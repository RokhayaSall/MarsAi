import { useTranslation } from 'react-i18next';
import JuryRow from './JuryRow';

// Affiche la liste des jurés
export default function JuryList({ jury, onDelete, onEdit }) {
  const { t } = useTranslation();

  if (!jury.length) {
    return (
      <p className="text-gray-500 text-center py-10 bg-gray-50 rounded-lg shadow-sm">
        {t('juryList.noJury')}
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {jury.map(j => (
        <JuryRow key={j.id} jury={j} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}