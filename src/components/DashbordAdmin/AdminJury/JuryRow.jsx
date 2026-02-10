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
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
      <div>
        <p className="font-medium">
          {jury.firstname} {jury.lastname}
        </p>
        <p className="text-sm text-gray-500">{jury.email}</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => onEdit(jury)}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Modifier
        </button>

        <button
          onClick={handleDelete}
          className="text-sm text-red-600 hover:text-red-800"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
