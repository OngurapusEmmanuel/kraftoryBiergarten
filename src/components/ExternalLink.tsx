import { useEffect, useRef, useState } from 'react';

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  /**
   * Opt out of the modal if you want the link to behave like a normal anchor.
   */
  suppressModal?: boolean;
}

const isExternalUrl = (href: string) => /^https?:\/\//i.test(href);

export default function ExternalLink({
  href,
  children,
  className,
  suppressModal,
  ...rest
}: ExternalLinkProps) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const external = isExternalUrl(href);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!external || suppressModal) return;
    e.preventDefault();
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const getHost = () => {
    try {
      return new URL(href).hostname;
    } catch {
      return href;
    }
  };

  const handleContinue = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  return (
    <>
      <a
        href={href}
        className={className}
        onClick={handleClick}
        {...(external ? { role: 'button' } : {})}
        {...rest}
      >
        {children}
      </a>

      {open && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label="External link confirmation"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            zIndex: 9999,
          }}
          onClick={() => setOpen(false)}
        >
          <div
            role="document"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(520px, 100%)',
              background: 'var(--bg)',
              borderRadius: '0.75rem',
              padding: '1.75rem',
              boxShadow: '0 14px 40px rgba(0,0,0,0.45)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'var(--text)',
            }}
          >
            <p style={{ margin: 0, fontWeight: 700, fontSize: '1.15rem' }}>
              You are leaving Kraftory Biergarten
            </p>
            <p style={{ margin: '0.75rem 0 1.25rem', color: 'var(--muted)', lineHeight: 1.5 }}>
              This link will take you to <strong>{getHost()}</strong>. We recommend reviewing the destination's privacy
              policy and terms of service.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleContinue}
              >
                Continue to {getHost()}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
