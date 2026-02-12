import { useState } from 'react';
import { CardMovie } from '../components/ui/Cards';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function GalerieFilms() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPage1 = Array(12).fill({
    title: 'FILM PAGE 1',
    director: 'Réalisateur Alpha',
    country: 'France',
    duration: '60S',
  });

  const moviesPage2 = Array(6).fill({
    title: 'FILM PAGE 2',
    director: 'Réalisateur Beta',
    country: 'USA',
    duration: '90S',
  });

  const currentMovies = currentPage === 1 ? moviesPage1 : moviesPage2;
  const totalPages = 2;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 font-sans">
      <div className="mb-12">
        <button
          onClick={() => navigate('/Home')}
          className="text-[#3b82f6] text-xs font-black flex items-center gap-2 mb-6 uppercase tracking-widest hover:opacity-80"
        >
          <span className="text-lg">←</span> {t('movies.back_home')}
        </button>

        <h1 className="text-7xl font-black text-[#282828] leading-[0.9] tracking-tighter mb-2">
          {t('movies.gallery_title').split('\n')[0]} <br />
          <span className="text-[#FF5845]">{t('movies.gallery_title_span')}</span>
        </h1>

        <p>{t('movies.gallery_description')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {currentMovies.map((movie, index) => (
          <CardMovie
            key={`${currentPage}-${index}`}
            title={movie.title}
            director={movie.director}
            country={movie.country}
            duration={movie.duration}
          />
        ))}
      </div>

      <div className="mt-20 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className={`w-12 h-12 border rounded-xl flex items-center justify-center ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50'}`}
          >
            {'<'}
          </button>

          <button
            onClick={() => setCurrentPage(1)}
            className={`w-12 h-12 rounded-xl font-bold transition-all ${currentPage === 1 ? 'bg-[#2D79F3] text-white shadow-lg' : 'bg-[#F2F4F7] text-gray-600'}`}
          >
            1
          </button>

          <button
            onClick={() => setCurrentPage(2)}
            className={`w-12 h-12 rounded-xl font-bold transition-all ${currentPage === 2 ? 'bg-[#2D79F3] text-white shadow-lg' : 'bg-[#F2F4F7] text-gray-600'}`}
          >
            2
          </button>

          <button
            onClick={() => setCurrentPage(2)}
            disabled={currentPage === 2}
            className={`w-12 h-12 border rounded-xl flex items-center justify-center ${currentPage === 2 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50'}`}
          >
            {'>'}
          </button>
        </div>

        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          {t('movies.page_info', {
            currentPage,
            totalPages,
            totalMovies: currentMovies.length,
          })}
        </p>
      </div>
    </div>
  );
}