import React from 'react';

const SynopsisStack = ({ synopsis, techStack }) => {
  const tools = techStack ? techStack.split(',').map(t => t.trim()) : [];

  return (
    <div className="bg-[#1A1A1A] text-white rounded-[2.5rem] p-12  border-dashed border-[#314E63]">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-red-500 text-2xl">📖</span>
          <h2 className="text-[#FF4B4B] font-black uppercase tracking-[0.3em] text-xs">Synopsis</h2>
        </div>
        <p className="text-[#D1D1D1] leading-relaxed text-base font-medium max-w-2xl">
          {synopsis}
        </p>
      </div>

      <div className="pt-4">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#4DA9FF] text-2xl">⚙️</span>
          <h2 className="text-[#4DA9FF] font-black uppercase tracking-[0.3em] text-xs">Tech Stack & IA</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, index) => (
            <span 
              key={index} 
              className="px-7 py-2 border border-[#444] rounded-full text-[10px] font-black uppercase tracking-widest hover:border-white transition-all cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SynopsisStack; 