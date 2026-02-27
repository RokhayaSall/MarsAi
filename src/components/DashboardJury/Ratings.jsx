import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Ratings() {
  const [rating, setRating] = useState(0); // intialisation du compteur
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const movieId = Number(id);
  const navigate = useNavigate(); 


  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const token = localStorage.getItem('token'); //recupère le token

    fetch(`${import.meta.env.VITE_API_URL}/ratings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        rate: rating,
        movieId: movieId,
      }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Erreur serveur JSON');
        return res.json();
      })
      .then(() =>{
        navigate('/dashboard/jury')
      })

      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false));
  }
  if (isLoading) return <h2 className="err-loading">Chargement...</h2>;
  if (error) return <h2 className="err-loading">Erreur : {error}</h2>;

  return (
    <section className="bg-[#F2F3F5] rounded-4xl p-10 mt-5 gap-0.5  border border-[#D5DAE1] flex flex-col items-center md:w-full md:mx-auto  ">
      <h3 className="font-bold text-2xl text-[#1e293b]">Noter le film </h3>
      <ul className="flex justify-center text-4xl mt-5 md:gap-2 ">
        {[...Array(10)].map((_, index) => {
          //tableau de 10 étoiles
          return (
            <li
              key={index}
              className={`${index + 1 <= rating ? 'text-[#e74431]' : 'text-gray-600'}  cursor-pointer transition-transform duration-300 ease-out hover:scale-130 `}
              onClick={() => {
                setRating(index + 1); // ajoute +1 a chaque clique
              }}
            >
              &#9733;
            </li>
          );
        })}
      </ul>
      <p className="font-medium flex text-center text-lg">
        Votre note : {rating}/10
      </p>
      <button
        type="submit"
        onClick={handleSubmit}
        className=" bg-[#1e293b] hover:bg-[#29455e] transition-colors cursor-pointer w-full md:w-50 text-white font-bold rounded-xl py-2 px-6 text-center m-4 "
      >
        VALIDER MA NOTE
      </button>
    </section>
  );
}
