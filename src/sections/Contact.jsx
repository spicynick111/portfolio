import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
// Removed: import { Canvas } from "@react-three/fiber";
// Removed: import { useGLTF, OrbitControls } from "@react-three/drei";

// Hearts Animation Component
const HeartsAnimation = ({ isVisible, onComplete }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Configuration
    const config = {
      animationType: "hearts",
      particleCount: 81,
      spread: 70,
      startVelocity: 12,
      elementSize: 32,
      lifetime: 180,
      physics: {
        gravity: 0.35,
        wind: 0,
        friction: 0.98
      },
      effects: {
        pulse: true
      },
      colors: [
        "#ff1744",
        "#e91e63",
        "#ff4569",
        "#ff6b6b"
      ]
    };

    // Create hearts
    const createHeart = (x, y) => {
      const color = config.colors[Math.floor(Math.random() * config.colors.length)];
      const size = config.elementSize * (0.5 + Math.random() * 0.5);
      const velocity = {
        x: (Math.random() - 0.5) * config.startVelocity,
        y: -Math.random() * config.startVelocity * 0.5
      };
      
      return {
        x,
        y,
        size,
        color,
        velocity,
        life: config.lifetime,
        maxLife: config.lifetime,
        pulse: 0
      };
    };

    // Initialize particles
    particles.current = [];
    for (let i = 0; i < config.particleCount; i++) {
      const x = canvas.width / 2 + (Math.random() - 0.5) * config.spread;
      const y = canvas.height / 2 + (Math.random() - 0.5) * config.spread;
      particles.current.push(createHeart(x, y));
    }

    // Draw heart shape
    const drawHeart = (x, y, size, color, alpha = 1) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size / 30, size / 30);
      ctx.globalAlpha = alpha;
      
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, -10);
      ctx.bezierCurveTo(-8, -18, -15, -8, -15, 0);
      ctx.bezierCurveTo(-15, 8, -8, 18, 0, 25);
      ctx.bezierCurveTo(8, 18, 15, 8, 15, 0);
      ctx.bezierCurveTo(15, -8, 8, -18, 0, -10);
      ctx.fill();
      
      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let activeParticles = 0;
      
      particles.current.forEach((particle, index) => {
        if (particle.life <= 0) return;
        
        activeParticles++;
        
        // Update physics
        particle.velocity.y += config.physics.gravity;
        particle.velocity.x *= config.physics.friction;
        particle.velocity.y *= config.physics.friction;
        
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        
        // Update life
        particle.life--;
        
        // Pulse effect
        if (config.effects.pulse) {
          particle.pulse = Math.sin(particle.life * 0.1) * 0.2 + 0.8;
        }
        
        // Draw particle
        const alpha = particle.life / particle.maxLife;
        const pulseSize = particle.size * (config.effects.pulse ? particle.pulse : 1);
        drawHeart(particle.x, particle.y, pulseSize, particle.color, alpha);
      });
      
      if (activeParticles > 0) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

// Removed ContactModel function

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [showHearts, setShowHearts] = useState(false);
  const popupRef = useRef(null);

  // Close popup on Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && showHearts) setShowHearts(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showHearts]);

  // Close popup on click outside
  useEffect(() => {
    const handleClick = (event) => {
      if (showHearts && popupRef.current && event.target === popupRef.current) setShowHearts(false);
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [showHearts]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_97jja0m",      // Service ID
        "template_uvcagwg",     // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Portfolio Contact Form",
        },
        "ZUySJVf986BKXcOTb"     // Public Key
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
      setShowHearts(true);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };
  return (
    <section id="contact" className="relative flex flex-col md:flex-row items-center justify-center c-space section-spacing gap-8">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      
      {/* Hearts Animation */}
      <HeartsAnimation 
        isVisible={showHearts} 
        onComplete={() => setShowHearts(false)} 
      />
      
      {/* Success Message Overlay */}
      {showHearts && (
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none"
          ref={popupRef}
        >
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 text-center text-white pointer-events-auto">
            <h2 className="text-3xl font-bold mb-4 text-pink-400">Message Sent! 💖</h2>
            <p className="text-lg">Thank you for reaching out. I'll get back to you soon!</p>
            <button 
              onClick={() => setShowHearts(false)}
              className="mt-6 px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-full transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary z-10">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="your name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="enter your email address"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
