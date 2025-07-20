import React from 'react';

const PixelComputer = ({ className = "", size = 32 }) => {
  const pixels = [
    [0,0,1,1,1,1,0,0],
    [0,1,0,0,0,0,1,0],
    [1,0,1,0,0,1,0,1],
    [1,0,0,1,1,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,0],
    [0,0,1,0,0,1,0,0]
  ];

  return (
    <div className={`inline-block ${className}`} style={{ width: `${size}px`, height: `${size}px` }}>
      {pixels.map((row, y) => (
        <div key={y} className="flex" style={{ height: `${size/8}px` }}>
          {row.map((pixel, x) => (
            <div
              key={x}
              className={`${pixel ? 'bg-blue-400' : 'bg-transparent'}`}
              style={{ 
                width: `${size/8}px`, 
                height: `${size/8}px`,
                boxSizing: 'border-box'
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PixelComputer;