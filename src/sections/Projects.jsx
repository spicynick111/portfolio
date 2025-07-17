import React, { useState, useRef, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';

const projects = [
  {
    title: "Welth – AI-Powered Personal Finance Platform",
    description:
      "A modern, full-stack web application for personal finance management, featuring AI-powered receipt scanning, budget tracking, monthly financial insights, secure authentication, and responsive design.",
    tech: [
      "React (Next.js 15)",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "Clerk",
      "Google Gemini API",
      "PostgreSQL",
      "Prisma ORM",
      "Inngest",
      "Resend",
      "ArcJet",
    ],
    image: "/assets/projects/welth.jpg", // updated to use image
    icon: "💰",
    link: "https://example.com/welth",
  },
  {
    title: "AI SaaS Application with Subscriptions",
    description:
      "A fully functional AI SaaS Application with premium subscriptions. Includes secure user authentication, various AI-powered features like article and image generation, and a PostgreSQL database.",
    tech: [
      "PostgreSQL",
      "Express",
      "React",
      "Node.js",
      "Clerk",
      "Neon",
      "Google Gemini AI",
      "Stripe",
    ],
    image: "/assets/projects/ai-saas.jpg",
    icon: null,
    link: "https://example.com/ai-saas",
  },
  {
    title: "LLM Semantic Book Recommender",
    description:
      "Machine learning application that recommends books based on semantic similarity using large language models (LLMs), featuring sentiment analysis, text classification, and an interactive Gradio dashboard.",
    tech: [
      "Python",
      "Jupyter Notebook",
      "Gradio",
      "scikit-learn",
      "pandas",
      "numpy",
      "Hugging Face Transformers",
      "FAISS",
    ],
    image: "/assets/projects/llm-book-recommender.jpg", // updated to use image
    icon: "📚",
    link: "https://example.com/book-recommender",
  },
  {
    title: "CricPulse 2025 | Cricket Analytics Platform",
    description:
      "Modern cricket analytics dashboard built with React, TypeScript, and Tailwind CSS. Features real-time data, interactive player visualizations, dark/light mode, and an AI-powered cricket assistant.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "Context API",
      "Custom Hooks",
      "Vite",
      "Google Gemini API",
    ],
    image: "/assets/projects/cricpulse-2025.jpg",
    icon: null,
    link: "https://example.com/cricpulse",
  },
  {
    title: "Cryptocurrency Price Tracker",
    description:
      "A React JS web application providing real-time cryptocurrency prices from CoinGecko API. Features include price charts, current price, market cap, 24-hour price change, and market rank, with a search bar for individual currencies.",
    tech: [
      "React.js",
      "CoinGecko API",
      "Chart.js",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    image: "/assets/projects/crypto-tracker.jpg",
    icon: null,
    link: "https://example.com/crypto-tracker",
  },
];

const projectColors = [
  '#8be9fd', // Welth
  '#a78bfa', // AI SaaS
  '#fbc531', // Book Recommender
  '#00b894', // CricPulse
  '#6c5ce7', // Crypto Tracker
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const idleTimer = useRef(null);
  const lastInteraction = useRef(Date.now());

  // Animate on project change
  useEffect(() => {
    setAnimating(true);
    const timeout = setTimeout(() => setAnimating(false), 700);
    return () => clearTimeout(timeout);
  }, [current]);

  const nextProject = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  const goToProject = (idx) => setCurrent(idx);
  const randomProject = () => setCurrent(Math.floor(Math.random() * projects.length));

  const project = projects[current];
  const ambientColor = projectColors[current % projectColors.length];

  return (
    <section id="projects" className="container mx-auto my-16 px-4 max-w-6xl rounded-2xl bg-black/40 shadow-2xl border border-sky-200/20 relative">
      <h1 className="section-title text-3xl md:text-4xl font-bold text-center text-white mb-12 tracking-wide drop-shadow-lg">
        <span
          className="inline-block bg-gradient-to-r from-sky-400 to-sky-400 bg-clip-text text-transparent glowing-text-sky"
        >
          <Typewriter
            words={['Featured Work']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h1>
      <div className="portfolio-wrapper flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* Project Info */}
        <div className="project-info flex-1 text-white bg-white/5 rounded-2xl p-8 shadow-lg backdrop-blur-md">
          <h2 className="project-title text-2xl md:text-3xl font-bold mb-4 text-sky-300 drop-shadow">{project.title}</h2>
          <p className="project-description text-base md:text-lg mb-6 text-gray-200">{project.description}</p>
          <div className="tech-stack flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-item bg-sky-200/10 border border-sky-200/40 text-sky-300 px-3 py-1 rounded-full text-sm font-semibold shadow">
                {tech}
              </span>
            ))}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
            View Live Project →
          </a>
        </div>
        {/* 3D Computer Model (static, with project image/icon) */}
        <div className="computer-container flex-1 flex flex-col items-center">
          <div className="computer w-full max-w-lg aspect-[3/2] bg-gradient-to-br from-sky-900 to-purple-900 rounded-2xl shadow-2xl flex flex-col justify-center items-center relative">
            <div className="screen w-full h-64 md:h-80 bg-black rounded-2xl flex items-center justify-center overflow-hidden shadow-inner animate-pulse relative">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 pointer-events-none shimmer-overlay" />
              {/* Reflection overlay */}
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/30 to-transparent opacity-40 rounded-t-2xl pointer-events-none reflection-anim" />
              <div className="screen-content w-full h-full flex items-center justify-center relative z-10">
                <div>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-image w-full h-full object-cover rounded-xl" />
                  ) : (
                    <div className="project-image text-content text-5xl md:text-7xl flex items-center justify-center w-full h-full">
                      {project.icon}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="keyboard w-full h-12 bg-gradient-to-t from-gray-800 to-gray-700 rounded-b-2xl mt-2 shadow-inner relative overflow-hidden group" style={{ boxShadow: '0 8px 32px 0 #8be9fd33, 0 2px 8px 0 #fff1' }}>
              {/* Animated RGB light strip */}
              <div className="absolute left-4 right-4 top-2 h-2 rounded bg-gradient-to-r from-pink-400 via-sky-400 to-green-400 animate-rgb-glow opacity-80 blur-sm group-hover:opacity-100 group-hover:blur" />
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-b-2xl pointer-events-none" />
              {/* Fun randomize key */}
              <button onClick={randomProject} className="absolute right-6 bottom-3 w-8 h-6 bg-sky-400/80 rounded shadow-lg text-white font-bold text-xs flex items-center justify-center hover:bg-sky-500 active:scale-95 transition-all z-20">🎲</button>
            </div>
          </div>
          {/* Indicators */}
          <div className="project-indicators flex gap-2 mt-6">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`indicator w-4 h-4 rounded-full border-2 ${idx === current ? 'bg-sky-400 border-sky-400 scale-125 shadow-lg' : 'bg-sky-200/20 border-sky-200/40'} transition-all`}
                onClick={() => goToProject(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
          {/* Navigation */}
          <div className="navigation flex gap-4 mt-6 justify-center w-full">
            <button onClick={prevProject} className="nav-arrow px-4 h-10 rounded-full bg-sky-200/10 border border-sky-400/40 flex items-center justify-center shadow-md hover:bg-sky-400 hover:border-sky-400 transition-all focus:outline-none">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sky-400"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <button onClick={nextProject} className="nav-arrow px-4 h-10 rounded-full bg-sky-200/10 border border-sky-400/40 flex items-center justify-center shadow-md hover:bg-sky-400 hover:border-sky-400 transition-all focus:outline-none">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sky-400"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
          </div>
        </div>
      </div>
      <style>{`
  .shimmer-overlay {
    background: linear-gradient(120deg, transparent 0%, #8be9fd33 50%, transparent 100%);
    animation: shimmer-move 2.5s infinite linear;
    opacity: 0.7;
  }
  @keyframes shimmer-move {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  .glowing-text-sky {
    text-shadow:
      0 0 8px #38bdf8,
      0 0 16px #38bdf8,
      0 0 32px #38bdf8;
    animation: glow-move-sky 2.5s linear infinite;
  }
  @keyframes glow-move-sky {
    0%, 100% { text-shadow: 0 0 8px #38bdf8, 0 0 16px #38bdf8, 0 0 32px #38bdf8; }
    50% { text-shadow: 0 0 24px #38bdf8, 0 0 32px #38bdf8, 0 0 40px #38bdf8; }
  }
  @keyframes rgb-glow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
  .animate-rgb-glow {
    animation: rgb-glow 3s linear infinite;
  }
  .flicker {
    animation: flicker-anim 0.7s linear;
  }
  @keyframes flicker-anim {
    0%, 100% { opacity: 1; }
    10%, 30%, 50%, 70% { opacity: 0.7; }
    20%, 40%, 60%, 80% { opacity: 0.4; }
    90% { opacity: 0.9; }
  }
  .reflection-anim {
    animation: reflection-move 3s infinite linear alternate;
  }
  @keyframes reflection-move {
    0% { opacity: 0.3; transform: translateY(0); }
    100% { opacity: 0.5; transform: translateY(10px); }
  }
  .animate-spin-slow {
    animation: spin 2.5s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .nav-arrow {
    min-width: 40px;
    height: 40px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(.4,0,.2,1);
    box-shadow: 0 2px 8px rgba(56,189,248,0.15);
    position: relative;
    overflow: hidden;
  }
  .nav-arrow svg {
    width: 20px;
    height: 20px;
    fill: #38bdf8;
    transition: fill 0.2s;
  }
  .nav-arrow:hover {
    background: #38bdf8;
    border-color: #38bdf8;
    box-shadow: 0 4px 16px #38bdf866;
    transform: scale(1.08);
  }
  .nav-arrow:hover svg {
    fill: #fff;
  }
`}</style>
    </section>
  );
}
