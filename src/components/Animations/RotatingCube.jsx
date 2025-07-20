import React, { useState, useEffect } from 'react';

const RotatingCube = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-16 mb-4">
      <div
        className="w-12 h-12 relative"
        style={{
          transform: `rotateX(${rotation}deg) rotateY(${rotation * 1.5}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.05s linear'
        }}
      >
        {['front', 'back', 'left', 'right', 'top', 'bottom'].map((face) => (
          <div
            key={face}
            className={`absolute w-12 h-12 ${face === 'front' || face === 'top' ? 'bg-gray-600' : 'bg-gray-500'} border-2 border-gray-400`}
            style={{
              transform: getFaceTransform(face)
            }}
          />
        ))}
      </div>
    </div>
  );
};

const getFaceTransform = (face) => {
  const translateZ = 24;
  switch(face) {
    case 'front': return `translateZ(${translateZ}px)`;
    case 'back': return `translateZ(-${translateZ}px)`;
    case 'left': return `rotateY(-90deg) translateZ(${translateZ}px)`;
    case 'right': return `rotateY(90deg) translateZ(${translateZ}px)`;
    case 'top': return `rotateX(90deg) translateZ(${translateZ}px)`;
    case 'bottom': return `rotateX(-90deg) translateZ(${translateZ}px)`;
    default: return '';
  }
};

export default RotatingCube;