import React, { useState, useEffect } from 'react';

const MatrixRain = () => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const chars = '01АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    const newDrops = [];

    for (let i = 0; i < 15; i++) {
      newDrops.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * -100, // Start above the viewport
        char: chars[Math.floor(Math.random() * chars.length)],
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    setDrops(newDrops);

    const interval = setInterval(() => {
      setDrops(prev => prev.map(drop => ({
        ...drop,
        y: drop.y > 100 ? -10 : drop.y + drop.speed,
        char: Math.random() > 0.1 ? drop.char : chars[Math.floor(Math.random() * chars.length)],
        opacity: drop.y < 0 ? 0.1 : Math.min(0.6, drop.y * 0.005)
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {drops.map(drop => (
        <div
          key={drop.id}
          className="absolute text-green-400 font-mono text-xs"
          style={{
            left: `${drop.x}%`,
            top: `${drop.y}%`,
            opacity: drop.opacity,
            textShadow: '0 0 8px rgba(74, 222, 128, 0.7)'
          }}
        >
          {drop.char}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;