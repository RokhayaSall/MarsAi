import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MovieInfo from '../components/MovieInfo';
import VideoPlayer from '../components/VideoPlayer';
import SynopsisStack from '../components/SynopsisStack';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineLightningBolt,
} from 'react-icons/hi';

const MoviePage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!id || id === 'undefined') return;
    fetch(`http://localhost:3001/api/movies/${id}`)
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

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F172A]">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-t-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
      <p className="mt-6 text-blue-200/50 font-light tracking-[0.3em] uppercase text-[10px]">Chargement de l&aposœuvre</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-indigo-900/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-24">
        {/* Navigation */}
        <header className="flex justify-between items-center mb-12">
          <Link
            to="/gallery"
            className="group flex items-center text-[10px] font-black tracking-[0.2em] text-slate-400 hover:text-white transition-all"
          >
            <HiOutlineArrowNarrowLeft className="mr-3 w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            {t('backToGallery')}
          </Link>
          <div className="px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/40 backdrop-blur-md text-[10px] font-bold tracking-widest text-blue-400">
            {t('projectId', { id: id?.padStart(4, '0') })}
          </div>
        </header>

        {/* Hero Section: Video */}
        <section className="relative mb-20">
          <div className="absolute -inset-4 bg-gradient-to-b from-blue-500/10 to-transparent opacity-50 blur-2xl rounded-[3rem]"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] bg-black aspect-video ring-1 ring-white/10">
        <VideoPlayer url={movieData.video_url || movieData.youtube_url} thumbnail={movieData.cover_image} />          </div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-16">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-5xl md:text-7xl font-serif italic mb-6 bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent leading-tight">
                {movieData.original_title}
              </h1>
              <MovieInfo
                director={movieData.director}
                origin={movieData.language}
                shareUrl={window.location.href}
                variant="minimal"
              />
            </div>

            <div className="h-px bg-gradient-to-r from-slate-800 to-transparent"></div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-blue-400">
                <HiOutlineLightningBolt className="w-5 h-5" />
                <h3 className="text-xs font-black uppercase tracking-[0.3em]">Story & Intelligence</h3>
              </div>
              <SynopsisStack
                synopsis={movieData.original_synopsis}
                techStack={movieData.ia_tools}
              />
            </div>
          </div>

          {/* Technical Sidebar */}
          <aside className="lg:col-span-4 sticky top-12 space-y-6">
            <div className="bg-slate-900/40 backdrop-blur-xl rounded-[2rem] p-8 border border-white/5 shadow-2xl">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">Specifications</h4>
              
              <div className="space-y-8">
                <div className="group">
                  <p className="text-[9px] text-blue-500 font-black uppercase mb-1 tracking-tighter">Runtime</p>
                  <p className="text-3xl font-light tracking-tight">{movieData.duration}<span className="text-sm text-slate-500 ml-1 italic">min</span></p>
                </div>

                <div className="group">
                  <p className="text-[9px] text-blue-500 font-black uppercase mb-1 tracking-tighter">Original Audio</p>
                  <p className="text-2xl font-light tracking-tight">{movieData.language}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <div className="flex items-center justify-between p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                    <span className="text-[10px] font-bold text-blue-300 uppercase italic">Status</span>
                    <span className="flex items-center text-[10px] font-bold text-white uppercase">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
                      {t('verifiedSelection')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div className="p-1 rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-900 shadow-inner">
               <div className="px-8 py-6 rounded-[1.9rem] bg-[#020617] text-center border border-white/5">
                  <p className="text-[10px] text-slate-500 font-medium">Partager cette œuvre</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    {/* Tes boutons de partage ici */}
                  </div>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
