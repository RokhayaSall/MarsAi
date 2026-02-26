import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../../components/DashbordAdmin/Sidebar';
import JuryList from '../../components/DashbordAdmin/AdminJury/JuryList';
import JuryForm from '../../components/DashbordAdmin/AdminJury/JuryForm';
import JuryEditModal from '../../components/DashbordAdmin/AdminJury/JuryEditModal';
import { getJury, createJury, updateJury, deleteJury } from '../../services/juryService';

export default function AdminJury() {
  const { t } = useTranslation();
  const [jury, setJury] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingJury, setEditingJury] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJury = async () => {
      try {
        const data = await getJury();
        setJury(data);
      } catch (err) {
        console.error(t('adminJury.loading'), err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJury();
  }, [t]);

  const handleDelete = async id => {
    try {
      await deleteJury(id);
      setJury(prev => prev.filter(j => j.id !== id));
    } catch (err) {
      console.error(t('adminJury.deleteError'), err.message);
    }
  };

  const handleCreate = async newJury => {
    try {
      const created = await createJury(newJury);
      setJury(prev => [...prev, created]);
      setShowForm(false);
    } catch (err) {
      console.error(t('adminJury.createError'), err.message);
    }
  };

  const handleUpdate = async updatedJury => {
    try {
      const updated = await updateJury(updatedJury.id, updatedJury);
      setJury(prev => prev.map(j => (j.id === updated.id ? updated : j)));
      setEditingJury(null);
    } catch (err) {
      console.error(t('adminJury.updateError'), err.message);
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-gray-500 animate-pulse bg-gray-50 min-h-screen">
        {t('adminJury.loading')}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{t('adminJury.title')}</h2>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#1d3d55] text-white px-5 py-2.5 rounded-lg hover:bg-[#244a66]"
          >
            {t('adminJury.addButton')}
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