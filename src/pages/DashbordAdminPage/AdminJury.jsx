import { useEffect, useState } from 'react';
import Sidebar from '../../components/DashbordAdmin/Sidebar';
import Header from '../../components/layout/Navbar';
import JuryList from '../../components/DashbordAdmin/AdminJury/JuryList';
import JuryForm from '../../components/DashbordAdmin/AdminJury/JuryForm';
import JuryEditModal from '../../components/DashbordAdmin/AdminJury/JuryEditModal';
import DistributionsPanel from '../../components/DashbordAdmin/AdminJury/DistributionsPanel';
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
  const [distributions, setDistributions] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('jurys'); // 🔹 onglet actif

  /* ================= FETCH ================= */

  const fetchJury = async () => {
    try {
      const data = await getJury();

      // sécurité anti-doublons
      const unique = Array.from(new Map(data.map(j => [j.id, j])).values());

      setJury(unique);
    } catch (err) {
      console.error('Erreur fetchJury:', err);
    }
  };

  const fetchDistributions = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/jury/distributions`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      const data = await res.json();
      setDistributions(data);
    } catch (err) {
      console.error('Erreur fetchDistributions:', err);
    }
  };

  useEffect(() => {
    fetchJury();
    fetchDistributions();
  }, []);

  /* ================= CRUD ================= */

  const handleDelete = async id => {
    try {
      await deleteJury(id);
      await fetchJury();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreate = async newJury => {
    try {
      await createJury(newJury);
      await fetchJury();
      setShowForm(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async updatedJury => {
    try {
      await updateJury(updatedJury.id, updatedJury);
      await fetchJury();
      setEditingJury(null);
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= DISTRIBUTION ================= */

  const handleDistribute = async () => {
    if (!window.confirm('Distribuer les films équitablement ?')) return;

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Vous devez être connecté.');
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/jury/distribute-movies`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error('Erreur serveur');

      await fetchDistributions();
      setActiveTab('distributions');
      alert('Distribution réussie !');
    } catch (err) {
      console.error(err);
      alert('Erreur distribution');
    }
  };

  /* ================= RENDER ================= */

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? 'ml-72' : 'ml-0'
        }`}
      >
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className="flex-1 p-8 space-y-8">
          {/* Titre + Actions */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-slate-800">
              Gestion des Jurys
            </h2>

            <div className="flex gap-3">
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-[#d8e1e9] px-5 py-2.5 rounded-lg hover:bg-[#244b6695]"
              >
                + Ajouter
              </button>

              <button
                onClick={handleDistribute}
                className="bg-[#244b66] text-white px-5 py-2.5 rounded-lg hover:bg-[#1e3d52]"
              >
                Distribuer
              </button>
            </div>
          </div>

          {/* Onglets */}
          <div className="flex gap-8 border-b border-slate-200">
            <button
              onClick={() => setActiveTab('jurys')}
              className={`pb-3 text-lg font-medium transition relative ${
                activeTab === 'jurys'
                  ? 'text-[#244b66]'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Jurys
              {activeTab === 'jurys' && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#244b66] rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('distributions')}
              className={`pb-3 text-lg font-medium transition relative ${
                activeTab === 'distributions'
                  ? 'text-[#244b66]'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Distributions
              {activeTab === 'distributions' && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#244b66] rounded-full"></span>
              )}
            </button>
          </div>

          {/* CONTENU */}
          {activeTab === 'jurys' && (
            <>
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
            </>
          )}

          {activeTab === 'distributions' && (
            <DistributionsPanel distributions={distributions} />
          )}
        </main>
      </div>
    </div>
  );
}
