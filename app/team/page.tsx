import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/team',
  ogTitle: 'Team — Comet Foundry',
  description: 'Meet the Comet Foundry team — Executive Board and Officer seats, most still open. Apply if one fits you.',
});

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUQVE2MU1DUE80TkpGTEpURDhUUFBXQUo0MS4u&route=shorturl';

type FilledPerson = { name: string; photo?: string; email: string; linkedin?: string; designation?: string };
type Seat = { role: string; slug: string; seats: number; filled?: Record<number, FilledPerson> };

const EXEC_BOARD: Seat[] = [
  {
    role: 'President',
    slug: 'president',
    seats: 1,
    filled: {
      1: {
        name: 'Madhuvanthi Magge',
        photo: '/assets/team/madhuvanthi-magge.png',
        email: 'Madhuvanthi.Magge@utdallas.edu',
        linkedin: 'https://www.linkedin.com/in/madhuvanthimagge/',
      },
    },
  },
  { role: 'Vice President', slug: 'vp', seats: 1 },
  { role: 'Secretary', slug: 'secretary', seats: 1 },
  {
    role: 'Treasurer',
    slug: 'treasurer',
    seats: 1,
    filled: {
      1: {
        name: 'Vishwaa Shah',
        photo: '/assets/team/vishwaa-shah.png',
        email: 'vishwaa@utdallas.edu',
        linkedin: 'https://www.linkedin.com/in/vishwaa-shah/',
      },
    },
  },
  {
    role: 'Marketing Strategist',
    slug: 'marketing',
    seats: 1,
    filled: {
      1: {
        name: 'Vishwa Thummar',
        photo: '/assets/team/vishwa-thummar.jpg',
        email: 'VishwaJaysukhbhai.Thummar@utdallas.edu',
        linkedin: 'https://www.linkedin.com/in/vishwa-thummar/',
      },
    },
  },
];

const OFFICERS: Seat[] = [
  { role: 'Innovation Officer', slug: 'innovation', seats: 1 },
  {
    role: 'Technology Officer',
    slug: 'tech',
    seats: 1,
    filled: {
      1: {
        name: 'Vladislav Kondratyev',
        photo: '/assets/team/vladislav-kondratyev.jpg',
        email: 'Vladislav.Kondratyev@utdallas.edu',
        linkedin: 'https://www.linkedin.com/in/vladislav-kondratyev/',
      },
    },
  },
  {
    role: 'Events Officer',
    slug: 'events',
    seats: 3,
    filled: {
      1: {
        name: 'Sangajan Maheswararaj',
        photo: '/assets/team/sangajan-maheswararaj.png',
        email: 'Sangajan.Maheswararaj@utdallas.edu',
        linkedin: 'https://www.linkedin.com/in/sangajan-m-13239a323/',
      },
      2: {
        name: 'Naavya Vig',
        photo: '/assets/team/naavya-vig.png',
        email: 'Naavya.Vig@utdallas.edu',
        linkedin: 'https://www.linkedin.com/in/naavya-vig/',
      },
    },
  },
  { role: 'Public Relations Officer', slug: 'pr', seats: 1 },
  {
    role: 'Partnerships Officer',
    slug: 'partnerships',
    seats: 2,
    filled: {
      1: {
        name: 'Aarav Kumar',
        photo: '/assets/team/aarav-kumar.png',
        email: 'Aarav.Kumar@utdallas.edu',
        linkedin: 'https://www.linkedin.com/in/aarav-kumar-034594344/',
      },
    },
  },
  {
    role: 'Community Engagement Officer',
    slug: 'community',
    seats: 1,
    filled: {
      1: {
        name: 'Elizabeth Clawson',
        photo: '/assets/team/Elizabeth-Clawson.png',
        email: 'Elizabeth.Clawson@utdallas.edu',
      },
    },
  },
  { role: 'Social Media Officer', slug: 'social', seats: 2 },
  { role: 'Design Officer', slug: 'design', seats: 1 },
  {
    role: 'Outreach Officer',
    slug: 'outreach',
    seats: 1,
    filled: {
      1: {
        name: 'Thejas Pratheep',
        photo: '/assets/team/Thejas Pratheep.png',
        email: 'Thejas.Pratheep@utdallas.edu',
        linkedin: 'https://www.linkedin.com/in/thejas-pratheep/',
      },
    },
  },
];

