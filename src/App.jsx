import { useState } from 'react'
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
      subtitle: '3D Low Poly Farming Survival Game',
      description: 'A cozy low-poly survival game.',
      fullDescription: `Poly Farmer is a 3D low-poly, open-world survival farming game inspired by titles like Hydroneer, Stardew Valley, and My Time at Portia. The game emphasizes immersion by minimizing traditional GUI elements and placing the player directly in the world. Players can gather resources, craft tools, build structures, grow crops, and sell items.

      Currently in active development, Poly Farmer is evolving with new features planned to deepen gameplay and broaden content variety.`,
      image: './images/PolyFarmer/Thumbnail.png',
      gif: './gifs/Teaser.mp4',
      
      screenshots:[
        './images/PolyFarmer/CraftingSearch.png',
        './images/PolyFarmer/SeedStore.png',
        './images/PolyFarmer/ForgeSmelting.png',
        './images/PolyFarmer/ForgeStarting.png',
        './images/PolyFarmer/WaterFiltering.png',
        './images/PolyFarmer/PickaxeStrike.png',
        './images/PolyFarmer/LogSplit.png',
        './images/PolyFarmer/PolyFarmerIcon.png'

      ],
      progress: 'Active',
      skills: ['Unity', 'C#','UI/UX Design', '3D Modeling', 'Audio Design', 'Clean Architecture', 'Game System Design'],
      tools: ['Unity','Blender','Photoshop','Visual Studio', 'AudaCity'],
      timeSpent: '1.5 Year'
    },
    {
      title: 'Project GungB',
      subtitle: '3D Low Poly FPS Game',
      description: 'A FPS Game with abilities and guns.',
      fullDescription: `Project GungB is a fast-paced, low-poly first-person shooter built in Unity.
      Featuring unlockable weapons, player abilities, and multiple enemy types with unique debuffs, the game challenges players with dynamic combat scenarios in stylized 3D environments.

      This was my first full 3D game project and a major milestone in my journey as a developer.
      While many visual assets came from the Unity Asset Store, I focused on learning how to structure scalable game systems, implement responsive player controls, and build immersive UI with minimal on-screen clutter.

      Project GungB is where my passion for 3D game development began — teaching me the fundamentals of combat design, animation integration, and the importance of moment-to-moment gameplay feel. The project is still active and evolving as I continue refining its mechanics and content.`,
      image: './images/ProjectGungB/Image2.png',
      gif: './gifs/ProjectGungBDemo.mp4',
      
      screenshots:[
        './images/ProjectGungB/Image1.png',
        './images/ProjectGungB/Image3.png',
        './images/ProjectGungB/Image4.png',
        './images/ProjectGungB/Image5.png',
        './images/ProjectGungB/Image6.png'
      ],
      progress: 'Active',
      skills: ['Unity', 'C#','UI/UX Design', '3D Modeling', 'Audio Design', 'Clean Architecture', 'Game System Design'],
      tools: ['Unity','Blender','Photoshop','Visual Studio', 'AudaCity'],
      timeSpent: '1.5 Year'
    },
    {
      title: 'Zole Point Counter',
      subtitle: 'App For Kepping Track Of Played Rounds And Earned Points',
      description: 'Useful and handy app that can be used for counting and saving score',
      fullDescription: 'Zole Point Counter is a mobile utility app designed to track and manage points during Zole card game sessions. Designed with flexibility in mind, the app supports multiple save states and accommodates both 2-player and 3-player formats, with 4-player support planned. The clean, responsive UI ensures a smooth experience across devices, and intuitive controls make it easy to follow turn orders and card responsibilities. Future updates will expand on customization and other features.',
      image: './images/Zole/Icon.png',
      gif: './gifs/ZoleCounterDemo.mp4',
      screenshots:[
        './images/Zole/Image1.jpg',
        './images/Zole/Image2.jpg',
        './images/Zole/Image3.jpg',
        './images/Zole/Image4.jpg',
        './images/Zole/Image5.jpg',
        './images/Zole/Image6.jpg',
        './images/Zole/Image7.jpg',
        './images/Zole/Image8.jpg'
      ],
      progress: 'Done Not Published',
      skills: ['Unity', 'C#','UI Design', 'Mobile Responsiveness','UX Flow','State Management'],
      tools: ['Unity','Photoshop','Visual Studio'],
      timeSpent: '6 months'
    },
    {
      title: 'Recipe Maker',
      subtitle: 'App For creating recipes',
      description: 'Easy to use customizable recipe creation tool',
      fullDescription: 'Recipe Maker is a personal desktop tool designed for fast and intuitive recipe creation. Developed using Windows Forms, the app features drag-and-drop functionality, automatic folder setup for assets, and a simple UI aimed at making the recipe entry process quick and organized. While initially built for personal use, the app supports icon customization and serves as a lightweight content editor. Future improvements may include export options and more flexible formatting features.',
      image: './images/RecipeMaker/Image0.png',
      gif: './gifs/RecipeMakerDemo.mp4',
      screenshots:[
        './images/RecipeMaker/Image1.png',
        './images/RecipeMaker/Image2.png',
        './images/RecipeMaker/Image3.png',
        './images/RecipeMaker/Image4.png',
        './images/RecipeMaker/Image5.png',
      ],
      progress: 'Done Not Published',
      skills: ['C#','WinForms', 'File I/O', 'Drag-and-Drop Interfaces','Custom Tool Design'],
      tools: ['Visual Studio', 'ChatGPT'],
      timeSpent: '1 months'
    },
    {
      title: 'Icon Creator',
      subtitle: 'App For Icon Creaton',
      description: 'Easy to use drag and drop icon creation tool',
      fullDescription: 'Icon Creator is a desktop utility for crafting and editing icons quickly. It allows users to drag in an image, apply outlines, and adjust visuals using effect sliders. Built with Windows Forms, the app serves as a fast prototyping tool for icon creation, especially for UI or asset design pipelines. The project is currently in development, with planned improvements in optimization, export handling, and customization options.',
      image: './images/IconCreator/IconCreatorIcon.png',
      gif: './gifs/IconCreatorDemo.mp4',
      screenshots:[
        './images/IconCreator/Image1.png',
        './images/IconCreator/Image2.png',
        './images/IconCreator/Image3.png',
        './images/IconCreator/Image4.png',
        './images/IconCreator/Image5.png',
      ],
      progress: 'In Development',
      skills: ['C#','WinForms','UI Design','Image Processing Concepts','Tool Prototyping'],
      tools: ['Visual Studio', 'ChatGPT'],
      timeSpent: '1 months'
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
          {`I’m a 21-year-old game developer passionate about crafting immersive and stylized experiences. I love exploring how games are made — what makes them tick, and what makes them special. Whether I’m building systems in Unity, modeling assets in Blender, or prototyping quirky tools, I’m always pushing to learn something new. My approach is hands-on and curious, driven by a desire to solve problems creatively and build polished, enjoyable experiences.

          My core strengths lie in gameplay programming, clean code architecture, and intuitive UI/UX design. I'm excited by any opportunity to grow, collaborate, and bring unique ideas to life in interactive form.`
          .split('\n\n').map((para, idx) => (
            <p key={idx} className="text-pink-100 mb-4">{para}</p>
          ))}

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
