import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Navbar from '../components/Navbar';
import {motion} from 'framer-motion';

// On enregistre le plugin à l'extérieur du composant
gsap.registerPlugin(ScrollTrigger);

// Composant interne pour gérer chaque modèle

  function SingleModel({ url, position }) {
  const meshRef = useRef();
  const { scene } = useGLTF(url);

  useGSAP(() => {
    // La magie du Scroll : Le modèle tourne quand on descend
    gsap.to(meshRef.current.rotation, {
      y: Math.PI * 2, // 1 tours complets
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Lissage du mouvement
      }
    });
  });
  
  return (
    <Float speed={2} rotationIntensity={0.5}>
      <primitive 
        ref={meshRef} 
        object={scene.clone()} 
        position={position} 
        scale={2} 
      />
    </Float>
  );
}



const Home = () => {
  return (
    <div className='relative min-h-screen p-4'>
      <Navbar />
       <div className='fixed top-0 left-0 w-full h-screen z-0 pointer-events-none'>
              <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
                  <ambientLight intensity={0.5} />
              <Environment preset="city" />
      
              {/* Tu places tes modèles à différentes positions */}
              <SingleModel url="/ile_flottante.glb" position={[-6, -4, -5]} />
              <SingleModel url="/dae.glb" position={[-10, -150, -50]} />
              <SingleModel url="/lighthouse.glb" position={[-6, -10, 0]} />
              </Canvas>
          </div>
          <div >
     <motion.div
       whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="text-xl p-10 bg-slate-500 w-[18vw] mx-auto rounded-4xl text-white font-bold flexflex items-center justify-center  mr-[15%] mt-70 z-10 relative">
      <p>Weclcome to my Portfolio!</p> 
     </motion.div>
     
    </div></div>
  );
};

export default Home;



