import React from 'react';

const PixelExclaim = ({ className = "", size = 32 }) => {
  const pixels = [
    [0,0,0,1,1,0,0,0],
    [0,0,0,1,1,0,0,0],
    [0,0,0,1,1,0,0,0],
    [0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,1,1,0,0,0],
    [0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0]
  ];

  return (
    <div className={`inline-block ${className}`}>
      {pixels.map((row, y) => (
        <div key={y} className="flex">
          {row.map((pixel, x) => (
            <div
              key={x}
              className={`w-1 h-1 ${pixel ? 'bg-red-400' : 'bg-transparent'}`}
              style={{ width: `${size/8}px`, height: `${size/8}px` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PixelExclaim;