import React, { useState } from "react";
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
    image: "/assets/projects/welth.jpg",
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
    image: "/assets/projects/llm-book-recommender.jpg",
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
    ],
    image: "/assets/projects/crypto-tracker.jpg",
    icon: "💹",
    link: "https://example.com/crypto-tracker",
  },
  // ... add more projects as needed
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const prevProject = () => setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const nextProject = () => setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const goToProject = (idx) => setCurrent(idx);

  return (
    <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <Typewriter
            words={['Projects', 'My Work', 'Portfolio']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <div className="relative bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
          <a href={projects[current].link} target="_blank" rel="noopener noreferrer">
            <img
              src={projects[current].image}
              alt={projects[current].title}
              className="w-full max-w-md h-64 object-cover rounded-lg mb-4 transition-all duration-300"
              loading="lazy"
            />
          </a>
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            {projects[current].icon && <span>{projects[current].icon}</span>}
            {projects[current].title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">{projects[current].description}</p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {projects[current].tech.map((tech, idx) => (
              <span
                key={idx}
                className="bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-200 px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Indicators */}
          <div className="project-indicators flex gap-2 mt-6">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`indicator w-4 h-4 rounded-full border-2 ${idx === current ? 'bg-sky-400 border-sky-400 scale-125 shadow-lg' : 'bg-sky-200/20 border-sky-200/40'} transition-all`}
                onClick={() => goToProject(idx)}
                onTouchStart={() => goToProject(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
          {/* Navigation */}
          <div className="navigation flex gap-4 mt-6 justify-center w-full">
            <button
              onClick={prevProject}
              onTouchStart={prevProject}
              className="nav-btn px-4 py-2 bg-sky-200 dark:bg-sky-800 text-sky-800 dark:text-sky-100 rounded hover:bg-sky-300 dark:hover:bg-sky-700 transition"
              aria-label="Previous Project"
            >
              Prev
            </button>
            <button
              onClick={nextProject}
              onTouchStart={nextProject}
              className="nav-btn px-4 py-2 bg-sky-200 dark:bg-sky-800 text-sky-800 dark:text-sky-100 rounded hover:bg-sky-300 dark:hover:bg-sky-700 transition"
              aria-label="Next Project"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
