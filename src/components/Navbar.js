const Navbar = ({ setActiveSection }) => {
  const navItems = ["About", "Education", "Experience", "Skills", "Contact"];

  return (
    <nav className="bg-blue-500 text-white shadow">
      <div className="max-w-4xl mx-auto flex justify-center gap-6 py-4">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveSection(item)}
            className="hover:text-gray-200 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;