const ADVISORS: Seat[] = [
  {
    role: 'Advisor',
    slug: 'advisor1',
    seats: 1,
    filled: {
      1: {
        name: 'Genevieve Fernandes',
        photo: '/assets/team/genevieve-fernandes.png',
        email: 'Genevieve.Fernandes@utdallas.edu',
        linkedin: 'https://www.linkedin.com/in/genfernandes/',
        designation: 'Advisor Comet Foundry & Program Manager JSOM UTD',
      },
    },
  },
  {
    role: 'Advisor',
    slug: 'advisor2',
    seats: 1,
    filled: {
      1: {
        name: 'Tejas Shroff',
        photo: '/assets/team/tejas-shroff.png',
        email: 'Tejas.Shroff@utdallas.edu',
        linkedin: 'https://www.linkedin.com/in/tejasshroff/',
        designation: 'Advisor & Adjunct Faculty JSOM, UTD',
      },
    },
  },
  { role: 'Advisor', slug: 'advisor3', seats: 1 },
  { role: 'Advisor', slug: 'advisor4', seats: 1 },
];

function OpenSeatCard({ lead, role, emailSlug }: { lead: boolean; role: string; emailSlug: string }) {
  const abbr = role.split(' ').map((w) => w[0]).join('').toUpperCase();
  return (
    <div className="profile-card">
      <div className={`profile-photo open${lead ? ' lead' : ''}`}>
        <span className="profile-tag">OPEN POSITION</span>
        <span className="abbr">{abbr}</span>
      </div>
      <div className="profile-body">
        <h3>{role}</h3>
        <p className="profile-invite">This seat is open — apply and make it yours.</p>
        <div className="profile-links">
          <a href={APPLY_URL} target="_blank" rel="noopener" className="profile-apply">Apply for this seat →</a>
          <a href={`mailto:${emailSlug}@cometfoundry.com`} className="profile-email">{emailSlug}@cometfoundry.com</a>
        </div>
      </div>
    </div>
  );
}

function FilledSeatCard({ lead, role, person }: { lead: boolean; role: string; person: FilledPerson }) {
  return (
    <div className="profile-card">
      <div className={`profile-photo${lead ? ' lead' : ''}`}>
        {person.photo ? (
          <Image src={person.photo} alt={person.name} width={400} height={533} />
        ) : (
          <span className="profile-placeholder">{person.name.split(' ').map(n => n[0]).join('')}</span>
        )}
      </div>
      <div className="profile-body">
        <h3>{person.name}</h3>
        <div className="profile-role large">{person.designation || role}</div>
        <div className="profile-links">
          <a href={`mailto:${person.email}`}>{person.email}</a>
          {person.linkedin ? (
            <a href={person.linkedin} target="_blank" rel="noopener">LinkedIn →</a>
          ) : (
            <a href="javascript:void(0)" className="linkedin-placeholder">Add LinkedIn →</a>
          )}
        </div>
      </div>
    </div>
  );
}

function renderSeats(seat: Seat, lead: boolean) {
  if (seat.seats === 1) {
    const person = seat.filled?.[1];
    return person ? (
      <FilledSeatCard key={seat.slug} lead={lead} role={seat.role} person={person} />
    ) : (
      <OpenSeatCard key={seat.slug} lead={lead} role={seat.role} emailSlug={seat.slug} />
    );
  }
  return Array.from({ length: seat.seats }, (_, i) => {
    const seatNum = i + 1;
    const person = seat.filled?.[seatNum];
    return person ? (
      <FilledSeatCard key={`${seat.slug}${seatNum}`} lead={lead} role={seat.role} person={person} />
    ) : (
      <OpenSeatCard key={`${seat.slug}${seatNum}`} lead={lead} role={seat.role} emailSlug={`${seat.slug}${seatNum}`} />
    );
  });
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
          <p className="section-intro">The five seats that set direction for the house — strategy, structure, and who we bring in next. All five are open.</p>
          <div className="profile-grid exec">
            {EXEC_BOARD.map((seat) => renderSeats(seat, true))}
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <span className="section-label">OFFICERS</span>
          <p className="section-intro">The people who actually run the day-to-day — events, design, partnerships, and everything in between. Most seats are still open.</p>
          <div className="profile-grid">
            {OFFICERS.flatMap((seat) => renderSeats(seat, false))}
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <span className="section-label">ADVISORS</span>
          <p className="section-intro">Experienced mentors who guide our direction and help us build better.</p>
          <div className="profile-grid">
            {ADVISORS.flatMap((seat) => renderSeats(seat, false))}
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <a href="https://utdallas.box.com/v/constitutionandByLaws" target="_blank" rel="noopener">
            <button className="back-btn">View Constitution and By Laws →</button>
          </a>
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
