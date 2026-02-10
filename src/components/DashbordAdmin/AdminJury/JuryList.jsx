import JuryRow from './JuryRow';

export default function JuryList({ jury, onDelete, onEdit }) {
  if (!jury.length) {
    return <p className="text-gray-500 text-center py-10">Aucun juré.</p>;
  }

  return (
    <div className="space-y-3">
      {jury.map(j => (
        <JuryRow key={j.id} jury={j} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}
