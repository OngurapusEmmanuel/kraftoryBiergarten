interface HeroProps {
  title: string;
  subtitle: string;
  buttons?: Array<{ label: string; url: string; primary?: boolean }>;
}

export default function Hero({ title, subtitle, buttons }: HeroProps) {
  return (
    <section className="hero hero-bg-gradient">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttons && buttons.length > 0 && (
          <div className="hero-buttons">
            {buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.url}
                className={btn.primary ? 'btn btn-primary' : 'btn btn-outline'}
              >
                {btn.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
