interface SectionProps {
  title?: string;
  subtitle?: string;
  bgType?: 'light' | 'dark' | 'amber' | 'green';
  children: React.ReactNode;
}

export default function Section({
  title,
  subtitle,
  bgType = 'light',
  children
}: SectionProps) {
  const bgClass = {
    light: 'section-bg-light',
    dark: 'section-bg-dark',
    amber: 'section-bg-amber',
    green: 'section-bg-green'
  }[bgType];

  return (
    <section className={`section ${bgClass}`}>
      <div className="container">
        {title && <h2>{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
