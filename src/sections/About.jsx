import React, { useState } from "react";
import { Typewriter } from 'react-simple-typewriter';
import SortingVisualizerGame from '../components/SortingVisualizerGame';

const aboutCards = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 8h6M9 12h6M9 16h2" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Education",
    desc: "Currently pursuing BTech in Computer Science Engineering with a focus on modern software development practices.",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M16 18V6M8 18V6M3 6h18" stroke="#FF57C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Technical Skills",
    desc: "Proficient in various programming languages and frameworks, with a passion for web development and problem-solving.",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M8 17l4-4 4 4M12 3v10" stroke="#00FFC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Interests",
    desc: "Enthusiastic about open source, competitive programming, and staying updated with latest tech trends.",
  },
];

const journeyText = `Hello! I'm Aryan, a Computer Science student from BIT Mesra, with a keen interest in software development, web technologies, and machine learning.\n\nI also have a strong interest in mathematics, which enhances my problem-solving skills and helps me think more logically while coding.\n\nI'm always open to learning, collaborating on meaningful projects, and growing as a developer.\n\nWhen I'm not coding, I enjoy reading about AI trends, experimenting with UI designs, or exploring open-source contributions.`;

export default function About() {
  const [showGame, setShowGame] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden bg-gray-900"
    >
      {/* Animated Background Dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full animate-pulse opacity-20 bg-[radial-gradient(circle_at_20%_20%,#7B61FF_0,transparent_40%),radial-gradient(circle_at_80%_80%,#00FFC6_0,transparent_50%)]"></div>
      </div>

      {/* About Me + Lottie */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl mb-12 px-4">
        {/* About Me Text */}
        <div className="flex-1 text-white text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center md:text-left mb-4 glowing-text-violet">My Journey So Far</h2>
          <div className="text-cyan-400 font-mono text-lg md:text-xl mb-6 text-center md:text-left">
            <Typewriter
              words={[
                'BTech CSE (in progress)',
                'GATE CSE 2025 Qualified',
                'NTSE Scholar',
                'Learning & Building daily',
                'Open to internships & collaborations',
                'Exploring AI, ML, and Full Stack Dev',
                'Freelance/Client work: Coming soon'
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </div>
          <p className="text-lg md:text-xl font-medium whitespace-pre-line">
            {journeyText}
          </p>
        </div>
        {/* Lottie Animation */}
        <div className="flex-1 flex items-center justify-center min-w-[220px] max-w-xs w-full">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_tfb3estd.json"
            background="transparent"
            speed="1"
            style={{ width: '220px', height: '220px' }}
            loop
            autoplay
          ></lottie-player>
          </div>
      </div>

      {/* About Cards */}
      <div className="relative z-10 flex flex-col md:flex-row gap-6 mb-10">
        {aboutCards.map((card) => (
          <div
            key={card.title}
            className="group bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-7 w-80 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl border border-white/10 cursor-pointer"
            style={{ boxShadow: '0 4px 32px 0 rgba(123,97,255,0.08)' }}
          >
            <div className="mb-3">{card.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#FF57C1] transition-colors duration-300">{card.title}</h3>
            <p className="text-neutral-300 text-center text-base font-medium">{card.desc}</p>
          </div>
        ))}
        </div>

      {/* Academic Background Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/10 mb-10 mt-8">
        <h4 className="text-2xl font-bold mb-4 text-[#7B61FF]">Academic Background</h4>
        <div className="space-y-4 w-full">
          <div className="flex items-start gap-3">
            <span className="mt-1 text-[#00FFC6]">🎓</span>
            <div>
              <div className="font-bold text-lg text-white">Bachelor of Technology (B.Tech) in Computer Science</div>
              <div className="text-neutral-300">Birla Institute of Technology, Mesra, Ranchi, Jharkhand</div>
              <div className="text-sm text-neutral-400">Currently Pursuing</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 text-[#7B61FF]">🏫</span>
            <div>
              <div className="font-bold text-lg text-white">Class 12 (CBSE Board)</div>
              <div className="text-neutral-300">Nalanda Academy, Anantpura, Kota, Rajasthan</div>
              <div className="text-sm text-neutral-400">Score: 90%</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 text-[#FF57C1]">🏫</span>
            <div>
              <div className="font-bold text-lg text-white">Class 10 (CBSE Board)</div>
              <div className="text-neutral-300">Nalanda Academy, Anantpura, Kota, Rajasthan</div>
              <div className="text-sm text-neutral-400">Score: 96.2%</div>
        </div>
          </div>
        </div>
        {/* Sorting Visualizer Game Button */}
        <div className="mt-8">
          <button
            onClick={() => setShowGame((prev) => !prev)}
            className="bg-gradient-to-r from-sky-400 to-purple-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-110 transition-transform float-btn hover:glow-btn"
          >
            <span className="glowing-text-pink">Guess the Sort</span>
          </button>
          </div>
        {/* Sorting Visualizer Game (conditionally rendered) */}
        {showGame && (
          <div className="w-full bg-gray-800 rounded-2xl shadow-2xl p-6 mt-6">
            <SortingVisualizerGame />
          </div>
        )}
      </div>

      {/* Lottie Player Script */}
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
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
        .float-btn {
          animation: floatBtn 2.8s ease-in-out infinite;
        }
        @keyframes floatBtn {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px) scale(1.04); }
          100% { transform: translateY(0); }
        }
        .glow-btn:hover, .glow-btn:focus {
          box-shadow: 0 0 24px 8px #7B61FF, 0 0 48px 16px #00FFC6, 0 0 64px 24px #FF57C1;
          filter: brightness(1.15) saturate(1.3);
        }
        .glowing-text-pink {
          text-shadow:
            0 0 8px #ff57c1,
            0 0 16px #ff57c1,
            0 0 32px #ff57c1;
          animation: glow-move-pink 2.5s linear infinite;
        }
        @keyframes glow-move-pink {
          0%, 100% { text-shadow: 0 0 8px #ff57c1, 0 0 16px #ff57c1, 0 0 32px #ff57c1; }
          50% { text-shadow: 0 0 24px #ff57c1, 0 0 32px #ff57c1, 0 0 40px #ff57c1; }
        }
      `}</style>
    </section>
  );
}
