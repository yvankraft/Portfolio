import React, { useRef, useMemo, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ProjectPresentation from "../components/projectPresentation";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import {
  useGLTF,
  Environment,
  PresentationControls,
  Center,
  useProgress,
} from "@react-three/drei";

// fonction pour les numero
const Hotspot = ({ position, number, onClick }) => {
  return (
    <Html position={position} center distanceFactor={12}>
      <div
        onClick={(e) => {
          e.stopPropagation(); // Empêche l'interaction avec le modèle derrière
          onClick();
        }}
        className="flex p-2 items-center justify-center w-5 h-5 bg-none rounded-full text-white font-bold text-xs cursor-pointer shadow-sm border-2 border-white hover:scale-125 transition-all duration-300"
      >
        {number}
      </div>
    </Html>
  );
};

// Données des projets (tu peux les mettre dans un fichier séparé plus tard)
const projectsData = {
  Monitor: {
    id: "01",
    title: "Auto Passion",
    description:
      "Plateforme interactive pour les passionnés d'automobile avec fiches techniques et galeries.",
    tech: ["Html", "Tailwind CSS", "JavaScript", "three.js", "framer motion"],
  },
  Tower: {
    id: "02",
    title: "My CV",
    description:
      "Cv interactif avec animations et présentation dynamique des compétences.",
    tech: ["React", "Vite", "framer motion"],
  },
  Keyboard: {
    id: "03",
    title: "Chat App",
    description:
      "Application de chat en temps réel avec fonctionnalités de groupe et partage de fichiers. En cours de développement.",
    tech: [
      "React",
      "TAILWIND CSS",
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  Mouse: {
    id: "04",
    title: "E-Shop Concept",
    description:
      "Boutique en ligne complète avec tunnel d'achat et gestion des commandes.",
    tech: ["NEXT.JS", "STRIPE API", "Tailwind CSS"],
  },
  Table: {
    id: "05",
    title: "Prosannal form",
    description:
      "Site de formulaire dynamique avec validation et intégration backend.",
    tech: ["Chart.js", "Node.js", "Zod", "React", "Zustand"],
  },
};

// Composant pour charger le modèle
function SingleModel({ url, onHover }) {
  const meshRef = useRef();
  const { scene } = useGLTF(url);

  // Optimisation : Empêche l'objet de disparaître quand on tourne
  useMemo(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.frustumCulled = false;
        // On sauvegarde le matériau d'origine pour pouvoir le remettre
        if (!obj.userData.originalColor) {
          obj.userData.originalColor = obj.material.color.getHex();
        }
      }
    });
  }, [scene]);

  return (
    <primitive
      ref={meshRef}
      object={scene}
      onPointerOver={(e) => {
        e.stopPropagation();
        const name = e.object.name;

        // Détection simplifiée des parties
        if (name.includes("Monitor") || name.includes("Screen"))
          onHover(projectsData.Monitor);
        else if (
          name.includes("Case") ||
          name.includes("Tower") ||
          name.includes("Box")
        )
          onHover(projectsData.Tower);
        else if (name.includes("Keyboard") || name.includes("Keys"))
          onHover(projectsData.Keyboard);

        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        onHover(null);
        document.body.style.cursor = "auto";
      }}
      scale={4} // Ajuste selon la taille réelle du modèle
    />
  );
}

const Project = () => {
  const [activeProject, setActiveProject] = useState(null); // Pour le survol (hover)
  const [selectedProject, setSelectedProject] = useState(null); // Pour le clic
  // AJOUT : Définition de l'état pour le projet actif

  // Hook pour suivre le chargement réel des assets 3D
  const { progress } = useProgress();

  useEffect(() => {
    const loaderOverlay = document.getElementById("loader-overlay");
    const progressBar = document.getElementById("progress-bar");
    const progressNum = document.getElementById("progress-num");

    if (progressBar && progressNum) {
      progressBar.style.width = `${progress}%`;
      progressNum.textContent = Math.round(progress);
    }

    if (progress === 100 && loaderOverlay) {
      // Petit délai pour laisser l'utilisateur voir le 100%
      setTimeout(() => {
        loaderOverlay.style.opacity = "0";
        setTimeout(() => {
          loaderOverlay.style.display = "none";
          document.body.classList.remove("no-scroll");
        }, 500);
      }, 500);
    }
  }, [progress]);

  return (
    <div
      className=" bg-slate-200 min-h-screen p-4"
      style={{ touchAction: "none" }}
    >
      <Navbar />
      <div className="flex p-8 h-[95vh]">
        {/* Container du Canvas */}

        <div className="w-[70%] h-[100%]">
          <Canvas
            flat
            camera={{ position: [0, 2, 8], fov: 50, near: 0.1, far: 1000 }}
          >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Environment preset="city" />

            {/* PresentationControls permet de manipuler l'objet à la souris */}
            <PresentationControls
              global
              rotation={[0, -0.8, 0]} // Inclinaison de départ (en radians)
            >
              {/* placons le modèle dans une position */}
              <Center position={[-1, 0.5, 0]}>
                <SingleModel
                  url="/gamingbureau-opt.glb"
                  onHover={setActiveProject}
                />{" "}
              </Center>
              {/* Repère 1: Moniteur (object_5) */}
              <Hotspot
                position={[-0.8, 0.5, 3]}
                number="1"
                onClick={() => setSelectedProject(projectsData.Monitor)}
                data={projectsData.Monitor}
              />

              {/* Repère 2: Unité Centrale (object_15-17) */}
              <Hotspot
                position={[0, 2, -3.4]}
                number="2"
                onClick={() => setSelectedProject(projectsData.Tower)}
                data={projectsData.Tower}
              />

              {/* Repère 3: Clavier */}
              <Hotspot
                position={[0, 0.8, 0.8]}
                number="3"
                onClick={() => setSelectedProject(projectsData.Keyboard)}
                data={projectsData.Keyboard}
              />

              {/* Repère 4: Souris (object_8) */}
              <Hotspot
                position={[0, 0.8, -1.5]}
                number="4"
                onClick={() => setSelectedProject(projectsData.Mouse)}
                data={projectsData.Mouse}
              />

              {/* Repère 5: Table/Setup (object_2-4) */}
              <Hotspot
                position={[-2, 1.7, 0]}
                number="5"
                onClick={() => setSelectedProject(projectsData.Table)}
                data={projectsData.Table}
              />
            </PresentationControls>
          </Canvas>
        </div>
        {/* La section Interactive Lab devient dynamique */}
        <ProjectPresentation project={selectedProject} />
      </div>
      <Footer />
    </div>
  );
};

export default Project;
