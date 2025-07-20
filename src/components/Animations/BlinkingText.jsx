import React, { useState, useEffect } from 'react'; // Added missing imports

const BlinkingText = ({ children, className = "" }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prev => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`transition-opacity duration-300 ${className} ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </span>
  );
};

export default BlinkingText; // Added missing export