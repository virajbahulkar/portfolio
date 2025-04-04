const SectionHeader = ({ title, highlightedText, link, linkText, extraClasses = "", size = "md:text-xl sm:text-lg" }) => (
  <div className={`flex items-center justify-between ${extraClasses} flex-wrap gap-4 w-full`}>
    {/* Title Section */}
    <div className="flex items-center gap-3 w-full lg:w-auto">
      <h2 className={`${size} font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 relative`}>
        {title}{' '}
        <span className="relative text-cyan-600 dark:text-cyan-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-600 dark:after:bg-cyan-400 after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100">
          {highlightedText}
        </span>
      </h2>
    </div>

    {/* Link Button */}
    {link && (
      <div className="w-full lg:w-auto">
        <a
          href={link}
          className="px-4 py-2 bg-cyan-600 text-white rounded-full shadow-lg transition-transform duration-300 hover:bg-cyan-700 block text-center break-words max-w-xs lg:max-w-none"
        >
          {linkText} →
        </a>
      </div>
    )}
  </div>
);

export { SectionHeader };
