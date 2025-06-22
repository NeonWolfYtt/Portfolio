import React, { useRef, useState, useEffect } from 'react';

function ProjectCard({ title, subtitle, description, fullDescription, image, gif, screenshots, isExpanded, onToggleExpand, progress, skills, tools, timeSpent }) {
  const [hovered, setHovered] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [hideOverlay, setHideOverlay] = useState(false);
  const [expanded, setExpanded] = useState(isExpanded);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const videoRef = useRef(null);

  const media = [gif, ...screenshots];
  const isVideo = mediaIndex === 0;

  useEffect(() => {
    setExpanded(isExpanded);
  }, [isExpanded]);

  const handleMouseEnter = () => {
    if (!expanded) {
      setHovered(true);
      if (videoRef.current) videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (!expanded) {
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
    if (onToggleExpand) onToggleExpand();

    setExpanded(prev => {
      if (prev) {
        resetVideo();
        setHideOverlay(true);
        setHovered(false);
        setMediaIndex(0);
      } else {
        setHideOverlay(false);
      }
      return !prev;
    });
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > 50) nextMedia();
    else if (distance < -50) prevMedia();
    setTouchStartX(null);
    setTouchEndX(null);
  };


  return (
    <div className={`bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg text-white transition-all duration-500 ${expanded ? 'md:col-span-2' : ''}`}>
      {/* Project title */}
      <div className="px-4 pt-4">
        <h3 className="text-2xl font-semibold text-white-400">{title}</h3>
        <p className="text-sm italic text-white-300">{subtitle}</p>
      </div>

      {/* Media Section */}
      <div
        className="relative mt-2 w-full h-[250px] sm:h-[260px] md:h-[360px] flex justify-center items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Expanded View */}
        {expanded ? (
          <div className="relative w-full h-[400px] sm:h-[560px] md:h-[900px] flex flex-col items-center bg-black">
            {/* Hide Button */}
            <button
              onClick={handleToggleExpand}
              className="
                absolute top-2 right-2
                bg-white-600 hover:bg-white-700 text-white
                px-3 py-1 rounded text-sm z-10
                hidden sm:block
              "
            >
              Hide
            </button>

            {/* Media viewer */}
            <div
              className="relative w-full h-[900px] sm:h-[360px] md:h-[900px] rounded-lg overflow-hidden border border-white-800"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
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
                  className="w-full h-full object-contain"
                />
              )}

              {/* Arrow Controls */}
              <button
                onClick={prevMedia}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-1 sm:p-2 rounded-full z-20 hidden  sm:block"
              >
                ←
              </button>

              <button
                onClick={nextMedia}
                className="absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-1 sm:p-2 rounded-full z-20 hidden  sm:block"
              >
                →
              </button>
            </div>

            {/* Mobile Hide Button */}
            <div className="w-full flex justify-end px-4 mt-2 sm:hidden">
              <button
                onClick={handleToggleExpand}
                className="bg-white-600 hover:bg-white-700 text-white px-4 py-1 rounded text-sm"
              >
                Hide
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex flex-wrap sm:flex-nowrap sm:flex-shrink-0 gap-3 mt-4 mb-4 overflow-x-auto max-w-full justify-center z-10 relative bg-[#1a1a1a] px-4 py-4">
              {media.map((src, idx) => (
                <div
                  key={idx}
                  onClick={() => setMediaIndex(idx)}
                  className={`w-20 h-20 sm:w-20 sm:h-20 rounded-lg border-2 cursor-pointer overflow-hidden ${mediaIndex === idx ? 'border-white-400' : 'border-transparent'}`}
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
              className="w-full h-full object-contain absolute top-0 left-0"
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
                  className="bg-white-600 hover:bg-white-700 text-white px-4 py-2 rounded"
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
        <div className="px-4 py-6 text-white-200 space-y-6">
          {/* Full Description */}
          {fullDescription.split('\n\n').map((para, idx) => (
            <p key={idx} className="mb-4 text-white-300">{para}</p>
          ))}
          {/* Divider */}
          <hr className="border-white-700" />

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 text-sm justify-items-center">
            {/* Progress */}
            <div className="flex items-start gap-3">
              <span className="text-white-400 text-xl">📈</span>
              <div>
                <h4 className="font-semibold text-white-300">Progress</h4>
                <p>{progress}</p>
              </div>
            </div>

            {/* Time Spent */}
            <div className="flex items-start gap-3">
              <span className="text-white-400 text-xl">⏳</span>
              <div>
                <h4 className="font-semibold text-white-300">Time Spent</h4>
                <p>{timeSpent}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="flex items-start gap-3">
              <span className="text-white-400 text-xl">🛠️</span>
              <div>
                <h4 className="font-semibold text-white-300">Skills</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {skills.map((skill, idx) => (
                    <span key={idx} className="bg-white-700 text-white-100 px-2 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="flex items-start gap-3">
              <span className="text-white-400 text-xl">🧰</span>
              <div>
                <h4 className="font-semibold text-white-300">Tools</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {tools.map((tool, idx) => (
                    <span key={idx} className="bg-white-700 text-white-100 px-2 py-1 rounded-full text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
