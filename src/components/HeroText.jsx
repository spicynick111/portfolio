import MorphingText from "./MorphingText";
import { motion } from "motion/react";
import React from "react";

const HeroText = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-0 text-left rounded-3xl bg-clip-text max-w-xl md:max-w-2xl w-full whitespace-normal break-words">
      {/* Add 12 lines of vertical space above all hero text */}
      <div style={{ height: '7.5rem' }} />
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="shine-text text-2xl md:text-3xl font-bold mb-[10px]"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Aryan Kumar 👋
        </motion.h1>
        <motion.p
          className="font-normal text-[#e3e3e3] text-[1.3rem] leading-relaxed mb-5"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1 }}
        >
          I’m a Full Stack Developer & Machine Learning Enthusiast, crafting smart web experiences and intelligent systems.<br />
        </motion.p>
        <span className="block text-[#ff57c1] text-base mb-4">
          <span role="img" aria-label="graduation cap" style={{ marginRight: '4px', verticalAlign: 'middle' }}>🎓</span>GATE CSE 2025 Qualified &nbsp;|&nbsp; 🖥️ UI to Backend &nbsp;|&nbsp;<br />
          <span className="block mt-1">🤖 AI Explorer</span>
        </span>
        <div className="flex flex-wrap items-center mt-1 text-[#72f0f6] font-mono text-[1.2rem]">
          <span className="mr-2">I turn ideas into</span>
          <MorphingText
            words={["scalable.", "beautiful.", "impactful digital solutions."]}
            className="font-bold"
            stayDuration={1200}
          />
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-4 w-full max-w-xl mx-auto md:hidden">
        {/* Add less vertical space above all hero text (mobile) */}
        <div style={{ height: '2rem' }} />
        <motion.p
          className="shine-text text-3xl font-bold mt-8"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I’m Aryan Kumar 👋
        </motion.p>
        <motion.p
          className="text-lg font-medium text-white md:text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1 }}
        >
          I’m a Full Stack Developer & Machine Learning Enthusiast, crafting smart web experiences and intelligent systems.
        </motion.p>
        <div className="flex flex-col items-start w-full mb-4">
          <span className="block text-pink-400 text-base font-bold mb-1">
            <span role="img" aria-label="graduation cap" style={{ marginRight: '4px', verticalAlign: 'middle' }}>🎓</span>GATE CSE 2025 Qualified
          </span>
          <div className="flex flex-row items-center gap-2 text-pink-400 text-base font-semibold">
            <span role="img" aria-label="computer">🖥️</span>
            <span>UI to Backend</span>
            <span className="mx-2">|</span>
            <span role="img" aria-label="robot">🤖</span>
            <span>AI Explorer</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center text-emerald-400 md:text-[#72f0f6] font-mono text-base">
          <span className="mr-2">I turn ideas into</span>
          <MorphingText
            words={["scalable.", "beautiful.", "impactful digital solutions."]}
            className="font-bold"
            stayDuration={1200}
          />
        </div>
      </div>
      <style>{`
        .shine-text {
          position: relative;
          font-family: sans-serif;
          text-transform: uppercase;
          letter-spacing: 4px;
          overflow: hidden;
          background: linear-gradient(90deg, #000, #fff, #000);
          background-repeat: no-repeat;
          background-size: 80%;
          animation: animate 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: rgba(255, 255, 255, 0);
        }
        @keyframes animate {
          0% { background-position: -500%; }
          100% { background-position: 500%; }
        }
      `}</style>
    </div>
  );
};

export default HeroText;