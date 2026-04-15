import React from 'react';

const Experience = () => {
  const experiences = [
    "Frontend Developer (Student Projects)",
    "Created LMS project (ClassifiED)",
  ];

  return (
    <section className="my-12 max-w-4xl mx-auto">

      <div className="bg-red-900/40 backdrop-blur-sm border border-amber-800 rounded-xl shadow-2xl p-8">

        {/* BIG GRADIENT TITLE (RULE APPLIED) */}
        <h2 className="text-4xl font-extrabold tracking-widest mb-6
                       bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600
                       bg-clip-text text-transparent">
          EXPERIENCE LOG
        </h2>

        {/* Accent line */}
        <div className="h-[2px] w-28 bg-gradient-to-r from-amber-500 to-transparent mb-6"></div>

        {/* Timeline-style list */}
        <div className="space-y-4">

          {experiences.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg
                         bg-black/40 border border-amber-800
                         hover:border-amber-500 transition-all duration-200"
            >
              {/* Bullet indicator */}
              <span className="mt-1 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(255,180,80,0.6)]"></span>

              {/* Text */}
              <p className="text-amber-300 text-sm tracking-wide">
                {item}
              </p>
            </div>
          ))}

        </div>

        {/* System tag */}
        <div className="mt-6 inline-block px-4 py-1 rounded-full border border-amber-700
                        bg-black/50 text-amber-400 text-xs tracking-widest">
          SYSTEM STATUS: EXPERIENCE MODULE ACTIVE
        </div>

      </div>

    </section>
  );
};

export default Experience;