"use client"

import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "tsparticles-slim"

export default function GoldParticles() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: ["#FFD700", "#FFC300"]
          },

          size: {
            value: { min: 1, max: 3 }
          },

          move: {
            enable: true,
            speed: 0.5
          },

          opacity: {
            value: 0.6
          }
        },

        background: {
          color: "transparent"
        }
      }}
    />
  )
}