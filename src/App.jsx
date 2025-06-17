import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import SkillSection from './components/SkillSection'
import ProjectCard from './components/ProjectCard'
import './App.css'

function App()
{
  const [expandedIndex, setExpandedIndex] = useState(null);  
  const projects = [
    {
      title: 'Poly Farmer',
      subtitle: '3D Farming Survival',
      description: 'A cozy low-poly survival game.',
      fullDescription: 'A cozy low-poly survival game with farming, crafting, and seasonal hazards.',
      image: './images/PolyFarmer/Thumbnail.png',
      gif: './gifs/Teaser.mp4',
      
      screenshots:[
        './images/PolyFarmer/CraftingSearch.png',
        './images/PolyFarmer/SeedStore.png',
        './images/PolyFarmer/ForgeSmelting.png',
        './images/PolyFarmer/ForgeStarting.png',
        './images/PolyFarmer/WaterFiltering.png',
        './images/PolyFarmer/PickaxeStrike.png',
        './images/PolyFarmer/LogSplit.png'
      ],
      progress: 'Active',
      skills: ['Unity', 'C#','UI Design', '3D Modeling'],
      tools: ['Unity','Blender','Photoshop','Visual Studio', 'AudaCity'],
      timeSpent: '1 Year'
    },
    {
      title: 'Zole Point Counter',
      subtitle: 'App For Counting Score',
      description: 'Useful and handy app that can be used for counting and saving score',
      fullDescription: 'A cozy low-poly survival game with farming, crafting, and seasonal hazards.',
      image: '',
      gif: '',
      screenshots:[
        './images/PolyFarmer/CraftingSearch.png',
        './images/PolyFarmer/SeedStore.png',
        './images/PolyFarmer/ForgeSmelting.png',
        './images/PolyFarmer/ForgeStarting.png',
        './images/PolyFarmer/WaterFiltering.png',
        './images/PolyFarmer/PickaxeStrike.png',
        './images/PolyFarmer/LogSplit.png'
      ],
      progress: 'Active',
      skills: ['Unity', 'C#','UI Design', '3D Modeling'],
      tools: ['Unity','Blender','Photoshop','Visual Studio', 'AudaCity'],
      timeSpent: '1 Year'
    },
    
  ];

  const toggleExpand = (idx) =>{
    setExpandedIndex(prev=> (prev === idx ? null :idx));
  }
  return (
    <div className="bg-[#0f0f0f] text-pink-100 min-h-screen font-sans scroll-smooth">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Main Intro Section */}
        <section className="mb-16 text-center">
          <p className="text-xl mt-4 text-white-100">Game Developer · Programmer · Designer</p>
          <p className="mt-6 max-w-2xl mx-auto text-white-400">
            I build immersive and stylized game experiences in Unity — from cozy farming sims to fast-paced shooters to other random projects.
          </p>
        </section>
        {/* Portoflio Section */}
        <section id='portfolio'>
          <h2 className="text-3xl font-bold text-white-400 mb-8 border-b border-white-700 pb-2">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <ProjectCard
                key={idx}
                {...proj}
                isExpanded={expandedIndex === idx}
                onToggleExpand={() => toggleExpand(idx)}
              />
            ))}
          </div>
        </section>
        {/* About me Section */}
        <section id='about' className='my-20 text-center'>
          <h2 className='text-3xl font-bold text-white-400 mb-8 border-b border-white-700 pb-2'>About Me</h2>
          <p className='text-pink-100'>
            I'm a passionate game developer with a focus on immersive gameplay and strong visual identity. My favorite tools include Unity and Blender, and I'm always learning.
          </p>
        </section>

      {/* Skills Section*/}

        <SkillSection/>
        
      </main>
      
            
      {/* Education Section*/}
      <section id="education" className="my-20 text-center">
        <h2 className="text-3xl font-bold text-white-400 mb-8 border-b border-white-700 pb-2">Education</h2>
        <p className="text-white-100">
          <strong>Programming Technician</strong> · Riga Technical Collage (RTK) (2019–2023)
        </p>
      </section>
      {/* <Footer /> */}
      <Footer/>
    </div>
  );  
}

export default App
