import React, { useRef, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ProjectPresentation from "../components/projectPresentation";
import { Canvas } from "@react-three/fiber";

import {
  useGLTF,
  Environment,
  PresentationControls,
  Center,
} from "@react-three/drei";

// Composant pour charger le modèle
function SingleModel({ url, position }) {
  const meshRef = useRef();
  const { scene } = useGLTF(url);
  const [hoveredPart, setHoveredPart] = React.useState(null);

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
      position={position}
      scale={3} // Ajuste selon la taille réelle du modèle
    />
  );
}

const Project = () => {
  return (
    <div
      className=" bg-slate-200 min-h-screen p-4"
      style={{ touchAction: "none" }}
    >
      <Navbar />
      {/* Container du Canvas */}
      <div className="w-full h-[100vh]">
        <Canvas
          flat
          camera={{ position: [0, 0, 8], fov: 50, near: 0.1, far: 1000 }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Environment preset="city" />

          {/* PresentationControls permet de manipuler l'objet à la souris */}
          <PresentationControls global>
            {/* placons le modèle dans une position */}
            <Center position={[-2, 0.5, 0]}>
              <SingleModel url="/gamingPc.glb" />
            </Center>
          </PresentationControls>
        </Canvas>
      </div>

      {/* Texte explicatif ou CTA ici si besoin 
      <div className="text-center p-10 right-[2%] top-[15%] h-[80%] absolute w-auto justify-center items-center flex flex-col bg-white bg-opacity-80 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold">Interactive Lab</h2>
        <p className="text-slate-600">
          Click on components to explore my work.
        </p>
      </div>*/}

      {/* La section Interactive Lab devient dynamique */}
      <ProjectPresentation project={activeProject} />
      <Footer />
    </div>
  );
};

export default Project;
