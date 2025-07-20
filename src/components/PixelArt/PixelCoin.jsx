import React from 'react';

const PixelCoin = ({ className = "", size = 32 }) => {
  console.log('PixelCoin component loaded'); // Add this line
  
  const pixels = [
    [0,1,1,1,1,1,0],
    [1,1,0,1,0,1,1],
    [1,0,1,1,1,0,1],
    [1,1,1,1,1,1,1],
    [1,0,1,1,1,0,1],
    [1,1,0,1,0,1,1],
    [0,1,1,1,1,1,0]
  ];

  return (
    <div className={`inline-block ${className}`} style={{ width: `${size}px`, height: `${size}px` }}>
      {pixels.map((row, y) => (
        <div key={y} className="flex" style={{ height: `${size/7}px` }}>
          {row.map((pixel, x) => (
            <div
              key={x}
              className={`${pixel ? 'bg-yellow-400' : 'bg-transparent'}`}
              style={{ 
                width: `${size/7}px`, 
                height: `${size/7}px`,
                boxSizing: 'border-box'
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PixelCoin;