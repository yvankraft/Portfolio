import React from "react";

const projectPresentation = ({ project }) => {
  // État par défaut quand rien n'est survolé
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-64 border-t border-slate-300 bg-slate-200/50 backdrop-blur-md">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-1 bg-blue-500 mb-4 rounded-full"></div>
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
    <div className="relative overflow-hidden h-64 border-t border-blue-400 bg-white/80 backdrop-blur-xl transition-all duration-500 ease-in-out">
      {/* Petit indicateur visuel sur le côté */}
      <div className="absolute left-0 top-0 h-full w-2 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>

      <div className="max-w-4xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center gap-8">
        {/* Section Titre et Stats */}
        <div className="flex-1 text-left">
          <span className="text-xs font-bold text-blue-600 tracking-[0.3em] uppercase mb-2 block">
            Technical Module // {project.id}
          </span>
          <h2 className="text-4xl font-black text-slate-900 leading-none mb-4">
            {project.title.toUpperCase()}
          </h2>
          <div className="flex gap-2">
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
      </div>
    </div>
  );
};

export default projectPresentation;
