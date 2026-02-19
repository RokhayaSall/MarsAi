import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from '../components/MovieInfo';
import VideoPlayer from '../components/VideoPlayer';

// On l'appelle MoviePage pour correspondre à ton import dans App.jsx
const MoviePage = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || id === "undefined") return;

    fetch(`http://localhost:3001/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-20 text-center">Chargement...</div>;
  if (!movieData) return <div className="p-20 text-center">Film non trouvé</div>;

  return (
    <div className="max-w-5xl mx-auto p-10">
        <VideoPlayer 
          url={movieData.youtube_url} 
          thumbnail={movieData.cover_image} 
        />
      <MovieInfo 
        title={movieData.original_title}
        director={movieData.director || "Inconnu"} 
        origin={movieData.language}
        shareUrl={window.location.href}
      />
      
    
    </div>

  );
};

// C'est cet export qui permet à App.jsx de voir "MoviePage"
export default MoviePage;