import React from 'react';

const AboutMe = () => {
  return (
    <section className="my-12 max-w-4xl mx-auto">

      <div className=" bg-red-900/40 backdrop-blur-sm border border-amber-800 rounded-xl shadow-2xl p-8">

        {/* BIG GRADIENT TITLE */}
        <h2 className="text-4xl font-extrabold tracking-widest mb-6
                       bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600
                       bg-clip-text text-transparent">
          ABOUT ME
        </h2>

        {/* CONTENT ROW */}
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* PROFILE IMAGE */}
          <div className="flex-shrink-0">
            <div className="w-36 h-36 rounded-full border-2 border-amber-500
                            bg-gradient-to-br from-amber-500/30 to-black/60
                            flex items-center justify-center
                            shadow-lg shadow-amber-500/20 overflow-hidden">

             <img 
  src={process.env.PUBLIC_URL + "/profile.jpg"} 
  alt="Profile"
  className="w-32 h-32 rounded-full object-cover border border-amber-700"
/>

            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="flex-1">

            <div className="h-[2px] w-28 bg-gradient-to-r from-amber-500 to-transparent mb-5"></div>

            <p className="text-amber-200 text-lg leading-relaxed">
              Hello, I’m Charlie and this is my website. 
              I am a passionate web developer from{' '}
              <span className="text-amber-400 font-semibold">Baguio City</span>,
              I enjoy reading, gaming, drawing,
              and learning new things related to technology and web development and
              focused on building
              modern, interactive, and user-friendly web applications with clean UI and smooth UX.
            </p>

            <div className="mt-6 inline-block px-4 py-1 rounded-full border border-amber-700
                            bg-black/50 text-amber-400 text-sm tracking-wide">
               WEB DEVELOPER
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutMe;