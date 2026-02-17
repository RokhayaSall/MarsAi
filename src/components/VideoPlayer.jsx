import React from 'react';

const VideoPlayer = ({ url, thumbnail }) => {
  // Petite fonction pour transformer une URL youtube standard en URL embed
  const getEmbedUrl = (videoUrl) => {
    if (!videoUrl) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = videoUrl.match(regExp);
    return (match && match[2].length === 11) 
      ? `https://www.youtube.com/embed/${match[2]}`
      : null;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden border-[3px] border-dashed border-[#A5D7E8] bg-black">
      {embedUrl ? (
        /* Si on a une URL valide, on affiche l'iframe */
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        /* Sinon, on affiche ta miniature avec le bouton play (fallback) */
        <div className="relative w-full h-full">
          <img 
            src={thumbnail} 
            alt="Thumbnail" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-14 bg-[#FF0000] rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-xl">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;