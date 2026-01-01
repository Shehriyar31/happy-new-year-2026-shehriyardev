import { useEffect, useState } from 'react';
import './Particles.css';

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = () => {
      const id = Date.now() + Math.random();
      const particle = {
        id,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 10,
        size: Math.random() * 6 + 3,
        speed: Math.random() * 2 + 1,
        type: ['star', 'sparkle'][Math.floor(Math.random() * 2)],
        color: ['#ffd700', '#ff69b4', '#00bfff'][Math.floor(Math.random() * 3)]
      };
      
      setParticles(prev => [...prev.slice(-15), particle]);
      
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== id));
      }, 6000);
    };

    const interval = setInterval(createParticle, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="particles-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`particle particle-${particle.type}`}
          style={{
            left: particle.x,
            bottom: 0,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            animationDuration: `${6 / particle.speed}s`
          }}
        />
      ))}
    </div>
  );
};

export default Particles;