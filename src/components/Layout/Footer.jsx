import BlinkingText from '../Animations/BlinkingText'; 



const Footer = () => {
  return (
    <div className="bg-black/95 border-t-2 border-gray-600 p-4 mt-8 backdrop-blur-md relative z-10">
      <div className="max-w-4xl mx-auto text-center text-sm text-gray-400">
        <div className="mb-2">
          © {new Date().getFullYear()} Azerbaijan College Robilogical Evolutionary System| Est. 2001
        </div>
        <div className="flex justify-center items-center gap-2">
          <BlinkingText>***</BlinkingText>
          <span>CRYPTO DONATIONS WELCOME</span>
          <BlinkingText>***</BlinkingText>
        </div>
        <div className="mt-2 text-xs flex items-center justify-center gap-2">
          "Educating Azerbaijan, One Block at a Time"
        </div>
      
          
          {/* Crypto acceptance badges */}
          <div className="flex justify-center gap-3 mt-3">
            <span className="text-[8px] bg-gray-800 px-2 py-1 rounded text-green-400 border border-gray-600">
              BTC ACCEPTED
            </span>
            <span className="text-[8px] bg-gray-800 px-2 py-1 rounded text-blue-400 border border-gray-600">
              SOL ACCEPTED
            </span>
          </div>
        
      </div>
    </div>
  );
};

export default Footer;