import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const skills = [
  {
    title: "Frontend Development",
    icon: <span className="mr-2">🖌️</span>,
    description: "Technologies and frameworks I use to build modern, responsive user interfaces",
    color: "bg-green-900",
    text: "text-green-200",
    badges: [
      "HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"
    ],
  },
  {
    title: "Backend Development",
    icon: <span className="mr-2">🖥️</span>,
    description: "Technologies and frameworks I use to build robust server-side applications and APIs",
    color: "bg-blue-900",
    text: "text-blue-200",
    badges: [
      "Node.js", "Express.js", "Python", "REST APIs"
    ],
  },
  {
    title: "Machine Learning & Tools",
    icon: <span className="mr-2">🤖</span>,
    description: "Key languages, libraries, and tools I use for data science and machine learning projects",
    color: "bg-pink-900",
    text: "text-pink-200",
    badges: [
      "Python", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "Selenium", "Jupyter Notebook", "MLOps"
    ],
  },
  {
    title: "Database & Storage",
    icon: <span className="mr-2">🗄️</span>,
    description: "",
    color: "bg-purple-900",
    text: "text-purple-200",
    badges: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    icon: <span className="mr-2">☁️</span>,
    description: "",
    color: "bg-orange-900",
    text: "text-orange-200",
    badges: ["AWS", "Docker", "Linux", "Multi-tired Architecture"],
  },
  {
    title: "Tools & Technologies",
    icon: <span className="mr-2">🛠️</span>,
    description: "",
    color: "bg-cyan-900",
    text: "text-cyan-200",
    badges: ["Git", "GitHub", "Postman", "Selenium"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#111112] py-10 px-4 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">
        <span className="inline-block bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent glowing-text-pink">
          <Typewriter
            words={['Skills']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h2>
      <p className="text-lg text-gray-400 mb-10 text-center max-w-2xl">
        A showcase of the technologies and tools I use to build modern, scalable solutions.
      </p>
      <div className="w-full max-w-2xl flex flex-col gap-8 mb-8">
        {skills.slice(0,3).map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl bg-[#18191c] border border-[#232428] p-7 flex flex-col items-start shadow-lg"
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="text-2xl font-bold text-white mr-2">{cat.title}</h3>
            </div>
            {cat.description && <p className="text-gray-400 mb-4 text-base">{cat.description}</p>}
            <div className="flex flex-wrap gap-3">
              {cat.badges.map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${cat.color} ${cat.text} shadow-sm whitespace-nowrap`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {skills.slice(3).map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl bg-[#18191c] border border-[#232428] p-7 flex flex-col items-start shadow-lg"
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="text-xl font-bold text-white mr-2">{cat.title}</h3>
            </div>
            {cat.description && <p className="text-gray-400 mb-4 text-base">{cat.description}</p>}
            <div className="flex flex-wrap gap-3">
              {cat.badges.map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${cat.color} ${cat.text} shadow-sm whitespace-nowrap`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-4 mb-0 pb-0">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">Core Tech Stack</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center w-full max-w-2xl mb-6">
          {[
            { src: '/assets/logos/react.svg', alt: 'React' },
            { src: '/assets/logos/javascript.svg', alt: 'JavaScript' },
            { src: '/assets/logos/github.svg', alt: 'GitHub' },
            { src: '/assets/logos/tailwindcss.svg', alt: 'Tailwind CSS' },
            { src: '/assets/logos/html5.svg', alt: 'HTML5' },
            { src: '/assets/logos/css3.svg', alt: 'CSS3' },
            { src: '/assets/logos/git.svg', alt: 'Git' },
            { src: '/assets/logos/threejs.svg', alt: 'Three.js' },
            { src: 'https://img.icons8.com/3d-fluency/94/python.png', alt: 'Python (3D)' },
            { src: 'https://img.icons8.com/fluency/48/node-js.png', alt: 'Node.js (Fluency)' },
            { src: 'https://img.icons8.com/nolan/64/express-js.png', alt: 'Express.js' },
            { src: 'https://img.icons8.com/color/48/mongo-db.png', alt: 'MongoDB' },
            { src: 'https://img.icons8.com/stickers/100/mysql.png', alt: 'MySQL' },
            { src: 'https://img.icons8.com/color/48/firebase.png', alt: 'Firebase' },
            { src: 'https://img.icons8.com/color/48/amazon-web-services.png', alt: 'AWS' },
            { src: 'https://img.icons8.com/fluency/48/docker.png', alt: 'Docker' },
            { src: 'https://img.icons8.com/ultraviolet/40/selenium-test-automation.png', alt: 'Selenium' },
            { src: 'https://img.icons8.com/color/48/numpy.png', alt: 'NumPy' },
            { src: 'https://img.icons8.com/color/48/matplotlib.png', alt: 'Matplotlib' },
            { src: 'https://img.icons8.com/color/48/linux--v1.png', alt: 'Linux' },
          ].map((logo, i) => (
            <div key={logo.alt} className="relative group flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                tabIndex={0}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:shadow-cyan-400/40 hover:ring-2 hover:ring-cyan-400 hover:drop-shadow-lg animate-float focus:scale-110 focus:rotate-6 focus:shadow-cyan-400/40 focus:ring-2 focus:ring-cyan-400 focus:drop-shadow-lg outline-none"
                style={{ animationDelay: `${i * 0.15}s` }}
                loading="lazy"
              />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-gray-900 text-xs text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition pointer-events-none whitespace-nowrap z-10 shadow-lg border border-cyan-400">
                {logo.alt}
              </span>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0); }
          }
          .animate-float {
            animation: float 2.8s ease-in-out infinite;
          }
          .hover\:rotate-6:hover, .focus\:rotate-6:focus { transform: scale(1.1) rotate(6deg); }
          .hover\:shadow-cyan-400\/40:hover, .focus\:shadow-cyan-400\/40:focus { box-shadow: 0 4px 24px 0 #22d3ee66; }
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
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto animate-fadein-cloud mb-0 pb-0">
          {[
            'React', 'Node.js', 'Python', 'MongoDB', 'Express', 'Pandas', 'GitHub', 'Tailwind', 'Scikit-learn', 'Docker', 'VS Code', 'AWS', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Linux', 'Postman', 'Firebase', 'C/C++', 'Java', 'Azure', 'WordPress', 'Three.js'
          ].map((skill, i) => (
            <span
              key={skill}
              className="px-4 py-1 rounded-full text-sm font-semibold bg-gray-800 text-cyan-200 shadow-sm whitespace-nowrap opacity-0 animate-fadein"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes fadein {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: none; }
          }
          .animate-fadein span {
            animation: fadein 0.7s forwards;
          }
        `}</style>
      </div>
    </section>
  );
} 