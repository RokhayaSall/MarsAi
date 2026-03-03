import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SuccessMessage, ErrorMessage, LoadingMessage } from '../ui/Alert';

export default function Ratings() {
  const [rating, setRating] = useState(0); // intialisation du compteur
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alreadyNoted, setAlreadyNoted] = useState(null);
  // récupère l'id du movie
  const { id } = useParams();
  const movieId = Number(id);

  function handleSubmit(event) {
    event.preventDefault();

    if (rating === 0) {
      setError('Veuillez sélectionner une note avant de valider');
      return;
    }
    //réinitialise les messages et chargement
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    setAlreadyNoted(null);

    const token = localStorage.getItem('token'); //recupère le token du jury

    fetch(`${import.meta.env.VITE_API_URL}/ratings`, {
      //fetch envoi la note dans la bdd
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
        if (res.status === 409) throw new Error('ALREADY_NOTED'); //erreur film déjà noté
        if (!res.ok) throw new Error('SERVEUR8ERROR'); //erreur serveur
        return res.json();
      })
      .then(() => {
        // si y a pas d'erreurs affiche le message et remet à zéro
        setSuccess(true);
        setRating(0);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch(err => {
        //si y a des erreurs trie selon le message reçu
        if (err.message === 'ALREADY_NOTED') {
          setAlreadyNoted('Vous avez déjà noté ce film');
          setSuccess(false); //cache le message success pour l'instant
        } else {
          setError('Erreur serveur');
        }
      })
      .finally(() => setIsLoading(false)); // arrête le chargement à la fin
  }

  return (
    <section className="bg-[#F2F3F5] rounded-4xl p-10 mt-5 gap-0.5  border border-[#D5DAE1] flex flex-col items-center md:w-full md:mx-auto  ">
      <h3 className="font-bold text-2xl text-[#1e293b]">Noter le film </h3>
      {/* Message */}
      {isLoading && <LoadingMessage message="Chargement" />}
      {alreadyNoted && <ErrorMessage message={alreadyNoted} />}
      {error && <ErrorMessage message={error} />}
      {success && (
        <SuccessMessage message="Votre note a bien été enregistrée" />
      )}
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
        disabled={isLoading || success} //désactive le bouton après un clic pour ne pas surcharger le serveur
        className={` bg-[#1e293b]  transition-colors w-full md:w-50 cursor-pointer text-white font-bold rounded-xl py-2 px-6 text-center m-4
          ${isLoading ? 'opacity-50' : 'hover:bg-[#29455e]'} `}
      >
        VALIDER MA NOTE
      </button>
    </section>
  );
}
