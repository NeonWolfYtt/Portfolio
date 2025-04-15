import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Header from './components/Header'
// import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'
import './App.css'

function App()
{
  console.log("App is rendering");

  const projects = [
    {
      title: 'Poly Farmer',
      subtitle: '3D Farming Survival',
      description: 'A cozy low-poly survival game.',
      fullDescription: 'A cozy low-poly survival game with farming, crafting, and seasonal hazards.',
      image: './images/LogSplit.png',
      gif: './gifs/PolyFarmer.gif',
      screenshots:[
        './images/CraftingSearch.png',
        './images/SeedStore.png'
      ]
    },
    // {
    //   title: 'Project GungB',
    //   subtitle: 'Low Poly FPS',
    //   description: 'Fast-paced FPS set in a colorful, low-poly battlefield.',
    //   image: '/images/CraftingSearch.png',
    //   link: '#'
    // },
    
  ];
  return (
    <div className="bg-black text-pink-200 min-h-screen font-sans">
      {/* <Header /> */}
  
      <main className="max-w-5xl mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-300">Raivis Priede</h1>
          <p className="text-xl mt-4 text-pink-100">Game Developer · Programmer · Designer</p>
          <p className="mt-6 max-w-2xl mx-auto text-pink-400">
            I build immersive and stylized game experiences in Unity & Unreal — from cozy farming sims to fast-paced shooters.
          </p>
        </section>
  
        <section>
          <h2 className="text-3xl font-bold text-cyan-200 mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} />
            ))}
          </div>
        </section>
      </main>
  
      {/* <Footer /> */}
    </div>
  );  
}

export default App
