import React from "react";
import Particles from "../Animated_files/Particile";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black pointer-events-none w-full h-full">
       <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
    </div>
  );
}

export default Background;
