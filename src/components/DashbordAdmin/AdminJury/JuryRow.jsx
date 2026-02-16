export default function JuryRow({ jury, onDelete, onEdit }) {
  const handleDelete = () => {
    const ok = window.confirm(
      `Supprimer le jury ${jury.firstname} ${jury.lastname} ?`
    );
    if (ok) {
      onDelete(jury.id);
    }
  };

  return (
    <div
      className="flex justify-between items-center bg-gray-50 border border-gray-200 
      p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      {/* Infos du jury */}
      <div className="flex flex-col">
        <p className="font-medium text-gray-900">
          {jury.firstname} {jury.lastname}
        </p>
        <p className="text-sm text-gray-500">{jury.email}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={() => onEdit(jury)}
          className="text-sm px-3 py-1 rounded-md bg-blue-50 text-blue-600 
            hover:bg-blue-100 hover:text-blue-700 transition-colors"
        >
          Modifier
        </button>

        <button
          onClick={handleDelete}
          className="text-sm px-3 py-1 rounded-md bg-red-50 text-red-600 
            hover:bg-red-100 hover:text-red-700 transition-colors"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
