import React from 'react';

const VideoPlayer = ({ url, thumbnail }) => {
  // Détecter si c'est du YouTube
  const getEmbedUrl = (videoUrl) => {
    if (!videoUrl) return null;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = videoUrl.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : null;
  };

  const embedUrl = getEmbedUrl(url);
  
  // Détecter si c'est un fichier vidéo direct (Scaleway, MP4, etc.)
  // On vérifie si l'URL finit par une extension vidéo ou contient "s3" (Scaleway)
  const isDirectVideo = url && (
    url.match(/\.(mp4|webm|ogg|mov)$/i) || 
    url.includes('s3.fr-par.scw.cloud')
  );

  return (
    <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden bg-black ring-1 ring-white/10">
      {/* CAS 1 : C'est une vidéo YouTube */}
      {embedUrl ? (
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) 
      /* CAS 2 : C'est un fichier vidéo direct (Scaleway) */
      : isDirectVideo ? (
        <video
          className="w-full h-full object-contain"
          controls
          poster={thumbnail} // Affiche la vignette pendant le chargement
          playsInline
        >
          <source src={url} type="video/mp4" />
          <source src={url} type="video/quicktime" /> {/* Pour les .mov */}
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      ) 
      /* CAS 3 : Rien n'est chargé ou erreur */
      : (
        <div className="relative w-full h-full flex items-center justify-center">
          {thumbnail && (
            <img 
              src={thumbnail} 
              alt="Thumbnail" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm"
            />
          )}
          <p className="relative text-slate-500 text-xs font-bold uppercase tracking-widest">
            Source vidéo non disponible
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
