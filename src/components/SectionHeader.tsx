const SectionHeader = ({
  title = '',
  highlightedText = '',
  link = '',
  linkText = '',
  extraClasses = '',
  size = 'md:text-xl sm:text-lg',
}) => (
  <div
    className={`flex items-center justify-between ${extraClasses} w-full flex-wrap gap-4`}
  >
    {/* Title Section */}
    <div className="flex items-center gap-3 lg:w-auto">
      <h2
        className={`${size} dark: relative flex items-center gap-2 font-bold`}
      >
        {title}{' '}
        <span className="relative text-cyan-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-cyan-600 after:transition-transform after:duration-300 hover:after:scale-x-100 dark:text-cyan-400 dark:after:bg-cyan-400">
          {highlightedText}
        </span>
      </h2>
    </div>

    {/* Link Button */}
    {link && (
      <div className="lg:w-auto">
        <a
          href={link}
          className="block max-w-xs break-words rounded-full bg-cyan-600 px-4 py-2 text-center text-sm text-white shadow-lg transition-transform duration-300 hover:bg-cyan-700 lg:max-w-none"
        >
          {linkText} →
        </a>
      </div>
    )}
  </div>
);

export { SectionHeader };
