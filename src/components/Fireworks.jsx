import { useEffect, useState } from 'react';
import './Fireworks.css';

const Fireworks = () => {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    const createFirework = () => {
      const id = Date.now() + Math.random();
      const newFirework = {
        id,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.5 + 100,
        color: ['#ff6b35', '#ff8c42', '#ffa726'][Math.floor(Math.random() * 3)]
      };
      
      setFireworks(prev => [...prev.slice(-8), newFirework]);
      
      setTimeout(() => {
        setFireworks(prev => prev.filter(fw => fw.id !== id));
      }, 1500);
    };

    const interval = setInterval(createFirework, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fireworks-container">
      {fireworks.map(firework => (
        <div
          key={firework.id}
          className="firework"
          style={{
            left: firework.x,
            top: firework.y,
            '--firework-color': firework.color
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="spark" style={{ '--i': i }} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Fireworks;