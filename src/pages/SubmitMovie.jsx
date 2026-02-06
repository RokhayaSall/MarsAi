import React from 'react';
import FilmIdentityForm from "../components/FilmIdentity";
import IaDeclaration from "../components/IaDeclaration";
import Livrables from '../components/Livrables';
import OwnershipCertificate from '../components/OwnershipCertificate';
import { WiStars } from "react-icons/wi";



const SubmitMovie = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé !");
  };

  return (
    <div className="min-h-screen bg-slate- py-12 px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-row items-center justify-center gap-3">
          <WiStars className="w-20 h-20 text-red-400" />
          <h2 className="text-3xl text-red-500 mt-5 flex flex-col items-center justify-center "> Appel à projets 2026</h2>
        </div>
        <h1 className="text-6xl font-extrabold mt-5 text-slate-900 text-center uppercase">Soumettre un film</h1>
        <h3 className=" text-1xl text-slate-500 mt-2 flex flex-col items-center justify-center gap-3">Veuillez remplir les informations ci-dessous.</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <FilmIdentityForm />
        <IaDeclaration />
        <Livrables />
        <OwnershipCertificate />



        <div className="max-w-4xl mx-auto mt-8 flex justify-end ">
          <button
            type="submit"
            className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg">
            Finaliser ma soumission          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitMovie;