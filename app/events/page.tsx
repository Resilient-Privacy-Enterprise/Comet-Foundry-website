import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import EventsCalendar from '@/components/EventsCalendar';

export const metadata: Metadata = pageMetadata({
  path: '/events',
  ogTitle: 'Events — Comet Foundry',
  description: "Build sprints, critique nights, demo nights, and Foundry Kickoff Night — see what's happening at Comet Foundry, UT Dallas.",
});

export default function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Chronicle / Events</div>
          <span className="mono" style={{ display: 'block', fontSize: '10px', letterSpacing: '.14em', color: 'var(--flask)', marginBottom: '12px' }}>CHRONICLE / EVENTS</span>
          <h1>What&apos;s Happening</h1>
          <span className="hero-note hand">you should probably come to this</span>
          <p className="lede">Build sprints, critique nights, demo nights, and the occasional excuse to touch grass.</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <EventsCalendar />
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="event-card">
            <span className="event-annot hand">next up</span>
            <div className="event-left">
              <div className="event-date">SEP 01 / 7:00 PM</div>
              <h3>Foundry Kickoff Night</h3>
              <p>First open house of the semester. Tour the space, pitch a half-formed idea, find someone to build it with.</p>
            </div>
            <div className="event-right">
              <div className="row"><span>STATUS</span><b>EXPERIMENT IN PROGRESS</b></div>
              <div className="row"><span>LOCATION</span><b>UT Dallas — Lab 01</b></div>
              <Link className="rsvp-btn" href="/events/kickoff-night">RSVP →</Link>
            </div>
          </div>

          <div className="sec-head" style={{ marginTop: 60, marginBottom: 0 }}>
            <span className="num">UPCOMING</span>
            <h2 style={{ fontSize: 'clamp(24px,4vw,32px)' }}>More On The Calendar</h2>
          </div>
          <div className="coming-soon-card" style={{ marginTop: 24 }}>
            <span className="tag mono">COMING SOON</span>
            <h3>Event</h3>
            <p>Nothing else on the calendar yet — check back as the semester fills in.</p>
          </div>
        </div>
      </section>
    </>
  );
}
