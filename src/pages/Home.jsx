import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="relative text-center bg-[url(src/assets/sunset.jpg)] bg-cover bg-center bg-gray-500 bg-blend-multiply p-10 pt-40 pb-40 md:p-45">
        <h1 className="text-white font-bold text-5xl text-shadow-lg/70   md:w-full ">
          IMAGINEZ DES
          <span className="text-[#ff5845] "> FUTURS</span> SOUHAITABLES
        </h1>

        <p className="text-white text-2xl font-bold text-shadow-lg/70 m-8 mb-15 md:mb-6">
          Le festival de courts-métrages de 60 secondes réalisés par IA. 2 jours
          d&apos;immersion au cœur de Marseille.
        </p>

        <Link
          className="bg-[#2b71b1] text-white  rounded-4xl p-4 px-8 font-bold text-2xl m-4 cursor-pointer md:p-3 md:px-5 md:text-lg"
          to="/form-director"
        >
          Participer maintenant
        </Link>

        <button className="bg-[#FFFFFF]  rounded-4xl p-4 px-10  font-bold cursor-pointer text-2xl m-10 md:p-3 md:px-5 md:m-1 md:text-lg  ">
          En savoir plus
          <span className="text-[#ff5845] text-2xl md:text-xl "> +</span>
        </button>
      </section>
    </>
  );
}
export default Home;
