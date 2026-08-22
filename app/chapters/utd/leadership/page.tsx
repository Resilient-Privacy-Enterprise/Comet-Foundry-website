import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/metadata';

const OFFICER_APP_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUQVE2MU1DUE80TkpGTEpURDhUUFBXQUo0MS4u&route=shorturl';

export const metadata: Metadata = pageMetadata({
  path: '/chapters/utd/leadership',
  ogTitle: 'UTD Chapter Leadership — Comet Foundry',
  description: 'The Executive Board, Officers, and Advisors behind Chapter 01 at UT Dallas.',
  keywords: ['utd leadership', 'chapter 01', 'team', 'comet foundry', 'officers'],
});

type FilledMember = { filled: true; name: string; role: string; email: string; linkedin: string; photo: string };
type OpenSeat = { filled: false; role: string; abbr: string };
type Member = FilledMember | OpenSeat;

const execBoard: Member[] = [
  { filled: true, name: 'Madhuvanthi Magge', role: 'President', email: 'Madhuvanthi.Magge@utdallas.edu', linkedin: 'https://www.linkedin.com/in/madhuvanthimagge/', photo: '/assets/team/madhuvanthi-magge.png' },
  { filled: true, name: 'Avni Rajpal', role: 'Vice President', email: 'Avni.Rajpal@utdallas.edu', linkedin: 'https://www.linkedin.com/in/avni-rajpal-51b404421/', photo: '/assets/team/avni-rajpal.png' },
  { filled: false, role: 'Secretary', abbr: 'S' },
  { filled: true, name: 'Vishwaa Shah', role: 'Treasurer', email: 'vishwaa@utdallas.edu', linkedin: 'https://www.linkedin.com/in/vishwaa-shah/', photo: '/assets/team/vishwaa-shah.png' },
  { filled: true, name: 'Vishwa Thummar', role: 'Marketing Strategist', email: 'VishwaJaysukhbhai.Thummar@utdallas.edu', linkedin: 'https://www.linkedin.com/in/vishwa-thummar/', photo: '/assets/team/vishwa-thummar.jpg' },
];

const officers: Member[] = [
  { filled: true, name: 'Manish Chemata', role: 'Innovation Officer', email: 'JaishankazManish.ChemataVenkata@utdallas.edu', linkedin: 'https://www.linkedin.com/in/manish-chemata-5b31b4277/', photo: '/assets/team/Manish-Chemata.png' },
  { filled: true, name: 'Vladislav Kondratyev', role: 'Technology Officer', email: 'Vladislav.Kondratyev@utdallas.edu', linkedin: 'https://www.linkedin.com/in/vladislav-kondratyev/', photo: '/assets/team/vladislav-kondratyev.jpg' },
  { filled: true, name: 'Sangajan Maheswararaj', role: 'Events Officer', email: 'Sangajan.Maheswararaj@utdallas.edu', linkedin: 'https://www.linkedin.com/in/sangajan-m-13239a323/', photo: '/assets/team/sangajan-maheswararaj.png' },
  { filled: true, name: 'Naavya Vig', role: 'Events Officer', email: 'Naavya.Vig@utdallas.edu', linkedin: 'https://www.linkedin.com/in/naavya-vig/', photo: '/assets/team/naavya-vig.png' },
  { filled: false, role: 'Events Officer', abbr: 'EO' },
  { filled: false, role: 'Public Relations Officer', abbr: 'PRO' },
  { filled: true, name: 'Aarav Kumar', role: 'Partnerships Officer', email: 'Aarav.Kumar@utdallas.edu', linkedin: 'https://www.linkedin.com/in/aarav-kumar-034594344/', photo: '/assets/team/aarav-kumar.png' },
  { filled: true, name: 'Shrey Joshi', role: 'Growth & Venture Officer', email: 'Shrey.Joshi@utdallas.edu', linkedin: 'https://www.linkedin.com/in/shreyjoshi2004/', photo: '/assets/team/shrey-joshi.png' },
  { filled: true, name: 'Elizabeth Clawson', role: 'Community Engagement Officer', email: 'Elizabeth.Clawson@utdallas.edu', linkedin: 'https://www.linkedin.com/in/ellie-clawson-a548b8429', photo: '/assets/team/Elizabeth-Clawson.png' },
  { filled: false, role: 'Social Media Officer', abbr: 'SMO' },
  { filled: false, role: 'Social Media Officer', abbr: 'SMO' },
  { filled: false, role: 'Design Officer', abbr: 'DO' },
  { filled: true, name: 'Thejas Pratheep', role: 'Outreach Officer', email: 'Thejas.Pratheep@utdallas.edu', linkedin: 'https://www.linkedin.com/in/thejas-pratheep/', photo: '/assets/team/Thejas Pratheep.png' },
];

const advisors: Member[] = [
  { filled: true, name: 'Genevieve Fernandes', role: 'Advisor & Program Manager JSOM UTD', email: 'Genevieve.Fernandes@utdallas.edu', linkedin: 'https://www.linkedin.com/in/genfernandes/', photo: '/assets/team/genevieve-fernandes.png' },
  { filled: true, name: 'Tejas Shroff', role: 'Advisor & Adjunct Faculty JSOM UTD', email: 'Tejas.Shroff@utdallas.edu', linkedin: 'https://www.linkedin.com/in/tejasshroff/', photo: '/assets/team/tejas-shroff.png' },
  { filled: false, role: 'Advisor', abbr: 'A' },
  { filled: false, role: 'Advisor', abbr: 'A' },
];

