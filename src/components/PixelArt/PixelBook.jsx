import React from "react";

const PixelBook = ({ className = "", size = 32 }) => {
  const pixels = [
    [0,1,1,1,1,1,0],
    [1,0,0,0,0,0,1],
    [1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1],
    [1,0,1,0,1,0,1],
    [0,1,1,1,1,1,0]
  ];

  return (
    <div className={`inline-block ${className}`}>
      {pixels.map((row, y) => (
        <div key={y} className="flex">
          {row.map((pixel, x) => (
            <div
              key={x}
              className={`${pixel ? 'bg-purple-400' : 'bg-transparent'}`}
              style={{ width: `${size/7}px`, height: `${size/7}px` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PixelBook;