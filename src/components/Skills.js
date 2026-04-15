import React from 'react';

const Skills = () => {
  const skills = ["React", "JavaScript", "Tailwind CSS", "Laravel"];

  return (
    <section className="my-12 max-w-4xl mx-auto">

      <div className="bg-red-900/40 backdrop-blur-sm border border-amber-800 rounded-xl shadow-2xl p-8">

        {/* BIG GRADIENT TITLE (RULE APPLIED) */}
        <h2 className="text-4xl font-extrabold tracking-widest mb-6
                       bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600
                       bg-clip-text text-transparent">
          SKILLS MATRIX
        </h2>

        {/* Accent line */}
        <div className="h-[2px] w-28 bg-gradient-to-r from-amber-500 to-transparent mb-6"></div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-lg
                         bg-black/50 border border-amber-700
                         text-amber-300 text-sm tracking-wide
                         shadow-md shadow-amber-500/10
                         hover:scale-105 hover:border-amber-500
                         transition-all duration-200"
            >
              {skill}
            </span>
          ))}

        </div>

        {/* Optional system tag */}
        <div className="mt-6 inline-block px-4 py-1 rounded-full border border-amber-700
                        bg-black/50 text-amber-400 text-xs tracking-widest">
          SKILLS LOADED
        </div>

      </div>

    </section>
  );
};

export default Skills;