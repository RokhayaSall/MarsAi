import React from 'react';
import { useTranslation } from 'react-i18next';
import FilmIdentityForm from '../components/FilmIdentity';
import IaDeclaration from '../components/IaDeclaration';
import Livrables from '../components/Livrables';
import OwnershipCertificate from '../components/OwnershipCertificate';
import { WiStars } from 'react-icons/wi';

const SubmitMovie = () => {
  const { t } = useTranslation();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(t('submit_movie.form_submitted'));
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-row items-center justify-center gap-3">
          <WiStars className="w-20 h-20 text-red-400" />
          <h2 className="text-3xl text-red-500 mt-5 flex flex-col items-center justify-center">
            {t('submit_movie.appel_projets_2026')}
          </h2>
        </div>
        <h1 className="text-6xl font-extrabold mt-5 text-slate-900 text-center uppercase">
          {t('submit_movie.submit_film')}
        </h1>
        <h3 className="text-1xl text-slate-500 mt-2 flex flex-col items-center justify-center gap-3">
          {t('submit_movie.fill_info')}
        </h3>
      </div>

      <form onSubmit={handleSubmit}>
        <FilmIdentityForm />
        <IaDeclaration />
        <Livrables />
        <OwnershipCertificate />

        <div className="max-w-4xl mx-auto mt-8 flex justify-end">
          <button
            type="submit"
            className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg"
          >
            {t('submit_movie.finalize_submission')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitMovie;