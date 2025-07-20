import React from 'react';
import { ExternalLink } from 'lucide-react';
import PixelComputer from '../PixelArt/PixelComputer';

const Navigation = () => {
  return (
    <div className="bg-gray-800/95 border-b border-gray-600 p-2 backdrop-blur-md relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center gap-4 text-sm">
          {/* Left decorative pixel art */}
          <PixelComputer size={20} className="hidden sm:block" />
          
          {/* Navigation items */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400">[</span>
            
            <NavLink href="#donations">
              DONATE
            </NavLink>
            
            <span className="text-gray-400">|</span>
            
            <NavLink 
              href="https://discord.gg/FTxGY6Vu" 
              external
              className="flex items-center gap-1"
            >
              CONTACT
              <ExternalLink size={14} className="inline" />
            </NavLink>
            
           
          
            
            <span className="text-gray-400">]</span>
          </div>
          
          {/* Right decorative pixel art */}
          <PixelComputer size={20} className="hidden sm:block" />
        </div>
      </div>
    </div>
  );
};

// Reusable NavLink component
const NavLink = ({ href, children, external = false, className = "" }) => {
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-300 hover:text-green-400 underline transition-colors duration-200 ${className}`}
    >
      {children}
    </a>
  ) : (
    <a
      href={href}
      className={`text-gray-300 hover:text-green-400 underline transition-colors duration-200 ${className}`}
    >
      {children}
    </a>
  );
};

export default Navigation;