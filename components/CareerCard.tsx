import type { Listing } from '@/lib/careers';

export default function CareerCard({ listing }: { listing: Listing }) {
  return (
    <div style={{ padding: '28px 0', borderBottom: '1px solid var(--line)' }}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
        <span className="mono" style={{ fontSize: '9px', letterSpacing: '.14em', color: 'var(--flask)', padding: '3px 8px', border: '1px solid var(--flask)' }}>{listing.backer}</span>
        <span className="mono" style={{ fontSize: '9px', letterSpacing: '.14em', color: 'var(--ink-soft)', padding: '3px 8px', border: '1px solid var(--line)' }}>{listing.roleType}</span>
      </div>
      <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', margin: '0 0 6px', letterSpacing: '-.01em', textTransform: 'uppercase' }}>{listing.company}</h3>
      <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', margin: '0 0 12px' }}>{listing.role}</p>
      <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 0 16px', maxWidth: '720px' }}>{listing.description}</p>
      <div className="mono" style={{ display: 'flex', gap: '20px', fontSize: '11px', color: 'var(--ink-soft)', letterSpacing: '.06em', marginBottom: '16px', flexWrap: 'wrap' }}>
        <span>📍 {listing.location}</span>
        <span>🕐 {listing.type}</span>
      </div>
      <a href={listing.apply} target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '12px', color: 'var(--flask)', textDecoration: 'none', letterSpacing: '.08em', fontWeight: 700 }}>APPLY →</a>
    </div>
  );
}
