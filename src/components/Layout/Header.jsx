import React from 'react';
import PixelArt from '../PixelArt/PixelArt';
import GlitchText from '../Animations/GlitchText';
import BlinkingText from '../Animations/BlinkingText';

const Header = () => {
  return (
    <div className="bg-black/95 border-b-2 border-gray-600 p-4 backdrop-blur-md relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-100 mb-2 flex items-center justify-center gap-2" style={{ userSelect: 'none' }}>
            
            <GlitchText className="text-xl md:text-2xl">.:::AZERBAIJAN COLLEGE ROBILOGICAL EVOLUTIONARY SYSTEM:::.</GlitchText>
            
          </h1>
          <div className="text-gray-400 text-sm" style={{ userSelect: 'none' }}>
            <BlinkingText>*** OFFICIAL CRYPTO DONATION PORTAL ***</BlinkingText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;