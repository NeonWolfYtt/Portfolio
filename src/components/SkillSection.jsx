export default function SkillsSection() {
    const skills = {
      Advanced: ["Unity", "C#", "Git", "Photoshop"],
      Intermediate: ["Blender", "Shader Graph", "After Effects"],
      Beginner: ["Unreal Engine", "JavaScript", "HTML/CSS"],
    };
  
    return (
      <section className="py-16 bg-[#0f0f0f] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 border-b border-cyan-700 pb-2">
            Skills
          </h2>
  
          {Object.entries(skills).map(([level, skillList]) => (
            <div key={level} className="mb-8">
              <h3 className="text-xl font-semibold text-pink-400 mb-4">{level}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillList.map((skill, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 border border-cyan-500 rounded-full text-cyan-200 hover:bg-cyan-800/30 transition duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  