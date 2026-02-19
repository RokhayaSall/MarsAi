import React from 'react';

const MovieInfo = ({ title, director, origin, shareUrl }) => {
  
  const handleCopy = () => {
    if (shareUrl) {
      navigator.clipboard.writeText(shareUrl);
      alert("Lien copié !");
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-10 border-[3px] border-dashed border-[#A5D7E8] shadow-sm">
      <h1 className="text-5xl font-[900] text-[#2D2E32] uppercase mb-10 tracking-tighter">
        {title || "Titre du film"}
      </h1>

      <div className="flex gap-16 mb-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 border border-red-100 rounded-xl flex items-center justify-center text-red-400 text-xl">👤</div>
          <div>
            <p className="text-[11px] uppercase text-gray-400 font-extrabold tracking-widest">Réalisateur</p>
            {/* ✅ Affiche maintenant le nom transformé par le controller */}
            <p className="font-black text-[#2D2E32] text-lg">{director || "Chargement..."}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 border border-blue-100 rounded-xl flex items-center justify-center text-blue-400 text-xl">🌐</div>
          <div>
            <p className="text-[11px] uppercase text-gray-400 font-extrabold tracking-widest">Origine</p>
            <p className="font-black text-[#2D2E32] text-lg">{origin || "N/A"}</p>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <p className="text-[11px] font-[900] uppercase tracking-[0.2em] text-gray-500">Partager ce film</p>
        <div className="flex gap-3">
          {['X', 'IN', 'IG', 'YT', 'FB'].map(icon => (
            <div key={icon} className="w-11 h-11 bg-[#2D2E32] rounded-xl flex items-center justify-center cursor-pointer hover:bg-black transition-colors text-white font-bold text-xs">
              {icon}
            </div>
          ))}
        </div>
        
        <div className="flex items-center gap-3 mt-6">
           <div className="flex-1 bg-[#F5F7F9] border border-gray-100 rounded-full px-6 py-3 text-[11px] text-gray-400 font-mono truncate">
             {shareUrl}
           </div>
           <button 
             onClick={handleCopy}
             className="bg-[#2D2E32] text-white text-[11px] font-black px-8 py-3 rounded-full uppercase hover:opacity-90 transition-opacity flex items-center gap-2"
           >
             <span>📋</span> Copier
           </button>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;