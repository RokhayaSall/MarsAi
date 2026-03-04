import { useEffect, useState } from 'react';
import Sidebar from '../../components/DashbordAdmin/Sidebar';
import Header from '../../components/layout/Navbar'; // Navbar admin
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

  // 🔥 STATE PARTAGÉ pour Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchJury = async () => {
      try {
        const data = await getJury();
        setJury(data);
      } catch (err) {
        console.error('Erreur fetch jury:', err.message);
      }
    };

    fetchJury();
  }, []);

  const handleDelete = async id => {
    try {
      await deleteJury(id);
      setJury(prev => prev.filter(j => j.id !== id));
    } catch (err) {
      console.error('Erreur suppression jury:', err.message);
    }
  };

  const handleCreate = async newJury => {
    try {
      const created = await createJury(newJury);
      setJury(prev => [...prev, created]);
      setShowForm(false);
    } catch (err) {
      console.error('Erreur création jury:', err.message);
    }
  };

  const handleUpdate = async updatedJury => {
    try {
      const updated = await updateJury(updatedJury.id, updatedJury);
      setJury(prev => prev.map(j => (j.id === updated.id ? updated : j)));
      setEditingJury(null);
    } catch (err) {
      console.error('Erreur mise à jour jury:', err.message);
    }
  };
window.scrollTo(0, 0);
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Contenu principal */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? 'ml-72' : 'ml-0' // ← décalage si sidebar ouverte
        }`}
      >
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Gestion des Jurys</h2>

            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-[#1d3d55] text-white px-5 py-2.5 rounded-lg hover:bg-[#244a66]"
            >
              + Ajouter un jury
            </button>
          </div>

          {/* Tableau scrollable */}
          <div className="border border-gray-200 rounded-2xl shadow-lg overflow-y-auto max-h-[600px] p-4 space-y-4">
            {showForm && <JuryForm onCreate={handleCreate} />}

            <JuryList
              jury={jury}
              onDelete={handleDelete}
              onEdit={setEditingJury}
            />

            {editingJury && (
              <JuryEditModal
                jury={editingJury}
                onClose={() => setEditingJury(null)}
                onUpdate={handleUpdate}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
