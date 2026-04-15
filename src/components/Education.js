import React from 'react';

const Education = () => {
  return (
    <section className="my-12 text-amber-400">

      {/* Gradient Title */}
      <h2 className="text-3xl font-extrabold tracking-wide mb-6
        bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600
        bg-clip-text text-transparent">
        Education
      </h2>

      {/* Card */}
      <div className="bg-red-900/40 backdrop-blur-sm border border-amber-800 rounded-xl p-6 shadow-2xl
  hover:shadow-amber-500/20 transition-all duration-300">

        <ul className="space-y-3 text-amber-200">
          <li className="flex items-center gap-2">
            <span className="text-amber-500">▸</span>
            Bachelor of Science in Information Technology
          </li>

          <li className="flex items-center gap-2">
            <span className="text-amber-500">▸</span>
            University in Baguio City
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;