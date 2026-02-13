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
import {
  cardsData,
  cardsFestivalData,
  cardsSelectionData,
  cardsInfos,
  cardsPlaces,
  cardsNumber,
  cardsPartner,
} from '../components/ui/CardsData.jsx';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaHandshakeSimple } from 'react-icons/fa6';

function Home() {
  return (
    <>
      <section className="relative text-center bg-[url(src/assets/ville.jpg)] bg-cover bg-center bg-gray-500 bg-blend-multiply p-10 pt-30 pb-30 md:p-35">
        <h1 className="text-white font-bold text-5xl text-shadow-lg/70  uppercase md:w-full ">
          IMAGINEZ DES
          <span className="text-[#ff5845] "> FUTURS</span> SOUHAITABLES
        </h1>

        <p className="text-white text-xl font-semibold text-shadow-lg/90 mt-8 mb-15 md:mb-6 md:text-2xl">
          Le festival de courts-métrages de 60 secondes réalisés par IA. 2 jours
          d&apos;immersion au cœur de Marseille.
        </p>
        <ButtonParticipate />
        <ButtonMore />
      </section>

      <section className="p-15 bg-[#EFEFEF] ">
        <h2 className="font-bold text-4xl w-50 mb-5 text-[#282828] md:text-5xl md:w-max uppercase">
          LE PROJET MARS.A.I
        </h2>
        <p className="w-80 md:w-200">
          Un événement hybride unique en France, réunissant la fine fleur de
          l&apos;IA générative et de la création cinématographique.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10  "
          aria-label="Description projet MarsAI"
        >
          {cardsData.map(card => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              text={card.text}
              className={`bg-white text-[#64748B]`}
            />
          ))}
        </div>
      </section>

      <section className="p-15 ">
        <h2 className="font-bold text-4xl w-50 mb-5 text-[#282828] md:text-5xl md:w-70 uppercase">
          FILMS EN
          <span className="text-[#2b71b1]"> COMPÉTITION</span>
        </h2>
        <p className="md:text-xl md:w-200">
          Découvrez une sélection d&apos;œuvres pionnières qui explorent les
          nouvelles frontières de l&apos;imaginaire assisté par
          l&apos;Intelligence Artificielle.
        </p>
        <div
          className="grid grid-cols-1 md:flex justify-between gap-10 mb-10 mt-10"
          aria-label="Aperçu de film"
        >
          <CardMovie />
          <CardMovie />
          <CardMovie />
        </div>
        <ButtonGalery />
      </section>

      <section className="p-15 bg-[#282828]">
        <h2 className="font-bold text-4xl w-70 mb-5 text-white uppercase md:text-5xl md:w-90 ">
          OBJECTIFS DU
          <span className="text-[#FF5845]"> FESTIVAL</span>
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 mt-10 "
          aria-label="Obectifs du festival"
        >
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

      <section className="p-15 bg-[#EFEFEF] ">
        <h2 className="font-bold text-4xl mb-5 text-center text-[#282828] md:text-5xl uppercase">
          Format de la seléction
        </h2>
        <p className="text-center uppercase  text-[#6B6B6B]">
          Le parcours des oeuvres
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10  "
          aria-label="Format de la sélection"
        >
          {cardsSelectionData.map(card => (
            <CardSelection
              key={card.id}
              title={card.title}
              text={card.text}
              description={card.description}
            />
          ))}
        </div>
        <ButtonParticipate className={`md:block w-fit mx-auto`} />
      </section>

      <section id="buttonMore" className="p-15 bg-[#282828]">
        <h2 className="font-bold text-4xl  text-white md:text-5xl uppercase w-77 md:w-150">
          Deux journées de
          <span className="text-[#FF5845]"> conférences</span> gratuites
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 mt-10  "
          aria-label="Le coeur du festival"
        >
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

      <section className="relative bg-[url(src/assets/marsai-night.avif)] bg-cover bg-center bg-gray-600 bg-blend-multiply rounded-4xl m-15 mt-15 p-10 pt-20 pb-20 flex flex-col md:flex-row md:items-center md:justify-around md:p-15 ">
        <div className="" aria-label="Prendre mon pass">
          <h2 className="text-white font-bold text-4xl text-shadow-lg/70  uppercase w-70 md:text-7xl">
            Mars.A.I night
          </h2>
          <p className="text-white text-xl text-shadow-lg/70  mt-5 mb-15 md:w-100 md:mb-6">
            Fête mêlant IA et futurs souhaitables. Une expérience immersive
            sonore et visuelle.
          </p>
        </div>
        <CardCalender />
      </section>

      <section className="p-15 bg-[#EFEFEF] ">
        <p className="flex items-center font-semibold text-[#195d9c] text-xl uppercase gap-3">
          <FaMapMarkerAlt />
          Le lieu
        </p>
        <h2 className="font-bold text-4xl mb-3 mt-5 text-[#282828] w-70 md:text-5xl  md:w-full uppercase">
          La
          <span className="text-[#2b71b1]"> plateforme</span>{' '}
        </h2>
        <h3 className="font-bold text-2xl uppercase text-[#6B6B6B] md:text-xl ">
          (Ex dock des suds)
        </h3>
        <p className="text-[#6B6B6B] font-semibold text-xl mt-2">
          4 000 m² d&apos;espaces modulables dans le centre de Marseille, au
          cœur de l&apos;écosystème numérique.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 mt-10 md:mb-5  "
          aria-label="Salles du centre la plateforme"
        >
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

      <section className="bg-white p-15  flex flex-col md:flex-row md:items-center md:justify-around ">
        <div aria-label="Chiffres projetés ">
          <h2 className="text- font-bold text-4xl uppercase w-70 ">
            Chiffres <span className="text-[#2b71b1]">projetés</span>
          </h2>
          <p className="text-xl text-[#6B6B6B] font-semibold mt-5 mb-15 md:w-90 md:mb-6">
            Basé sur l&apos;expertise du Mobile Film Festival et le rayonnement
            de La Plateforme.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10    "
          aria-label="Chiffres projetés"
        >
          {cardsNumber.map(card => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              text={card.text}
              className={`bg-[#EFEFEF]  md:p-10`}
            />
          ))}
        </div>
      </section>

      <section className="p-15 bg-[#EFEFEF] ">
        <p className="flex items-center font-semibold text-[#195d9c] text-xl uppercase gap-3">
          <FaHandshakeSimple /> Nos partenaires
        </p>
        <h2 className="font-bold text-4xl mb-3 mt-5 text-[#282828] w-80 md:text-5xl md:w-full uppercase">
          Ils soutiennent
          <span className="text-[#2b71b1]"> le futur</span>
        </h2>
        <ul
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 mt-15"
          aria-label="Nos partenaires"
        >
          {cardsPartner.map(card => (
            <CardPartner key={card.id} src={card.src} alt={card.alt} />
          ))}
        </ul>
      </section>
    </>
  );
}
export default Home;
