import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/footer";

// On enregistre le plugin à l'extérieur du composant
gsap.registerPlugin(ScrollTrigger);

// Composant interne pour gérer chaque modèle

function SingleModel({ url, position }) {
  const meshRef = useRef();
  const { scene } = useGLTF(url);

  useGSAP(() => {
    // La magie du Scroll : Le modèle tourne quand on descend
    const timeline = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Lissage du mouvement
      },
    });
    timeline.to(
      meshRef.current.rotation,
      {
        y: Math.PI * 2, // 1 tours complets
      },
      0,
    );
    timeline.to(
      meshRef.current.scale,
      {
        x: 5,
        y: 5,
        z: 5,
      },
      0,
    );
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
    <>
      <div className="relative min-h-screen p-4">
        <Navbar />
        <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <Environment preset="city" />

            {/* placons le modèle dans une position */}
            <SingleModel url="/ile_flottante.glb" position={[-6, -4, -5]} />
          </Canvas>
        </div>
        <div className="flex flex-col justify-end items-end h-screen w-full p-10 pb-25">
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            whileHover={{ scale: 1.1 }}
            drag
            whileDrag
            dragConstraints={{ left: -100, right: 100, top: -150, bottom: 50 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="p-10 bg-slate-500 w-[30vw] rounded-4xl text-white flex flex-col items-center justify-center z-10 relative"
          >
            <h2 className="font-mono text-2xl">
              Crafting Digital Experiences with Purpose
            </h2>
            <p className="text-l font-mono">
              Welcome to a Crafting Digital Experiences with Purpose
            </p>
            <p className="text-l font-mono">
              A journey through motion, 3D interactions, and high-performance
              engineering.
            </p>
          </motion.div>
        </div>
        <section className="flex flex-col justify-start items-end h-screen w-full p-10 pb-25">
          <motion.div
            whileHover={{ scale: 1.1 }}
            drag
            whileDrag
            dragConstraints={{ left: -100, right: 100, top: -150, bottom: 50 }}
            className="p-10 bg-slate-500 w-[30vw] rounded-4xl text-white flex flex-col items-center justify-center z-10 relative"
          >
            <motion.h2
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }} // On anime la largeur au scroll
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "linear" }}
              className="font-mono text-2xl overflow-hidden whitespace-nowrap border-r-4 border-white pr-2"
            >
              Beyond the Pixels.
            </motion.h2>
            <p className="text-l font-mono">
              This portfolio isn't just a collection of links. It's an
              exploration of what happens when logic meets aesthetics. I built
              this space to push the boundaries of modern web standards,
              focusing on fluid motion and seamless user experiences.
            </p>
            <p className="text-l font-mono">
              A journey through motion, 3D interactions, and high-performance
              engineering.
            </p>
          </motion.div>
        </section>
        <section className="flex flex-col justify-start items-end h-screen w-full p-10 pb-25">
          <motion.div
            whileHover={{ scale: 1.1 }}
            drag
            whileDrag
            dragConstraints={{ left: -100, right: 100, top: -150, bottom: 50 }}
            className="p-10 bg-slate-500 w-[30vw] rounded-4xl text-white flex flex-col items-center justify-center z-10 relative"
          >
            <motion.h2 className="font-mono text-2xl whitespace-nowrap border-white pr-2">
              The Purpose
            </motion.h2>
            <p className="text-l font-mono">
              This platform is a dedicated space to showcase my evolution as a
              developer. It aims to demonstrate how modern web standards can be
              pushed to create high-performance, immersive environments.
            </p>
          </motion.div>
        </section>
        <section className="flex flex-col justify-start items-end h-screen w-full p-10 pb-25">
          <motion.div
            whileHover={{ scale: 1.1 }}
            drag
            whileDrag
            dragConstraints={{ left: -100, right: 100, top: -150, bottom: 50 }}
            className="p-10 bg-slate-500 w-[30vw] rounded-4xl text-white flex flex-col items-center justify-center z-10 relative"
          >
            <motion.h2 className="font-mono text-2xl whitespace-nowrap border-white pr-2">
              What’s inside
            </motion.h2>
            <p className="text-l font-mono">
              Through these pages, you will find a breakdown of my technical
              stack, a deep dive into my creative process, and a curated
              selection of my most impactful work
            </p>
          </motion.div>
        </section>
        <section className="flex flex-col justify-start items-end h-screen w-full p-10 pb-25">
          <motion.div
            whileHover={{ scale: 1.1 }}
            drag
            whileDrag
            dragConstraints={{ left: -100, right: 100, top: -150, bottom: 50 }}
            className="p-10 bg-slate-500 w-[30vw] rounded-4xl text-white flex flex-col items-center justify-center z-10 relative"
          >
            <h2 className="font-mono text-2xl whitespace-nowrap border-white pr-2">
              Navigation
            </h2>
            <p className="text-l font-mono">
              Ready to see more? Head over to About to learn about my journey,
              or jump straight into Projects to see these concepts in action.
            </p>
          </motion.div>
        </section>
      </div>{" "}
      <Footer />
    </>
  );
};

export default Home;
