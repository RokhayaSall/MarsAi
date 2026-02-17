import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import VideoPlayer from '../components/VideoPlayer'; 
import MovieInfo from '../components/MovieInfo';
import SynopsisStack from '../components/SynopsisStack';

const MovieDetail = () => {
  const { id } = useParams(); 
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On appelle ton API (ajuste le port 5000 si besoin)
    fetch(`http://localhost:3001/api/movies/${id}`)
      .then(res => res.json())
      .then(data => {
        setMovieData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur fetch:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="animate-pulse font-bold text-blue-500">CHARGEMENT DU FILM...</p>
      </div>
    );
  }

  if (!movieData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-red-500 font-bold">FILM INTROUVABLE MEC !!!!!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 min-h-screen font-sans">
      <button 
        onClick={() => window.history.back()} 
        className="text-blue-500 uppercase text-xs font-bold mb-4 flex items-center hover:underline"
      >
        ← RETOUR GALERIE
      </button>

      <div className="flex flex-col gap-6">
        
        <VideoPlayer 
          url={movieData.youtube_url} 
          thumbnail={movieData.cover_image} 
        />

        <MovieInfo 
          title={movieData.original_title}
          // On cherche dans le tableau 'collaborators' celui qui a la contribution 'Réalisateur'
          director={movieData.collaborators?.find(c => c.contribution === 'Réalisateur')?.lastname || "Inconnu"}
          origin={movieData.language}
          shareUrl={window.location.href}
        />

        <SynopsisStack 
          synopsis={movieData.original_synopsis}
          techStack={movieData.ia_tools} 
        />

      </div>
    </div>
  );
};

export default MovieDetail;