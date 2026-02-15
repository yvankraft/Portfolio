import React from 'react'
import Navbar from '../components/Navbar'
import Projectbox from "../components/project.box"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

const Project = () => {
  useGSAP(() => {
    gsap.fromTo(".project-card", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5 });
  }, []);

  return (
    <div className=" bg-slate-200 min-h-screen p-4">
      <Navbar />
      <div className='flex flex-col justify-center gap-10 mt-10'>
        <Projectbox className="m-auto bg-cover bg-center rounded-2xl  mt-10" 
        id="project1"
        title="Project 1"
        description="Description of Project 1"
        stack={['React', 'Node.js', 'MongoDB']}
         />
        <Projectbox className="project-card w-[300px] h-[200px] bg-cover bg-center rounded-2xl mx-auto mt-10"
        id="project2"
        title="Project 2"
        description="Description of Project 2"
        stack={['Vue', 'Firebase']}
         />
        <Projectbox className="project-card w-[300px] h-[200px] bg-cover bg-center rounded-2xl mx-auto mt-10"
        id="project3"
        title="Project 3"
        description="Description of Project 3"
        stack={['Angular', 'Express']}
      />
      </div>
      
    </div>
  )
}

export default Project
