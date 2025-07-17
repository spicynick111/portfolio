import React, { useState } from "react";
import { Particles } from "../components/Particles";

const cards = [
  // Coding Quotes
  {
    type: "quote",
    title: "Code Wisdom",
    content: "“Programs must be written for people to read, and only incidentally for machines to execute.”",
    author: "Harold Abelson"
  },
  {
    type: "challenge",
    title: "Mini Coding Challenge",
    content: "Write a function that reverses a string in JavaScript. Can you do it in one line?",
    answer: "const reverse = str => str.split('').reverse().join('');"
  },
  {
    type: "quote",
    title: "Debugging Truth",
    content: "“If debugging is the process of removing software bugs, then programming must be the process of putting them in.”",
    author: "Edsger Dijkstra"
  },
  {
    type: "challenge",
    title: "Mini Coding Challenge",
    content: "What is the output of: console.log(typeof null)?",
    answer: "'object' (a classic JavaScript quirk!)"
  },
  {
    type: "quote",
    title: "Learning",
    content: "“The only way to learn a new programming language is by writing programs in it.”",
    author: "Dennis Ritchie"
  },
  {
    type: "challenge",
    title: "Mini Coding Challenge",
    content: "How do you check if a number is even in Python?",
    answer: "num % 2 == 0"
  },
  {
    type: "quote",
    title: "Motivation",
    content: "“Talk is cheap. Show me the code.”",
    author: "Linus Torvalds"
  },
  {
    type: "challenge",
    title: "Mini Coding Challenge",
    content: "What does the 'map' function do in JavaScript?",
    answer: "It creates a new array by applying a function to each element of the original array."
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const next = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
    setAnimKey((k) => k + 1);
  };
  const prev = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
    setAnimKey((k) => k + 1);
  };
  const card = cards[current];

  return (
    <section className="relative flex flex-col items-center justify-center py-16 min-h-[60vh] bg-black overflow-hidden">
      {/* Cursor-following particle effect */}
      <Particles
        className="absolute inset-0 w-full h-full z-0"
        quantity={80}
        staticity={30}
        ease={40}
        size={0.7}
        color="#00ff99"
      />
      <h2 className="z-10 text-2xl xs:text-3xl md:text-4xl font-extrabold text-center text-[#00ff99] mb-8 drop-shadow-lg select-none font-mono tracking-widest">
        <span className="terminal-blink">$</span> Code Quotes & Challenges
      </h2>
      <div className="relative w-full max-w-[95vw] xs:max-w-md sm:max-w-lg flex flex-col items-center z-10">
        <div
          key={animKey}
          className={`terminal-card animate-card-in transition-all duration-700 ease-[cubic-bezier(.68,-0.55,.27,1.55)]`}
        >
          <h3 className={`text-base xs:text-lg font-bold mb-3 md:mb-4 text-[#00ff99] font-mono tracking-wide`}>{card.title}</h3>
          <p className={`mb-3 xs:mb-4 text-sm xs:text-base font-mono text-[#d1ffd6] leading-relaxed ${card.type === 'quote' ? 'italic' : ''}`}>{card.content}</p>
          {card.type === 'quote' && <p className="text-xs xs:text-sm text-[#00ff99] font-mono">— {card.author}</p>}
          {card.type === 'challenge' && (
            <details className="mt-3 xs:mt-4 cursor-pointer">
              <summary className="text-[#00ff99] underline font-mono">Show Answer</summary>
              <div className="mt-2 text-[#baffc9] font-mono text-xs xs:text-sm">{card.answer}</div>
            </details>
          )}
        </div>
        <div className="flex gap-4 mt-8 justify-center z-10">
          <button onClick={prev} className="terminal-nav-btn bg-[#111] text-[#00ff99] border border-[#00ff99]/40 hover:bg-[#00ff99] hover:text-black shadow-lg">Prev</button>
          <button onClick={next} className="terminal-nav-btn bg-[#111] text-[#00ff99] border border-[#00ff99]/40 hover:bg-[#00ff99] hover:text-black shadow-lg">Next</button>
        </div>
      </div>
      <style>{`
        .terminal-card {
          position: relative;
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
          padding: 2.2rem 1.2rem 2rem 1.2rem;
          border-radius: 1.2rem;
          background: rgba(10, 10, 10, 0.98);
          box-shadow: 0 0 32px 0 #00ff9955, 0 2px 24px 0 #000a;
          border: 2.5px solid #00ff99;
          border-top: 4px solid #00ff99;
          border-bottom: 4px solid #00ff99;
          z-index: 2;
          font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
        }
        .animate-card-in {
          animation: card-in 0.7s cubic-bezier(.68,-0.55,.27,1.55);
        }
        @keyframes card-in {
          0% { opacity: 0; transform: scale(0.85) rotateY(-18deg); }
          60% { opacity: 1; transform: scale(1.04) rotateY(6deg); }
          100% { opacity: 1; transform: scale(1) rotateY(0deg); }
        }
        .terminal-nav-btn {
          min-width: 80px;
          padding: 0.6rem 1.2rem;
          border-radius: 0.7rem;
          font-weight: 600;
          font-size: 1rem;
          font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
          box-shadow: 0 2px 12px 0 #00ff9922;
          transition: transform 0.18s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.18s, background 0.18s, color 0.18s;
          outline: none;
          border: 2px solid #00ff99;
          cursor: pointer;
        }
        .terminal-nav-btn:hover, .terminal-nav-btn:active {
          transform: scale(1.08) translateY(-2px) rotate(-2deg);
          background: #00ff99;
          color: #111;
          box-shadow: 0 4px 24px 0 #00ff9955;
        }
        .terminal-blink {
          animation: blink 1.1s steps(2, start) infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 640px) {
          .terminal-card {
            max-width: 98vw;
            padding: 1.2rem 0.5rem 1.2rem 0.5rem;
          }
          .terminal-nav-btn {
            font-size: 0.95rem;
            min-width: 68px;
            padding: 0.5rem 0.8rem;
          }
        }
        @media (max-width: 400px) {
          .terminal-card {
            padding: 0.8rem 0.2rem 0.8rem 0.2rem;
          }
        }
      `}</style>
    </section>
  );
}
