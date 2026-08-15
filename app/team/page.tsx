import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/team',
  ogTitle: 'Team — Comet Foundry',
  description: 'Meet the Comet Foundry team — Executive Board and Officer seats, most still open. Apply if one fits you.',
});

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUQVE2MU1DUE80TkpGTEpURDhUUFBXQUo0MS4u&route=shorturl';

const EXEC_BOARD: [string, string][] = [
  ['President', 'president'],
  ['Vice President', 'vp'],
  ['Secretary', 'secretary'],
  ['Treasurer', 'treasurer'],
  ['Marketing Strategist', 'marketing'],
];

const OFFICERS: [string, string, number][] = [
  ['Innovation Officer', 'innovation', 1],
  ['Technology Officer', 'tech', 1],
  ['Events Officer', 'events', 3],
  ['Public Relations Officer', 'pr', 1],
  ['Partnerships Officer', 'partnerships', 2],
  ['Community Engagement Officer', 'community', 1],
  ['Social Media Officer', 'social', 2],
  ['Design Officer', 'design', 1],
  ['Outreach Officer', 'outreach', 1],
];

function PersonCard({ lead, role, emailSlug, seatLabel }: { lead: boolean; role: string; emailSlug: string; seatLabel?: string }) {
  const subtitle = seatLabel ? `${role} — ${seatLabel}` : role;
  const abbr = role.split(' ').map((w) => w[0]).join('').toUpperCase();
  return (
    <div className="profile-card">
      <div className={lead ? 'profile-photo lead' : 'profile-photo'}>
        <span className="profile-tag">OPEN POSITION</span>
        <span className="abbr">{abbr}</span>
      </div>
      <div className="profile-body">
        <h3>Name TBD</h3>
        <div className="profile-role">{subtitle}</div>
        <div className="profile-links">
          <a href={`mailto:${emailSlug}@cometfoundry.com`}>{emailSlug}@cometfoundry.com</a>
          <a href="javascript:void(0)" className="linkedin-placeholder">Add LinkedIn →</a>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Team</div>
          <h1>Who Runs This</h1>
          <span className="hero-note hand">mostly figuring it out live</span>
          <p className="lede">Our org chart — Executive Board and Officer seats. Most are still open. If one fits you, apply below.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <span className="section-label">EXECUTIVE BOARD</span>
          <div className="profile-grid">
            {EXEC_BOARD.map(([role, slug]) => (
              <PersonCard key={slug} lead role={role} emailSlug={slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <span className="section-label">OFFICERS</span>
          <div className="profile-grid">
            {OFFICERS.flatMap(([role, slug, seats]) =>
              seats === 1
                ? [<PersonCard key={slug} lead={false} role={role} emailSlug={slug} />]
                : Array.from({ length: seats }, (_, i) => (
                    <PersonCard key={`${slug}${i + 1}`} lead={false} role={role} emailSlug={`${slug}${i + 1}`} seatLabel={`Seat ${i + 1} of ${seats}`} />
                  ))
            )}
          </div>
        </div>
      </section>

      <section className="join">
        <div className="wrap">
          <div className="sec-head center">
            <span className="num mono">JOIN THEM</span>
            <h2>Be On This Page Next</h2>
          </div>
          <a className="rsvp-btn" href={APPLY_URL} target="_blank" rel="noopener" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>APPLY →</a>
        </div>
      </section>
    </>
  );
}
