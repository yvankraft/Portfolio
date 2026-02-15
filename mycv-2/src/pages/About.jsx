import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scrollRef= useRef();

  //animation timeline pour les boîtes
  const timeline = gsap.timeline({ repeat: -1, yoyo: true, yoyoEase: "power1.inOut" });
  
  // Animation GSAP pour les boîtes
  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box) => {
      gsap.to(box, { x: 800, rotation: 360, scale: 1.2, borderRadius: "50%", scrollTrigger: {
        trigger: box,
        start: "bottom bottom",
        end: "top 20%",
        scrub: true,
        ease: "power1.inOut",
      }});
    })

    gsap.to("#box1", { duration: 2, ease: "linear", x: 800 });
    gsap.from("#box2", { duration: 2, ease: "linear", x: 800 });
    gsap.fromTo("#box3", { duration: 2, ease: "linear", x:0}, { x: 800, duration: 2, ease: "linear", repeat: -1, yoyo: true });
    timeline.to("#box4", { x: 200, duration: 2, ease: "back.inOut", rotation: 360, borderRadius: "50%" });
    timeline.to("#box4", { x: 800, duration: 2, ease: "back.inOut", rotation: 0, borderRadius: "20%" });
  }, []);

  return (
    <div className=" bg-slate-200 p-4">
      <Navbar />
      <section
        className="text-center min-h-screen text-2xl flex flex-col font-bold"
        style={{
          backgroundImage: "url('/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          alt: "About background image",
        }}
      >
        <h1>About Me</h1>
        <div id="box1" className="bg-slate-800 h-48 w-48 rounded-3xl mt-10"></div>
        <div id="box2" className="bg-white h-48 w-48 rounded-3xl"></div>
        <div id="box3" className="bg-green-500 h-48 w-48 rounded-3xl"></div>
        <div id= "box4" className="text-white bg-yellow-500 h-48 w-48 p-8 mt-4 flex items-center justify-center" >timeline.box</div> 
        <button onClick={()=>{
          if(timeline.paused()){
            timeline.play();
          }else{
            timeline.pause();
          }
        }} className=" mt-2 p-2 w-32 mx-auto text-xl bg-slate-500 text-white rounded-full hover:bg-slate-600 active:scale-95 transition duration-300">
          Pause/play
          </button>
          <section ref={scrollRef}> <div id= "box5" className="text-white bg-purple-500 h-48 w-48 p-8 mt-4 flex items-center justify-center" >Scrolltriger</div>
           <div id= "box6" className="text-white bg-purple-500 h-48 w-48 p-8 mt-4 flex items-center justify-center">Scrolltriger</div>
            <div id= "box7" className="text-white bg-purple-500 h-48 w-48 p-8 mt-4 flex items-center justify-center">Scrolltriger</div></section>
        
       
      </section>
    </div>
  );
};

export default About;
