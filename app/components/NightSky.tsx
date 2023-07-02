"use client";

import React, { useCallback, useEffect, useState } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { useTheme } from "next-themes";

const NightSky = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
  }, []);

  if (!loading) {
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
          particles: {
            color: {
              value: theme === "dark" ? "#fff" : "#707070",
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
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 500,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
};

export default NightSky;
