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
        y: Math.random() * window.innerHeight * 0.6 + 100,
        color: ['#ff6b35', '#ff8c42', '#ffa726', '#ffcc02', '#ff5722'][Math.floor(Math.random() * 5)]
      };
      
      setFireworks(prev => [...prev, newFirework]);
      
      setTimeout(() => {
        setFireworks(prev => prev.filter(fw => fw.id !== id));
      }, 2000);
    };

    const interval = setInterval(createFirework, 800);
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
          {[...Array(12)].map((_, i) => (
            <div key={i} className="spark" style={{ '--i': i }} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Fireworks;