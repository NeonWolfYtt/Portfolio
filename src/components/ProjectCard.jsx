// src/components/ProjectCard.jsx
import React, { use, useState } from 'react';

function ProjectCard({ title, subtitle, description,fullDescription, image, gif, screenshots }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="bg-gray-900 round-2x1 overflow-hidden shadow-md text-white">
      <div
        className='relative'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img 
          src={hovered ? gif : image}
          alt={title}
          className="w-full h-64 object-cover transition-all duration-300"
         />
        <div className={`absolute inset-0 bg-black bg-opacity-60 text-white p-4 flex flex-col justify-center items-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-x1 font-semibold mb-2">{title}</h3>
          <p className="text-sm text-center mb-3">{description}</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => setExpanded(prev => !prev)}
          >
            {expanded ? 'Hide' : 'View More'}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="p-4 bg-black border-t  border-blue-600">
          <h4 className="text-lg font-semibold mb-2">{subtitle}</h4>
          <p className="mb-4 text-blue-200">{fullDescription}</p>
          <div className="grid grid-cols-2 gap-4">
            {screenshots.map((ss,idx) => (
              <img key={idx} src={ss} alt={`Screenshot ${idx + 1}`} className="w-full rounded-lg" />
            ))}
          </div>
        </div>
      )};
    </div>
  );
}

export default ProjectCard;