function MemberCard({ member, lead }: { member: Member; lead: boolean }) {
  if (member.filled) {
    return (
      <div className="profile-card">
        <div className={`profile-photo${lead ? ' lead' : ''}`}>
          <Image src={member.photo} alt={member.name} width={400} height={533} />
        </div>
        <div className="profile-body">
          <h3>{member.name}</h3>
          <div className="profile-role large">{member.role}</div>
          <div className="profile-links">
            <a href={`mailto:${member.email}`}>{member.email}</a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn →</a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="profile-card">
      <div className={`profile-photo open${lead ? ' lead' : ''}`}>
        <span className="profile-tag">OPEN POSITION</span>
        <span className="abbr">{member.abbr}</span>
      </div>
      <div className="profile-body">
        <h3>{member.role}</h3>
        <p className="profile-invite">This seat is open — apply and make it yours.</p>
        <div className="profile-links">
          <a href={OFFICER_APP_URL} target="_blank" rel="noopener noreferrer" className="profile-apply">Apply for this seat →</a>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="mission-hero utd-hero">
        <div className="wrap">
          <div className="breadcrumb mono"><Link href="/">Home</Link> / <Link href="/chapters">Chapters</Link> / <Link href="/chapters/utd">UT Dallas</Link> / Leadership</div>
          <div className="utd-hero-top">
            <span className="mono utd-hero-tag">CHAPTER 01 · LEADERSHIP</span>
            <span className="mono utd-hero-status">◌ 6 SEATS OPEN</span>
          </div>
          <h1 className="mission-h1" style={{ marginBottom: '20px' }}>Who runs this.</h1>
          <p className="doctrine-sub" style={{ fontStyle: 'italic', marginBottom: '40px' }}>&ldquo;mostly figuring it out live :)&rdquo;</p>

          <div className="utd-hero-meta" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="utd-meta-cell">
              <span className="mono utd-meta-label">TOTAL SEATS</span>
              <span className="utd-meta-value">18</span>
            </div>
            <div className="utd-meta-cell">
              <span className="mono utd-meta-label">FILLED</span>
              <span className="utd-meta-value">12</span>
            </div>
            <div className="utd-meta-cell">
              <span className="mono utd-meta-label">OPEN</span>
              <span className="utd-meta-value">6 <span className="utd-meta-hint">apply below</span></span>
            </div>
            <div className="utd-meta-cell">
              <span className="mono utd-meta-label">CHAPTER</span>
              <span className="utd-meta-value">UTD</span>
            </div>
          </div>

          <div className="utd-hero-cta">
            <a className="hero-cta-primary" href={OFFICER_APP_URL} target="_blank" rel="noopener noreferrer">APPLY FOR OPEN SEATS →</a>
            <Link className="utd-hero-link mono" href="/chapters/utd">← Back to UTD Chapter</Link>
          </div>
        </div>
      </section>

      {/* EXECUTIVE BOARD */}
      <section className="mission-block">
        <div className="wrap">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '4px' }}>
            <span className="block-eyebrow mono" style={{ margin: 0 }}>EXECUTIVE BOARD / 001</span>
            <span className="mono" style={{
              fontSize: '9px',
              letterSpacing: '.16em',
              color: 'var(--flask)',
              padding: '4px 10px',
              border: '1px solid var(--flask)',
              fontWeight: 700,
            }}>WOMEN-LED · CHAPTER 01</span>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginBottom: '24px' }}>The five seats that set direction for the chapter — strategy, structure, and who we bring in next.</p>
          <div className="profile-grid exec">
            {execBoard.map((m, i) => <MemberCard key={i} member={m} lead={true} />)}
          </div>
        </div>
      </section>

      {/* OFFICERS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">OFFICERS / 002</span>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginBottom: '24px' }}>The people who actually run the day-to-day — events, design, partnerships, and everything in between.</p>
          <div className="profile-grid">
            {officers.map((m, i) => <MemberCard key={i} member={m} lead={false} />)}
          </div>
        </div>
      </section>

      {/* ADVISORS */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">ADVISORS / 003</span>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginBottom: '24px' }}>Experienced mentors who guide our direction and help us build better.</p>
          <div className="profile-grid">
            {advisors.map((m, i) => <MemberCard key={i} member={m} lead={false} />)}
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="mission-block">
        <div className="wrap">
          <span className="block-eyebrow mono">GOVERNANCE / 004</span>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
            <a className="hero-cta-secondary" href="https://utdallas.box.com/v/Cometfoundrylaws" target="_blank" rel="noopener noreferrer">VIEW CONSTITUTION &amp; BYLAWS →</a>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mission-block mission-cta-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="block-eyebrow mono">JOIN THEM</span>
          <h2 className="mission-display" style={{ color: 'var(--ink)', fontSize: 'clamp(22px, 3.5vw, 36px)', marginTop: '16px' }}>Be on this page next.</h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginTop: '8px' }}>&ldquo;Every open seat is an opportunity to help build something real at Chapter 01. Apply and make it yours.&rdquo;</p>
          <div className="mission-cta-row" style={{ justifyContent: 'center', marginTop: '28px' }}>
            <a className="hero-cta-primary" href={OFFICER_APP_URL} target="_blank" rel="noopener noreferrer">APPLY FOR OPEN SEATS →</a>
            <Link className="hero-cta-secondary" href="/chapters/utd">BACK TO UTD CHAPTER →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
