const Logo = () => (
  <div className="flex max-w-full items-center overflow-hidden bg-gradient-to-br from-primary to-cyan-400 bg-clip-text font-mono text-xl font-bold italic text-transparent hover:from-sky-400 hover:to-cyan-300 sm:text-2xl">
    <span className="mr-1 shrink-0 text-accent sm:mr-2">{'${'}</span>
    <div className="animate-typing relative inline-block max-w-28 overflow-hidden whitespace-nowrap border-r-2 border-accent bg-gradient-to-br from-primary to-cyan-400 bg-clip-text font-mono text-lg font-bold italic text-transparent hover:from-sky-400 hover:to-cyan-300 sm:max-w-none sm:border-r-4 sm:text-2xl">
      Viraj Bahulkar
    </div>
    <span className="ml-1 shrink-0 text-accent sm:ml-2">{'}'}</span>
  </div>
);

export default Logo;
