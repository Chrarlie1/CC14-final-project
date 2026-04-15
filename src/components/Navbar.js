const Navbar = ({ setActiveSection, activeSection }) => {
  const navItems = ["About", "Education", "Experience", "Skills", "Contact"];

  return (
    <nav className="bg-black/60 backdrop-blur-md border-b border-amber-800 shadow-lg sticky top-0 z-50">

      <div className="max-w-5xl mx-auto flex justify-center gap-6 py-4">

        {navItems.map((item) => {
          const isActive = activeSection === item;

          return (
            <button
              key={item}
              onClick={() => setActiveSection(item)}
              className={`
                relative px-4 py-2 text-sm tracking-widest font-medium
                transition-all duration-300
                whitespace-nowrap
                hover:text-amber-300
              `}
            >

              {/* SINGLE TEXT ONLY (NO OVERLAY = NO CUTTING) */}
              <span
                className={
                  isActive
                    ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent"
                    : "text-amber-400"
                }
              >
                {item}
              </span>

              {/* ACTIVE UNDERLINE */}
              {isActive && (
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-10 h-[2px]
                                 bg-gradient-to-r from-amber-400 to-amber-600
                                 shadow-[0_0_10px_rgba(255,180,80,0.6)] rounded-full">
                </span>
              )}

            </button>
          );
        })}

      </div>

    </nav>
  );
};

export default Navbar;