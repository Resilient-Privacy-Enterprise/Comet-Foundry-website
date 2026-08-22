import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/events/kickoff-night',
  ogTitle: 'Kickoff Night — Comet Foundry',
  description: 'Foundry Kickoff Night — the first open house of the semester at Comet Foundry, UT Dallas. Tour the space, pitch an idea, find a team.',
});

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Foundry Kickoff Night',
  description: 'First open house of the semester. Tour the space, pitch a half-formed idea out loud, and find someone to build it with.',
  startDate: '2026-09-01T19:00:00-05:00',
  endDate: '2026-09-01T21:00:00-05:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'UT Dallas — Lab 01',
    address: { '@type': 'PostalAddress', addressLocality: 'Richardson', addressRegion: 'TX', addressCountry: 'US' },
  },
  organizer: { '@type': 'Organization', name: 'Comet Foundry', url: 'https://www.cometfoundry.com/' },
};

export default function KickoffNightPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/events">Events</Link> / Kickoff Night</div>
          <h1>Foundry Kickoff Night</h1>
          <span className="hero-note hand">you should probably come to this</span>
        </div>
      </section>

      <section className="tight">
        <div className="wrap about-grid">
          <div className="about-text">
            <p>First open house of the semester. Tour the space, pitch a half-formed idea out loud, and find someone to build it with. No pitch deck required — a napkin sketch is plenty.</p>
            <p>Expect a short intro to the four labs, free food, and enough people in the room that you&apos;ll leave with at least one new collaborator.</p>
          </div>
          <div className="doc-card">
            <span className="hand">the details</span>
            <h3>Event Info</h3>
            <ul className="mono">
              <li><span>Date</span><span className="v">SEP 01, 2026</span></li>
              <li><span>Time</span><span className="v">7:00 PM</span></li>
              <li><span>Location</span><span className="v">UT Dallas — Lab 01</span></li>
              <li><span>Status</span><span className="v">EXPERIMENT IN PROGRESS</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="join">
        <div className="wrap">
          <div className="sec-head center">
            <span className="num mono">SAVE YOUR SPOT</span>
            <h2>RSVP</h2>
          </div>
          <a
            className="rsvp-btn"
            href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUOVlFMEpKR0dYMDhLUzAyMjQ2QklROFVaVC4u&route=shorturl"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'var(--ink)', color: 'var(--paper)' }}
          >
            RSVP →
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
    </>
  );
}
