import { useState } from "react";
import { motion } from "framer-motion";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#hero">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#skills">
          Skills
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#projects">
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <motion.a
            href="/"
            className="text-xl font-bold transition-all text-neutral-400 hover:text-sky-400 active:text-sky-400 drop-shadow-lg glowing-text-violet"
            whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 10, 0] }}
            whileTap={{ scale: 0.97, rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            Aryan
          </motion.a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
      <style>{`
        .glowing-text-violet {
          color: #fff;
          text-shadow:
            0 0 8px #7B61FF,
            0 0 16px #7B61FF,
            0 0 32px #7B61FF;
          animation: glow-move-violet 2.5s linear infinite;
        }
        @keyframes glow-move-violet {
          0%, 100% { text-shadow: 0 0 8px #7B61FF, 0 0 16px #7B61FF, 0 0 32px #7B61FF; }
          50% { text-shadow: 0 0 24px #7B61FF, 0 0 32px #7B61FF, 0 0 40px #7B61FF; }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
