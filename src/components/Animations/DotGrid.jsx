import React from 'react';

const DotGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgb(75 85 99) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0'
        }}
      />
    </div>
  );
};

export default DotGrid;