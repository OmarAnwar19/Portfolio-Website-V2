"use client";

import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const NightSky = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
        background: {
          color: {
            value: "inherit",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#fff",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default NightSky;
