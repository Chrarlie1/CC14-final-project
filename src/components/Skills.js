import React from 'react';

const Skills = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600">Skills</h2>
      <div className="flex flex-wrap gap-4 mt-4">
        <span className="bg-blue-100 px-3 py-1 rounded">React</span>
        <span className="bg-blue-100 px-3 py-1 rounded">JavaScript</span>
        <span className="bg-blue-100 px-3 py-1 rounded">Tailwind CSS</span>
        <span className="bg-blue-100 px-3 py-1 rounded">Laravel</span>
      </div>
    </section>
  );
};

export default Skills;