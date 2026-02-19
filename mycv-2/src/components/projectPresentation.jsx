import React from "react";

const projectPresentation = ({ project }) => {
  // État par défaut quand rien n'est survolé
  if (!project) {
    return (
      <div className="flex flex-col items-center w-[30vw] h-[98%] bg-white rounded-2xl shadow-lg justify-center p-8">
        <div className="animate-pulse flex flex-col items-center">
          <h2 className="text-xl font-mono text-slate-500 uppercase tracking-widest">
            _Select a Component
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Hover over the 3D workstation to explore
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden p-8 h-[98%] w-[30vw] bg-white rounded-2xl shadow-lg">
      {/* Indicateur visuel : change de couleur si c'est juste un hover ? (optionnel) */}
      <div className="absolute left-0 top-0 h-full w-2 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>

      <div className="flex flex-col h-full justify-between">
        {/* Section Titre et Stats */}
        <div className="flex-1 text-left">
          <span className="text-xs font-bold text-blue-600 tracking-[0.3em] uppercase mb-2 block">
            Technical Module // {project.id}
          </span>
          <h2 className="text-4xl font-black text-slate-900 leading-none mb-4">
            {project.title.toUpperCase()}
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-2 py-1 bg-slate-900 text-white rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Section Description */}
        <div className="flex-[1.5] border-l border-slate-200 pl-8">
          <p className="text-slate-600 leading-relaxed text-lg italic">
            "{project.description}"
          </p>
          <button className="mt-4 flex items-center gap-2 text-sm font-bold text-blue-700 hover:gap-4 transition-all">
            VIEW PROJECTS <span className="text-xl">→</span>
          </button>
        </div>
        {/* Footer info */}
        <div className="mt-auto pt-4">
          <p className="text-[9px] text-slate-400 font-mono uppercase">
            Status: Data_Synchronized
          </p>
        </div>
      </div>
    </div>
  );
};

export default projectPresentation;
