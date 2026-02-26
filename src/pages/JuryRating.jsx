import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ratings from "../components/DashboardJury/Ratings";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${import.meta.env.VITE_API_URL}/api/movies-and-directors/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Impossible de récupérer le film");
        return res.json();
      })
      .then(data => setMovie(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Chargement du film...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!movie) return <p>Film introuvable</p>;

  return (



    <section className=" p-15 m-10 rounded-4xl border border-[#D5DAE1] flex flex-col md:w-200 md:mx-auto">
    <h2 className="text-3xl font-bold ">Nom du film : {movie.original_title || movie.english_title}</h2>
    <h3 className="text-xl font-bold mt-2 ">Réalisateur : {movie.director}</h3>


  {movie.video_url && (
    <div className="overflow-hidden rounded-2xl mt-4" 
    aria-label="Vidéo du film">
      <video className="w-full aspect-video" controls>
        <source src={movie.video_url} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  )}

  <Ratings movieId={movie.id} />
</section>

  );
}