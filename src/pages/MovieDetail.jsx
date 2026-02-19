import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieInfo from '../components/MovieInfo';
import VideoPlayer from '../components/VideoPlayer';
import SynopsisStack from '../components/SynopsisStack';

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

  if (loading) return <div className="min-h-screen flex items-center justify-center text-gray-500 uppercase tracking-widest">Chargement...</div>;
  if (!movieData) return <div className="min-h-screen flex items-center justify-center text-red-500 uppercase">Film non trouvé</div>;

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      <div className="max-w-4xl mx-auto px-4 pt-6">
        
        {/* Bouton Retour */}
        <Link to="/gallery" className="inline-flex items-center text-sm font-bold text-[#2563EB] mb-6 hover:opacity-70">
          <span className="mr-2">←</span> RETOUR GALERIE
        </Link>

        {/* Section Vidéo */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-8 bg-black aspect-video border-4 border-white">
          <VideoPlayer url={movieData.youtube_url} thumbnail={movieData.cover_image} />
        </div>

        {/* Infos Principales */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-8">
          <MovieInfo 
            title={movieData.original_title}
            director={movieData.director} 
            origin={movieData.language}
            shareUrl={window.location.href}
          />
        </div>

        {/* Synopsis et Tech Stack */}
        <SynopsisStack 
          synopsis={movieData.original_synopsis}
          techStack={movieData.ia_tools} 
        />
        
      </div>
    </div>
  );
};

export default MoviePage;