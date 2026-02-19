import React from "react";

const projectPresentation = ({ project }) => {
  // Mapping des URLs pour chaque technologie
  const techLinks = {
    // Frameworks & Bundlers
    React: "https://react.dev",
    Vite: "https://vite.dev", // Note: vitejs.dev redirige maintenant vers vite.dev
    JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "chart.js": "https://www.chartjs.org",
    "node.js": "https://nodejs.org",

    // Styling
    Tailwind: "https://tailwindcss.com",
    "Tailwind CSS": "https://tailwindcss.com",

    // 3D Engine (Le cœur)
    "Three.js": "https://threejs.org",

    // Écosystème React Three Fiber (Poimandres)
    "React Three Fiber": "https://r3f.docs.pmnd.rs",
    R3F: "https://r3f.docs.pmnd.rs",
    Drei: "https://drei.docs.pmnd.rs",
    Leva: "https://github.com/pmndrs/leva",

    // Animation (GreenSock)
    GSAP: "https://gsap.com",
    ScrollTrigger: "https://gsap.com/docs/v3/Plugins/ScrollTrigger",

    // Formats & Sources
    GLTF: "https://www.khronos.org/gltf",
    Sketchfab: "https://sketchfab.com",
  };

  const projectLinks = {
    "Auto Passion": "https://github.com/yvankraft/Page_web/settings/pages",
    "My CV": "https://yvankraft.github.io/CV/",
    "Chat App": "https://github.com/yvankraft/chat-app",
    "E-Shop Concept": "https://e-shop1-sigma.vercel.app",
    "Prosannal form": "https://personalform-one.vercel.app",
  };

  const handleTechClick = (t) => {
    // On cherche le lien, sinon on fait une recherche Google par défaut
    const url =
      techLinks[t] ||
      `https://www.google.com/search?q=${encodeURIComponent(t)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleProjectClick = (title) => {
    const url =
      projectLinks[title] ||
      `https://www.google.com/search?q=${encodeURIComponent(title)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // État par défaut quand rien n'est survolé
  if (!project) {
    return (
      <div className="flex flex-col items-center w-[30vw] h-[98%] bg-white rounded-2xl shadow-lg justify-center p-8">
        <div className="animate-pulse flex flex-col text-center items-center">
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
          {/* SECTION BOUTONS TECH */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <button
                key={t}
                onClick={(e) => {
                  e.stopPropagation(); // Évite de déclencher d'autres events
                  handleTechClick(t);
                }}
                title={`Learn more about ${t}`}
                className="group relative text-[10px] font-mono px-3 py-1.5 
                           bg-slate-500 text-white rounded-xl font-bold
                           transition-all duration-200 
                           hover:bg-slate-700 hover:scale-110 hover:shadow-md
                           active:scale-95 active:bg-blue-800"
              >
                <span className="relative z-10">{t}</span>
                {/* Petit reflet au hover */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
              </button>
            ))}
          </div>
        </div>

        {/* Section Description */}
        <div className="flex-[1.5] border-l border-slate-200 pl-8">
          <p className="text-slate-600 leading-relaxed text-lg italic">
            "{project.description}"
          </p>
          <button
            onClick={() => handleProjectClick(project.title)}
            className="mt-4 flex items-center gap-2 text-sm font-bold text-blue-700 hover:gap-4 transition-all"
          >
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
