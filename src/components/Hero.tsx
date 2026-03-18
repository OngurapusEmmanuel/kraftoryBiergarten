import { useState, useRef, useEffect } from 'react';
import ExternalLink from './ExternalLink';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle: string;
  buttons?: Array<{ label: string; url: string; primary?: boolean }>;
}

export default function Hero({ title, subtitle, buttons }: HeroProps) {
  const [floating, setFloating] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      // as soon as the user scrolls down even a little bit, keep
      // the two buttons fixed below the sticky header so they remain
      // visible along with the nav bar.
      setFloating(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={heroRef} className="hero hero-bg-gradient">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttons && buttons.length > 0 && (
          <div className={"hero-buttons" + (floating ? " floating" : "")}>
            {buttons.map((btn, idx) => (
              <ExternalLink
                key={idx}
                href={btn.url}
                className={btn.primary ? 'btn btn-primary' : 'btn btn-outline'}
              >
                {btn.label}
              </ExternalLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
