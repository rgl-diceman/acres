import React, { useState, useEffect } from "react";
import PixelArt from './PixelArt/PixelArt'; 

const CounterDisplay = () => {
  const [count, setCount] = useState(1337);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/80 border-2 border-gray-500 p-2 text-center font-mono backdrop-blur-sm">
      <div className="text-green-400 text-sm font-bold flex items-center justify-center gap-2">
        <PixelArt size={16} />
        VISITORS: {count.toLocaleString()}
        <PixelArt size={16} />
      </div>
    </div>
  );
};

export default CounterDisplay;