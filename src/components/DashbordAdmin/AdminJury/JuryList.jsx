import JuryRow from './JuryRow';

// Affiche la liste des jurés
// Props :
// - jury : array de jurés
// - onDelete : fonction pour supprimer un jury
// - onEdit : fonction pour éditer un jury

export default function JuryList({ jury, onDelete, onEdit }) {
  if (!jury.length) {
    return (
      <p className="text-gray-500 text-center py-10 bg-gray-50 rounded-lg shadow-sm">
        Aucun juré.
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
