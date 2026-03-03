import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Ratings from '../../components/DashboardJury/Ratings';
import VideoPlayer from '../../components/VideoPlayer';

export default function MovieDetail() {
  const { id } = useParams(); // récupère l'id du film
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    window.scrollTo(0, 0); //monte la page en haut
    if (!id || id === 'undefined') return; //si l'id est absent ou mal défini ne fait rien
    fetch(`${import.meta.env.VITE_API_URL}/api/movies/${id}`, {
      //récupérer les détails du film
      headers: {
        Authorization: `Bearer ${token}`, // authentification requise
      },
    })
      .then(res => {
        if (!res.ok) throw new Error('Impossible de récupérer le film');
        return res.json();
      })

      .then(data => {
        setMovieData(data); // stocke les infos du film
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]); //useEffect se relance si l'id dans l'URL change

  // Message d'erreur
  if (loading) return <h2 className="text-2xl m-5">Chargement...</h2>;
  if (error) return <h2 className="text-2xl m-5">Erreur : {error}</h2>;

  return (
    <section className=" m-8 p-8 rounded-4xl border border-[#1c2430] flex flex-col md:w-160 md:mx-auto">
      <h2 className="text-3xl md:text-4xl  font-extrabold ">
        {movieData.original_title || movieData.english_title}
      </h2>
      <h3 className="text-xl font-semibold my-2 mb-5">
        {' '}
        <span className="text-slate-600 font-medium text-lg">
          Réalisé par :{' '}
        </span>{' '}
        {movieData.director}
      </h3>

      <VideoPlayer
        url={movieData.video_url || movieData.youtube_url}
        thumbnail={movieData.cover_image}
      />

      <Ratings movieId={movieData.id} />
    </section>
  );
}
