import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ButtonParticipate,
  ButtonMore,
  ButtonGalery,
} from '../components/ui/Buttons.jsx';
import {
  Card,
  CardMovie,
  CardFestival,
  CardSelection,
  CardCalender,
  CardPlace,
  CardPartner,
} from '../components/ui/Cards.jsx';
import { useCardsData } from '../components/ui/CardsData.jsx';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaHandshakeSimple } from 'react-icons/fa6';

function Home() {
  const { t } = useTranslation();

  const {
    cardsData,
    cardsFestivalData,
    cardsSelectionData,
    cardsInfos,
    cardsPlaces,
    cardsNumber,
    cardsPartner,
  } = useCardsData();

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-center bg-[url(src/assets/ville.jpg)] bg-cover bg-center bg-gray-500 bg-blend-multiply p-10 pt-30 pb-30 md:p-35">
        <h1 className="text-white font-bold text-5xl text-shadow-lg/70 uppercase md:w-full">
          {t('hero.title1')}
          <span className="text-[#ff5845]"> {t('hero.title2')}</span> {t('hero.title3')}
        </h1>

        <p className="text-white text-xl font-semibold text-shadow-lg/90 mt-8 mb-15 md:mb-6 md:text-2xl">
          {t('hero.description')}
        </p>
        <ButtonParticipate />
        <ButtonMore />
      </section>

      {/* Project Section */}
      <section className="p-15 bg-[#EFEFEF]">
        <h2 className="font-bold text-4xl w-50 mb-5 text-[#282828] md:text-5xl md:w-max uppercase">
          {t('project.title')}
        </h2>
        <p className="w-80 md:w-200">{t('project.description')}</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
          {cardsData.map(card => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              text={card.text}
              className="bg-white text-[#64748B]"
            />
          ))}
        </div>
      </section>

      {/* Films Section */}
      <section className="p-15">
        <h2 className="font-bold text-4xl w-50 mb-5 text-[#282828] md:text-5xl md:w-70 uppercase">
          {t('competition.title1')}
          <span className="text-[#2b71b1]"> {t('competition.title2')}</span>
        </h2>

        <p className="md:text-xl md:w-200">{t('competition.description')}</p>

        <div className="grid grid-cols-1 md:flex justify-between gap-10 mb-10 mt-10">
          <CardMovie />
          <CardMovie />
          <CardMovie />
        </div>

        <ButtonGalery />
      </section>

      {/* Festival Goals Section */}
      <section className="p-15 bg-[#282828]">
        <h2 className="font-bold text-4xl w-70 mb-5 text-white uppercase md:text-5xl md:w-90">
          {t('goals.title1')}
          <span className="text-[#FF5845]"> {t('goals.title2')}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 mt-10">
          {cardsFestivalData.map(card => (
            <CardFestival
              key={card.id}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </section>

      {/* Selection Format Section */}
      <section className="p-15 bg-[#EFEFEF]">
        <h2 className="font-bold text-4xl mb-5 text-center text-[#282828] md:text-5xl uppercase">
          {t('selection.title')}
        </h2>

        <p className="text-center uppercase text-[#6B6B6B]">
          {t('selection.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
          {cardsSelectionData.map(card => (
            <CardSelection
              key={card.id}
              title={card.title}
              text={card.text}
              description={card.description}
            />
          ))}
        </div>

        <ButtonParticipate className="md:block w-fit mx-auto" />
      </section>

      {/* Conferences Section */}
      <section id="buttonMore" className="p-15 bg-[#282828]">
        <h2 className="font-bold text-4xl text-white md:text-5xl uppercase w-77 md:w-150">
          {t('conferences.title1')}
          <span className="text-[#FF5845]"> {t('conferences.title2')}</span>
          {t('conferences.title3')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 mt-10">
          {cardsInfos.map(card => (
            <CardFestival
              key={card.id}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </section>

      {/* Night Event Section */}
      <section className="relative bg-[url(src/assets/marsai-night.avif)] bg-cover bg-center bg-gray-600 bg-blend-multiply rounded-4xl m-15 mt-15 p-10 pt-20 pb-20 flex flex-col md:flex-row md:items-center md:justify-around md:p-15">
        <div aria-label="Prendre mon pass">
          <h2 className="text-white font-bold text-4xl text-shadow-lg/70 uppercase w-70 md:text-7xl">
            {t('night.title')}
          </h2>

          <p className="text-white text-xl text-shadow-lg/70 mt-5 mb-15 md:w-100 md:mb-6">
            {t('night.description')}
          </p>
        </div>

        <CardCalender />
      </section>

      {/* Location Section */}
      <section className="p-15 bg-[#EFEFEF]">
        <p className="flex items-center font-semibold text-[#195d9c] text-xl uppercase gap-3">
          <FaMapMarkerAlt /> {t('location.title')}
        </p>

        <h2 className="font-bold text-4xl mb-3 mt-5 text-[#282828] w-70 md:text-5xl md:w-full uppercase">
          {t('location.name')}
        </h2>

        <h3 className="font-bold text-2xl uppercase text-[#6B6B6B] md:text-xl">
          {t('location.subtitle')}
        </h3>

        <p className="text-[#6B6B6B] font-semibold text-xl mt-2">
          {t('location.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 mt-10 md:mb-5">
          {cardsPlaces.map(card => (
            <CardSelection
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <CardPlace />
      </section>

      {/* Project Numbers Section */}
      <section className="bg-white p-15 flex flex-col md:flex-row md:items-center md:justify-around">
        <div aria-label="Chiffres projetés">
          <h2 className="font-bold text-4xl uppercase w-70">
            {t('numbers.title1')}
            <span className="text-[#2b71b1]"> {t('numbers.title2')}</span>
          </h2>

          <p className="text-xl text-[#6B6B6B] font-semibold mt-5 mb-15 md:w-90 md:mb-6">
            {t('numbers.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {cardsNumber.map(card => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              text={card.text}
              className="bg-[#EFEFEF] md:p-10"
            />
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="p-15 bg-[#EFEFEF]">
        <p className="flex items-center font-semibold text-[#195d9c] text-xl uppercase gap-3">
          <FaHandshakeSimple /> {t('partners.title')}
        </p>

        <h2 className="font-bold text-4xl mb-3 mt-5 text-[#282828] w-80 md:text-5xl md:w-full uppercase">
          {t('partners.subtitle1')}
          <span className="text-[#2b71b1]"> {t('partners.subtitle2')}</span>
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 mt-15">
          {cardsPartner.map(card => (
            <CardPartner key={card.id} src={card.src} alt={card.alt} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;