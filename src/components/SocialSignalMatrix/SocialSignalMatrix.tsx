import React from 'react';

import styles from './SocialSignalMatrix.module.css';

interface SocialItem {
  title: string;
  url: string;
  icon: string;
  signal: string;
  order: number;
}

interface Props {
  socials: SocialItem[];
}

const SocialSignalMatrix: React.FC<Props> = ({ socials }) => {
  const sorted = socials.sort((a, b) => a.order - b.order);

  return (
    <section className={styles.socialSection}>
      <h2
        className={`${styles.glitchTitle} text-2xl font-bold `}
        data-text="🌐 Echoes on the Web"
      >
        🌐 Echoes on the Web
      </h2>

      <div className={styles.matrixGrid}>
        {sorted.map((item, i) => (
          <a
            key={i}
            href={item.url}
            className={styles.matrixIcon}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ['--pulse-color' as any]: item.signal }}
            aria-label={item.title}
          >
            <span dangerouslySetInnerHTML={{ __html: item.icon }} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialSignalMatrix;
