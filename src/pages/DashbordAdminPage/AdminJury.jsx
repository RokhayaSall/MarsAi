import { useEffect, useState } from 'react';
import Sidebar from '../../components/DashbordAdmin/Sidebar';
import DashbordHeader from '../../components/DashbordAdmin/DashbordHeader';
import JuryList from '../../components/DashbordAdmin/AdminJury/JuryList';
import JuryForm from '../../components/DashbordAdmin/AdminJury/JuryForm';
import JuryEditModal from '../../components/DashbordAdmin/AdminJury/JuryEditModal';

export default function AdminJury() {
  const [jury, setJury] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingJury, setEditingJury] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/admin/jury')
      .then(res => res.json())
      .then(setJury);
  }, []);

  const handleDelete = id => {
    fetch(`http://localhost:3000/api/admin/jury/${id}`, {
      method: 'DELETE',
    }).then(() => setJury(prev => prev.filter(j => j.id !== id)));
  };

  const handleCreate = newJury => {
    setJury(prev => [...prev, newJury]);
    setShowForm(false);
  };

  const handleUpdate = updatedJury => {
    setJury(prev => prev.map(j => (j.id === updatedJury.id ? updatedJury : j)));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <DashbordHeader />

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Gestion des jurés</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#1d3d55] text-white px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg rounded-lg transition-all duration-200 hover:bg-[#244a66]"
          >
            + Ajouter un jury
          </button>
        </div>

        {showForm && <JuryForm onCreate={handleCreate} />}

        <JuryList jury={jury} onDelete={handleDelete} onEdit={setEditingJury} />

        {editingJury && (
          <JuryEditModal
            jury={editingJury}
            onClose={() => setEditingJury(null)}
            onUpdate={handleUpdate}
          />
        )}
      </main>
    </div>
  );
}
