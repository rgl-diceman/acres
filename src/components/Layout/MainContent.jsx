import React from 'react';
import CryptoAddress from '../CryptoAddress';
import CounterDisplay from '../CounterDisplay';
import PixelRocket from '../PixelArt/PixelRocket';
import RotatingCube from '../Animations/RotatingCube';
import PixelDiamond from '../PixelArt/PixelDiamond';
import PixelCoin from '../PixelArt/PixelCoin';
import BlinkingText from '../Animations/BlinkingText';
import PixelBook from '../PixelArt/PixelBook';
import PixelArt from '../PixelArt/PixelArt';
import { BookOpen, Users, Award, Globe } from 'lucide-react';
const MainContent = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2">


          <div className="bg-gray-800/95 border-2 border-gray-600 p-6 mb-6 backdrop-blur-md shadow-2xl">
            <h2 className="text-xl font-bold text-gray-100 mb-4 text-center flex items-center justify-center gap-2" style={{ userSelect: 'none' }}>

              -= WELCOME TO THE FUTURE OF MANKIND =-

            </h2>

            <div className="space-y-4 text-sm">
              <p className="text-gray-300 leading-relaxed">
                The Azerbaijan College Robilogical Evolutionary System (ACRES) is revolutionizing 
                transpositional neural networks. Our mission
                is to provide high-quality physical, spiritual, and neurological augmentations to citizens across Azerbaijan
                and beyond. We need your support now more than ever as we are being harrased by the Azerbaijani government for our research.
              </p>

              <div className="bg-black/90 border border-gray-500 p-3 backdrop-blur-sm shadow-inner">
                <div className="text-green-400 text-center font-bold flex items-center justify-center gap-2" style={{ userSelect: 'none' }}>
                  <PixelArt size={20} />
                  <BlinkingText>❒❒ QUOTE OF THE DAY ❒❒</BlinkingText>
                  <PixelArt size={20} />
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                In 1884, meridian time personnel met in Washington to change Earth time.
                First words said was that only 1 day could be used on Earth to not change the 1 day bible.
                So they applied the 1 day and ignored the other 3 days.
                The bible time was wrong then and it proved wrong today.
                This a major lie has so much evil feed from it's wrong.
              </p>

            </div>
          </div>

          <div className="flex justify-center items-center h-32 mb-8">
            <RotatingCube />
            <p>☲☰☶☴</p>
            <RotatingCube />
            <p>☲☰☶☴</p>
            <RotatingCube />
          </div>

          <div id="donations" className="bg-gray-800/95 border-2 border-gray-600 p-6 mb-6 backdrop-blur-md shadow-2xl">
            <h3 className="text-lg font-bold text-gray-100 mb-4 text-center flex items-center justify-center gap-2" style={{ userSelect: 'none' }}>
              <PixelDiamond size={24} />
              DONATION ADDRESSES
              <PixelDiamond size={24} />
            </h3>

            <CryptoAddress
              label="Bitcoin"
              address="bc1qr6a64age3888egh2qkv85vmm761665v66gwe1g"
              currency="BTC"
            />

            <CryptoAddress
              label="Solana"
              address="4hPo8jyjSGLXJYJgkjHQUypdcP6MJniQqYnnb2UQZPuJ"
              currency="SOL"
            />

            <div className="text-center mt-4">
              <BlinkingText className="text-yellow-400 font-bold flex items-center justify-center gap-2">
                <PixelCoin size={20} />
                !!! WE NEED YOUR FUNDING !!!
                <PixelCoin size={20} />
              </BlinkingText>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 mt-40">
          <CounterDisplay />

          <div className="bg-gray-800/95 border-2 border-gray-600 p-4 backdrop-blur-md shadow-2xl">
            <h3 className="text-lg font-bold text-gray-100 mb-3 text-center flex items-center justify-center gap-2">
              
              STATISTICS
              
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">People Helped:</span>
                <span className="text-green-400 font-bold">2,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Implants Available:</span>
                <span className="text-green-400 font-bold">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Success Rate:</span>
                <span className="text-green-400 font-bold">94.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Crypto Raised:</span>
                <span className="text-green-400 font-bold">$12.45</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/95 border-2 border-gray-600 p-4 bacdrop-blur-md shadow-2xl">
            <h3 className="text-lg font-bold text-gray-100 mb-3 text-center flex items-center justify-center gap-2">
              <PixelBook size={20} />
              QUICK LINKS
              <PixelBook size={20} />
            </h3>
            <div className="space-y-2 text-sm">
              <QuickLink icon={<BookOpen size={16} />} text="Augmentation Catalog" />
              <QuickLink icon={<Users size={16} />} text="Patient Portal" />
              <QuickLink icon={<Award size={16} />} text="Research" />
              <QuickLink icon={<Globe size={16} />} text="Alumni Network" />
            </div>
          </div>

          <div className="bg-black/90 border-2 border-gray-500 p-4 text-center backdrop-blur-md shadow-2xl">
            <div className="text-gray-400 text-xs mb-2">POWERED BY:</div>
            <div className="text-green-400 font-bold flex items-center justify-center gap-2">
              <PixelRocket size={20} />
              BLOCKCHAIN  TECHNOLOGY <PixelRocket size={20} />
            </div>
            <div className="text-green-400 font-bold">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickLink = ({ icon, text }) => (
  <div className="flex items-center gap-2 group">
    <span className="text-gray-400 group-hover:text-green-400 transition-colors duration-200">
      {icon}
    </span>
    <a href="#" className="text-gray-300 hover:text-green-400 underline transition-colors duration-200">
      {text}
    </a>
  </div>
);

export default MainContent;