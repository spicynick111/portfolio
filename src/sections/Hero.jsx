import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="hero" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space" style={{ position: 'relative' }}>
      <HeroText />
      <ParallaxBackground />
      <figure
        className="astronaut-illustration absolute inset-0"
        style={{ width: "100vw", height: "100vh", pointerEvents: 'none', zIndex: 1 }}
      >
        <Canvas camera={{ position: [0, 1, 3] }} style={{ width: '100%', height: '100%', background: 'transparent' }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
      <style>{`
        @media (max-width: 768px) {
          .astronaut-illustration {
            top: auto !important;
            bottom: -20px !important;
            right: -30px !important;
            left: auto !important;
            width: 400px !important;
            height: auto !important;
            transform: scale(0.6) !important;
            z-index: -1 !important;
            opacity: 0.7 !important;
            pointer-events: none !important;
          }
        }
        @media (max-width: 480px) {
          .astronaut-illustration {
            transform: scale(0.45) !important;
            bottom: -50px !important;
            right: -50px !important;
          }
        }
      `}</style>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
