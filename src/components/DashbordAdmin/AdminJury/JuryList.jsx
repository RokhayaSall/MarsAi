import JuryRow from './JuryRow';

export default function JuryList({ jury, onDelete, onEdit }) {
  if (!jury.length) {
    return (
      <div className="bg-white p-10 rounded-xl shadow-sm text-center text-slate-500">
        Aucun juré enregistré.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm divide-y">
      {jury.map(j => (
        <JuryRow key={j.id} jury={j} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}
