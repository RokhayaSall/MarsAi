import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ratings from "../components/DashboardJury/Ratings";
import VideoPlayer from "../components/VideoPlayer";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState(null); // ajout de cover


  useEffect(() => { //enlever ce fetch garder celui du dessous avec la cover et mettre infos real
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

// ajout de cover
   useEffect(() => {
      window.scrollTo(0, 0);
      if (!id || id === 'undefined') return;
      fetch(`http://localhost:3000/api/movies/${id}`)
        .then(res => res.json())
        .then(data => {
          setMovieData(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }, [id]);
  

  if (loading) return <p>Chargement du film...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!movie) return <p>Film introuvable</p>;

  return (
    <>
    <section className=" m-8 p-8 rounded-4xl border border-[#1c2430] flex flex-col md:w-160 md:mx-auto">
    <h2 className="text-3xl md:text-4xl  font-extrabold ">{movie.original_title || movie.english_title}</h2>
    <h3 className="text-xl font-semibold my-2 mb-5"> <span className="text-slate-600 font-medium text-lg">Réalisé par : </span>  {movie.director}</h3>

  {/* {movie.video_url && (
    <div className="overflow-hidden rounded-2xl mt-4" 
    aria-label="Vidéo du film">
      <video className="w-full aspect-video" controls>
        <source src={movie.video_url} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  )} */}
{/* // ajout de cover */}
   <VideoPlayer
              url={movieData.video_url || movieData.youtube_url}
              thumbnail={movieData.cover_image}/>

  <Ratings movieId={movie.id} />
</section>


</>
  );
}