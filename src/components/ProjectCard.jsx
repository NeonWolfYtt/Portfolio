import React, { useRef, useState, useEffect } from 'react';

function ProjectCard({ title, subtitle, description, fullDescription, image, gif, screenshots, isExpanded, onToggleExpand, progress, skills, tools, timeSpent }) {
  const [hovered, setHovered] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [hideOverlay, setHideOverlay] = useState(false);
  const [expanded, setExpanded] = useState(isExpanded);

  const videoRef = useRef(null);

  const media = [gif, ...screenshots];
  const isVideo = mediaIndex === 0;

  useEffect(() => {
    setExpanded(isExpanded);
  }, [isExpanded]);

  const handleMouseEnter = () => {
    if (!expanded) {
      console.log('Mouse Entered', { expanded, hideOverlay });
      setHovered(true);
      if (videoRef.current) videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (!expanded) {
      console.log('Mouse Left', { expanded });
      setHovered(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  const resetVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const prevMedia = () => setMediaIndex((prev) => (prev - 1 + media.length) % media.length);
  const nextMedia = () => setMediaIndex((prev) => (prev + 1) % media.length);

  const handleToggleExpand = () => {
    console.log('Toggling Expand/Collapse');
    if (onToggleExpand) onToggleExpand();

    setExpanded(prev => {
      if (prev) {
        console.log('Collapsing: Hiding overlay and resetting');
        resetVideo();
        setHideOverlay(true);
        setHovered(false);
        setMediaIndex(0);
      } else {
        console.log('Expanding: Showing overlay again');
        setHideOverlay(false);
      }
      return !prev;
    });
  };

  return (
    <div className={`bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg text-white transition-all duration-500 ${expanded ? 'md:col-span-2' : ''}`}>
      {/* Project title */}
      <div className="px-4 pt-4">
        <h3 className="text-2xl font-semibold text-cyan-400">{title}</h3>
        <p className="text-sm italic text-pink-300">{subtitle}</p>
      </div>

      {/* Media Section */}
      <div
        className="relative mt-2 w-full aspect-video flex justify-center items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Expanded View */}
        {expanded ? (
          <div className="relative w-full h-full flex flex-col items-center bg-black">
            {/* Hide Button */}
            <button
              onClick={handleToggleExpand}
              className="absolute top-2 right-2 bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1 rounded text-sm z-10"
            >
              Hide
            </button>

            {/* Media viewer */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-cyan-800">
              {isVideo ? (
                <video
                  key={hovered}
                  ref={videoRef}
                  src={gif}
                  className="w-full h-full object-center"
                  muted
                  loop
                  autoPlay
                  controls
                />
              ) : (
                <img
                  src={media[mediaIndex]}
                  alt={`Screenshot ${mediaIndex}`}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Arrow Controls */}
              <button
                onClick={prevMedia}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full"
              >
                ←
              </button>

              <button
                onClick={nextMedia}
                className="absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full"
              >
                →
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {media.map((src, idx) => (
                <div
                  key={idx}
                  onClick={() => setMediaIndex(idx)}
                  className={`w-20 h-14 rounded-lg border-2 cursor-pointer overflow-hidden ${mediaIndex === idx ? 'border-cyan-400' : 'border-transparent'}`}
                >
                  {idx === 0 ? (
                    <video src={gif} muted className="w-full h-full object-cover" />
                  ) : (
                    <img src={src} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover absolute top-0 left-0"
            />

            <video
              key={hovered}
              ref={videoRef}
              src={gif}
              className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300"
              muted
              loop
              playsInline
              style={{ opacity: hovered && !expanded ? 1 : 0 }}
              />

            {/* Overlay */}
            {hovered && !expanded && (
              <div className="absolute inset-0 p-4 flex flex-col justify-center items-center transition-opacity duration-300">
                <p className="text-sm text-center mb-3">{description}</p>
                <button
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded"
                  onClick={handleToggleExpand}
                >
                  View More
                </button>
              </div>
            )}

          </>
        )}
      </div>

      {/* Full Description */}
      {expanded && (
        <div className="px-4 py-6 text-pink-200">
          <p>{fullDescription}</p>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
