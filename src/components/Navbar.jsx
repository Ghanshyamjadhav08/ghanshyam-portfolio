import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700">
      <div className="container-custom flex items-center justify-between py-4">
        <Link to="/">
          <div className="flex items-center gap-3">
            <div
              className="
    w-10
    h-10
    rounded-full
    bg-cyan-500
    flex
    items-center
    justify-center
    font-bold
    text-black
  "
            >
              GJ
            </div>

            <span className="font-bold text-xl">Ghanshyam</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 font-semibold"
                  : "text-slate-300 hover:text-cyan-400 transition"
              }
            >
              {link.label}
            </NavLink>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-medium"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <nav className="flex flex-col p-5 gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-cyan-400 font-semibold" : "text-slate-300"
                }
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-cyan-500 px-4 py-2 rounded text-center"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
