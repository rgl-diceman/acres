import React, { useState, useEffect } from 'react';

const GlitchText = ({ children, className = "" }) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`${className} ${glitch ? 'animate-pulse text-green-400' : ''} transition-colors duration-200`}>
      {children}
    </span>
  );
};

export default GlitchText;