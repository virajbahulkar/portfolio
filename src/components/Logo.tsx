import React from 'react';

const Logo = () => (
  <div className="flex items-center bg-gradient-to-br from-primary to-cyan-400 bg-clip-text font-mono text-2xl font-bold italic text-transparent hover:from-sky-400 hover:to-cyan-300">
    <span className="mr-2 text-accent">{'${'}</span>
    <div className="relative animate-typing overflow-hidden whitespace-nowrap border-r-4 border-accent inline-block bg-gradient-to-br from-primary to-cyan-400 bg-clip-text font-mono text-2xl font-bold italic text-transparent hover:from-sky-400 hover:to-cyan-300">
      Viraj Bahulkar
    </div>
    <span className="ml-2 text-accent">{'}'}</span>
  </div>
);

export default Logo;
