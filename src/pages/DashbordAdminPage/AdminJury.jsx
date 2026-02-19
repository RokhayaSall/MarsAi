import { useEffect, useState } from 'react';
import Sidebar from '../../components/DashbordAdmin/Sidebar';
import JuryList from '../../components/DashbordAdmin/AdminJury/JuryList';
import JuryForm from '../../components/DashbordAdmin/AdminJury/JuryForm';
import JuryEditModal from '../../components/DashbordAdmin/AdminJury/JuryEditModal';
import {
  getJury,
  createJury,
  updateJury,
  deleteJury,
} from '../../services/juryService';

export default function AdminJury() {
  const [jury, setJury] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingJury, setEditingJury] = useState(null);

  const token = localStorage.getItem('token');

  // Charger la liste des jurés
  useEffect(() => {
    const fetchJury = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      try {
        const data = await getJury({ token });
        setJury(data);
      } catch (err) {
        console.error('Erreur fetch jury:', err);
      }
    };
    fetchJury();
  }, []);

  // Supprimer un juré
  const handleDelete = async id => {
    try {
      await deleteJury(id, { token });
      setJury(prev => prev.filter(j => j.id !== id));
    } catch (err) {
      console.error('Erreur suppression jury:', err);
    }
  };

  //  Ajouter un juré
  const handleCreate = async newJury => {
    console.log('Création jury payload:', newJury);
    try {
      const created = await createJury(newJury, { token });
      setJury(prev => [...prev, created]);
      setShowForm(false);
    } catch (err) {
      console.error('Erreur création jury:', err);
    }
  };

  // Mettre à jour un juré
  const handleUpdate = async updatedJury => {
    try {
      const updated = await updateJury(updatedJury.id, updatedJury, { token });
      setJury(prev => prev.map(j => (j.id === updated.id ? updated : j)));
      setEditingJury(null);
    } catch (err) {
      console.error('Erreur mise à jour jury:', err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
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
