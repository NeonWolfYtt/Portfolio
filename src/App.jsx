import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
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
      image: './images/Thumbnail.png',
      gif: './gifs/Teaser.mp4',
      
      screenshots:[
        './images/CraftingSearch.png',
        './images/SeedStore.png',
        './images/ForgeSmelting.png',
        './images/ForgeStarting.png',
        './images/WaterFiltering.png',
        './images/PickaxeStrike.png',
        './images/LogSplit.png'
      ],
      progress: 'Active',
      skills: ['Unity', 'C#','UI Design', '3D Modeling'],
      tools: ['Unity','Blender','Photoshop','Visual Studio', 'AudaCity'],
      timeSpent: '1 Year'
    },
    // {
    //   title: 'Project GungB',
    //   subtitle: 'Low Poly FPS',
    //   description: 'Fast-paced FPS set in a colorful, low-poly battlefield.',
    //   image: '/images/CraftingSearch.png',
    //   link: '#'
    // },
    
  ];

  const toggleExpand = (idx) =>{
    setExpandedIndex(prev=> (prev === idx ? null :idx));
  }
  return (
    <div className="bg-black text-pink-200 min-h-screen font-sans scroll-smooth">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Main Intro Section */}
        <section className="mb-16 text-center">
          <p className="text-xl mt-4 text-pink-100">Game Developer · Programmer · Designer</p>
          <p className="mt-6 max-w-2xl mx-auto text-pink-400">
            I build immersive and stylized game experiences in Unity — from cozy farming sims to fast-paced shooters to other random projects.
          </p>
        </section>
        {/* Portoflio Section */}
        <section id='portfolio'>
          <h2 className="text-3xl font-bold text-cyan-200 mb-8">Projects</h2>
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
        <section id='about' className='my-20 text-center max-w-3x1 mx-auto'>
          <h2 className='text-3x1 font-bold text-cyan-200 mb-4'>About Me</h2>
          <p className='text-pink-100'>
            I'm a passionate game developer with a focus on immersive gameplay and strong visual identity. My favorite tools include Unity and Blender, and I'm always learning.
          </p>
        </section>
      </main>
      {/* Skills Section*/}
      <section id="skills" className="my-20">
          <h2 className="text-3xl font-bold text-cyan-200 text-center mb-8">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <h3 className="text-xl text-green-400 mb-2">Advanced</h3>
              <p>Unity, C#, Blender, Git</p>
            </div>
            <div>
              <h3 className="text-xl text-yellow-400 mb-2">Intermediate</h3>
              <p>Photoshop, Audacity, C++, Vegas Pro, Blender Aimation</p>
            </div>
            <div>
              <h3 className="text-xl text-red-400 mb-2">Beginner</h3>
              <p>UI Design</p>
            </div>
          </div>
        </section>     

        {/* Education Section*/}
        <section id="education" className="my-20 text-center">
          <h2 className="text-3xl font-bold text-cyan-200 mb-4">Education</h2>
          <p className="text-pink-100">
            <strong>Programming Technician</strong> · Riga Technical Collage (RTK) (2019–2023)
          </p>
        </section>
      {/* <Footer /> */}
      <Footer/>
    </div>
  );  
}

export default App
