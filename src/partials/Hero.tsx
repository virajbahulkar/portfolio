import React, { useEffect, useState } from 'react';

interface Phrase {
  text: string;
  gradient: string;
}

interface Heading {
  text?: string;
  class?: string;
}

interface DescriptionItem {
  type?: string;
  text: string;
  class?: string;
}

interface HeroProps {
  phrases: Phrase[];
  intervaltime?: number;
  description: DescriptionItem[] | string;
  heading?: string | Heading;
  children: any;
}

const Hero: React.FC<HeroProps> = ({
  heading = '',
  phrases,
  description,
  intervaltime = 5000,
  children,
}) => {
  const safePhrases = phrases ?? [];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const title = typeof heading === 'string' ? heading : heading?.text ?? '';
  const headingClass =
    typeof heading === 'object' && heading?.class ? heading.class : 'text-3xl';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % safePhrases.length);
    }, intervaltime);

    return () => clearInterval(interval);
  }, [safePhrases, intervaltime]);

  return (
    <div className="h-full">
      <h1 className={`${headingClass} font-bold`}>
        {title}
        {title && Array.isArray(safePhrases) ? (
          <>
            {' '}
            <span
              className={`bg-gradient-to-r text-transparent ${safePhrases[currentPhrase]?.gradient} bg-clip-text`}
            >
              <span>{safePhrases[currentPhrase]?.text}</span>
            </span>
            {safePhrases[currentPhrase]?.text === 'Viraj Bahulkar' ? (
              <span className="wave">👋</span>
            ) : null}
          </>
        ) : null}
      </h1>
      <p className="mt-6 text-xl leading-9">
        {Array.isArray(description) ? (
          <ul className="list-inside list-disc space-y-2 leading-relaxed marker:text-blue-500">
            {description.map((desc, index) => {
              if (desc.type === 'quote') {
                return (
                  <li key={index} className="list-none">
                    <blockquote className={desc.class}>{desc.text}</blockquote>
                  </li>
                );
              }
              return (
                <li key={index} className={desc.class}>
                  {desc.text}
                </li>
              );
            })}
          </ul>
        ) : (
          description
        )}
      </p>
      {children}
    </div>
  );
};

export { Hero };
