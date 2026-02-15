import React, { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";


const ProjectBox = ({ title, description, stack }) => {

  // On stocke la techno cliquée pour savoir quoi afficher dans la modale
  const [selectedTech, setSelectedTech] = useState(null);


  //on stocke les infos de la techno cliquée pour afficher une modale ou une alerte avec plus d'infos
  const techDatabase = {
    "React": "https://react.dev/",
    "three.js": "https://threejs.org/",
    "Blender": "https://www.blender.org/",
    "Unity": "https://unity.com/",
    "Sketchfab": "https://sketchfab.com/",
    "Vite": "https://vitejs.dev/",
    "Tailwind.css": "https://tailwindcss.com/",
    "DaisyUI": "https://daisyui.com/",
    "GSAP": "https://gsap.com/",
    "Framer Motion": "https://www.framer.com/motion/",
    "Node.js": "https://nodejs.org/",
    "MongoDB": "https://www.mongodb.com/",
    "Vue": "https://vuejs.org/",
    "Firebase": "https://firebase.google.com/",
    "Angular": "https://angular.io/",
    "Express": "https://expressjs.com/",
  };

  const handlePrepareRedirect = (techName) => {
    const url = techDatabase[techName] || `https://www.google.com/search?q=${techName}+docs`;
    setSelectedTech({ name: techName, url: url });
  };

  const handleFinalAgree = () => {
    if (selectedTech?.url) {
      window.open(selectedTech.url, "_blank");
    }
    setSelectedTech(null);
  };
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="bg-slate-500 text-white px-2 py-1 rounded-xl text-sm hover:cursor-pointer hover:scale-110 transition-transform duration-200"
            onClick={() => handlePrepareRedirect(tech)}
          >
            {tech}
          </span>
        ))}
      </div>
      {/* MODALE AVEC DAISYUI & FRAMER MOTION */}
      <AnimatePresence>
        {selectedTech && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Overlay flouté (Backdrop) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTech(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Fenêtre Modale */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-base-100 p-8 rounded-3xl shadow-2xl max-w-sm w-full border border-white/10"
            >
              <h3 className="text-xl font-bold flex items-center gap-2">
              Alert
              </h3>
              <p className="py-4 text-base-content/80">
                you are going to be redirected to <span className="text-primary font-bold">{selectedTech.name}</span>!
              </p>

              <div className="flex gap-3 mt-2">
                {/* Utilisation des classes DaisyUI btn-ghost et btn-primary */}
                <button 
                  className="btn btn-ghost flex-1 rounded-xl active:bg-black active:text-white transition-all"
                  onClick={() => setSelectedTech(null)}
                >
                  Decline
                </button>
                <button 
                  className="btn btn-slate-500 flex-1 rounded-xl shadow-lg shadow-primary/20 active:bg-black active:border-black active:text-white transition-all"
                  onClick={handleFinalAgree}
                >
                  Agree
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectBox;
