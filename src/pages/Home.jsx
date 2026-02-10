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
} from '../components/ui/Cards.jsx';
import {
  cardsData,
  cardsFestivalData,
  cardsSelectionData,
} from '../components/ui/CardsData.jsx';

function Home() {
  return (
    <>
      <section className="relative text-center bg-[url(src/assets/sunset.jpg)] bg-cover bg-center bg-gray-500 bg-blend-multiply p-10 pt-30 pb-30 md:p-45">
        <h1 className="text-white font-bold text-5xl text-shadow-lg/70  uppercase md:w-full ">
          IMAGINEZ DES
          <span className="text-[#ff5845] "> FUTURS</span> SOUHAITABLES
        </h1>

        <p className="text-white text-xl font-bold text-shadow-lg/70 m-8 mb-15 md:mb-6 md:text-2xl">
          Le festival de courts-métrages de 60 secondes réalisés par IA. 2 jours
          d&apos;immersion au cœur de Marseille.
        </p>
        <ButtonParticipate />
        <ButtonMore />
      </section>

      <section className="p-15 md:p-15 md:pt-20 bg-[#EFEFEF] ">
        <h2 className="font-bold text-4xl w-50 mb-5 text-[#282828] md:text-5xl md:w-max uppercase">
          LE PROJET MARS.A.I
        </h2>
        <p className="w-80 md:w-200">
          Un événement hybride unique en France, réunissant la fine fleur de
          l&apos;IA générative et de la création cinématographique.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-15 mt-10  "
          aria-label="Description projet MarsAI"
        >
          {cardsData.map(card => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </section>

      <section className="p-15 md:p-15 md:pt-20">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-15   "
          aria-label="Aperçu de film"
        >
          <CardMovie />
          <CardMovie />
          <CardMovie />
        </div>
        <ButtonGalery />
      </section>

      <section className="p-15 md:p-15 md:pt-20 bg-[#282828]">
        <h2 className="font-bold text-4xl w-70 mb-5 text-white uppercase md:text-5xl md:w-90 ">
          OBJECTIFS DU
          <span className="text-[#FF5845]"> FESTIVAL</span>
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-15 mt-10 "
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

      <section className="p-15 md:p-15 md:pt-20 bg-[#EFEFEF] ">
        <h2 className="font-bold text-4xl mb-5 text-center text-[#282828] md:text-5xl uppercase">
          Format de la seléction
        </h2>
        <p className="text-center uppercase  text-[#6B6B6B]">
          Le parcours des oeuvres
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-15 mt-10   "
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
        <ButtonParticipate className={`block w-fit mx-auto`} />
      </section>
    </>
  );
}
export default Home;
