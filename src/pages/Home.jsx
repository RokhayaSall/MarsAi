import ButtonParticipate from '../components/ui/Button.jsx';
import { MdLocalMovies } from 'react-icons/md';
import { BsPersonArmsUp } from 'react-icons/bs';
import { GrUserExpert } from 'react-icons/gr';
import { IoBook } from 'react-icons/io5';
import Card from '../components/ui/Card.jsx';

function Home() {
  const card = [
    {
      id: 1,
      icon: MdLocalMovies,
      title: '1 MINUTE',
      text: "Format ultra-court pour maximiser l'impact créatif.",
    },
    {
      id: 2,
      icon: IoBook,
      title: 'GRATUITÉ',
      text: 'Conférences et workshops accessibles à tous.',
    },
    {
      id: 4,
      icon: BsPersonArmsUp,
      title: 'POUR TOUS',
      text: 'Professionnels, étudiants et curieux.',
    },
    {
      id: 5,
      icon: GrUserExpert,
      title: 'EXPERTISE',
      text: "Rencontrez les leaders mondiaux de l'IA.",
    },
  ];

  return (
    <>
      <section className="relative text-center bg-[url(src/assets/sunset.jpg)] bg-cover bg-center bg-gray-500 bg-blend-multiply p-10 pt-30 pb-30 md:p-45">
        <h1 className="text-white font-bold text-5xl text-shadow-lg/70   md:w-full ">
          IMAGINEZ DES
          <span className="text-[#ff5845] "> FUTURS</span> SOUHAITABLES
        </h1>

        <p className="text-white text-xl font-bold text-shadow-lg/70 m-8 mb-15 md:mb-6 md:text-2xl">
          Le festival de courts-métrages de 60 secondes réalisés par IA. 2 jours
          d&apos;immersion au cœur de Marseille.
        </p>
        <ButtonParticipate />

        <button className="bg-[#FFFFFF]  rounded-4xl p-4 px-10  font-bold cursor-pointer text-2xl m-10 md:p-3 md:px-5 md:m-1 md:text-lg ">
          En savoir plus
          <span className="text-[#ff5845] text-2xl md:text-xl "> +</span>
        </button>
      </section>

      <section className="p-20 md:p-15 md:pt-20 bg-[#EFEFEF] ">
        <h2 className="font-bold text-4xl w-50 mb-5 md:text-5xl md:w-max">
          {' '}
          LE PROJET MARS.A.I{' '}
        </h2>
        <p className="w-80 md:w-200">
          Un événement hybride unique en France, réunissant la fine fleur de
          l&apos;IA générative et de la création cinématographique.
        </p>

        <div
          className="flex flex-col items-center gap-6 mt-8 mb-8 md: md:flex-row justify-around  "
          aria-label="Description projet MarsAI"
        >
          {card.map(card => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default Home;
