import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

const ADMISSIONS = 'admissions@cometfoundry.com';

export const metadata: Metadata = pageMetadata({
  path: '/membership-policy',
  ogTitle: 'Membership Policy — Comet Foundry',
  description: 'Comet Foundry Membership Policy: how admission works, membership tiers, fees, benefits, refund policy, and terms for every chapter.',
  keywords: ['membership', 'fees', 'admissions', 'comet foundry', 'chapter membership'],
});

export default function MembershipPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Membership Policy</div>
          <h1>Membership Policy</h1>
          <p className="lede">
            Effective Date: August 1, 2026 &nbsp;|&nbsp; Contact: <a href={`mailto:${ADMISSIONS}`}>{ADMISSIONS}</a>
          </p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="legal-body">
            <p>
              This Membership Policy governs the terms under which individuals may obtain and maintain membership in Comet Foundry, a nonprofit organization operating under Section 501(c)(3) of the Internal Revenue Code (pending IRS determination). This Policy is incorporated by reference into the Comet Foundry Code of Conduct, Builder Acceptance Rulebook, and all applicable chapter governance documents.
            </p>

            <h2>1. What Is Comet Foundry</h2>
            <p>
              Comet Foundry is not a campus club. It is not a networking group. It is not a speaker series dressed up as a program. Comet Foundry is a founder ecosystem — a structured, selective, practitioner-led movement operating across the United States with the singular mission of turning students who want to build into students who actually do.
            </p>
            <p>
              We are a Foundry. That word is intentional. A foundry takes raw material and shapes it under pressure into something that lasts. That is what we do with people.
            </p>
            <p>
              We operate across university campuses through licensed chapters, but we are not defined by any single campus. We are a national ecosystem with a chapter infrastructure — and the distinction matters because it changes what you get when you walk in the door. Our goal is not to mentor you in general. Our goal is to give you specific, personal guidance calibrated to your idea, your background, your gaps, and your timeline. The kind of guidance most founders do not find until they are three years in and have already made the expensive mistakes. We believe every approved member deserves that before they start.
            </p>

            <h2>2. Who We Are Looking For</h2>
            <p>
              Comet Foundry membership is open to anyone who genuinely wants to build — regardless of major, academic performance, prior experience, or background. You do not need a business idea to apply. You do not need to have coded, launched, or pitched anything. You need the drive to figure it out and the honesty to show us where you are.
            </p>
            <p>We are looking for people who are:</p>
            <ul>
              <li>Passionate about building something real — a company, a product, a system, or a solution to a problem they care about;</li>
              <li>Willing to do the work outside of class — this is not passive learning;</li>
              <li>Intellectually honest about what they know and what they do not;</li>
              <li>Ready to be part of a high-accountability, high-support community.</li>
            </ul>
            <p><em>We are not looking for the most polished applicant. We are looking for the most committed one.</em></p>

            <h2>3. How Admission Works</h2>
            <p>
              Applying to Comet Foundry does not guarantee a seat. Every application goes through a structured review and interview process conducted by the Comet Foundry admissions team. The interview is not a test of what you know. It is a conversation about who you are, what drives you, what you have tried, what you want to build, and what you are willing to put in. We are evaluating commitment, intellectual honesty, and coachability — not GPA, major, network, or prior accolades.
            </p>
            <p><strong>The process:</strong></p>
            <ul>
              <li>Submit your application during an active intake window to <a href={`mailto:${ADMISSIONS}`}>{ADMISSIONS}</a>;</li>
              <li>Applications are reviewed by the Comet Foundry admissions team within the intake period;</li>
              <li>Shortlisted applicants are invited for a one-on-one admissions interview;</li>
              <li>The interview covers your background, motivations, areas of interest, and what you hope to build;</li>
              <li>Admission decisions are made based solely on the interview and application — not referrals, connections, or social proof.</li>
            </ul>
            <p><strong>On referrals and connections:</strong> No referral, personal connection, or relationship with any Comet Foundry officer or member can secure you a seat. Every applicant is evaluated on the same basis. There are no back doors.</p>
            <p><strong>On letters of recommendation:</strong> A letter of recommendation from a professor who has taught you and can speak to your character, work ethic, or intellectual curiosity is recognized as a meaningful positive signal and is considered alongside your application. It is not required, and it does not override the interview. It adds context. Submit it alongside your application if you have one.</p>
            <p><strong>On waitlists:</strong> If a chapter&apos;s intake cohort is full, qualified applicants may be offered a waitlist position. Waitlist placement is strictly first-in-first-served by application submission timestamp. No exceptions.</p>

            <h2>4. Membership Tiers and Fees</h2>
            <div style={{ overflowX: 'auto', margin: '16px 0 20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px', border: '1px solid var(--line)' }}>
                <thead>
                  <tr style={{ background: 'var(--paper-raised)' }}>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: '13px', fontWeight: 700, borderBottom: '1px solid var(--line)' }}>Tier</th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: '13px', fontWeight: 700, borderBottom: '1px solid var(--line)' }}>Per Semester</th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: '13px', fontWeight: 700, borderBottom: '1px solid var(--line)' }}>Annual Prepay <span style={{ fontWeight: 400, color: 'var(--ink-soft)' }}>(Fall + Spring)</span></th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: '13px', fontWeight: 700, borderBottom: '1px solid var(--line)' }}>You Save</th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: '13px', fontWeight: 700, borderBottom: '1px solid var(--line)' }}>Eligibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid var(--line)', fontWeight: 600 }}>Founding Builder</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid var(--line)' }}>$25.00</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid var(--line)' }}>$40.00</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid var(--line)', color: 'var(--flask)', fontWeight: 600 }}>$10.00</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid var(--line)', color: 'var(--ink-soft)' }}>First 50 accepted members per chapter</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid var(--line)', fontWeight: 600 }}>Standard Builder</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid var(--line)' }}>$49.00</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid var(--line)' }}>$85.00</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid var(--line)', color: 'var(--flask)', fontWeight: 600 }}>$13.00</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid var(--line)', color: 'var(--ink-soft)' }}>After 50-member threshold per chapter</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 600 }}>Alumni Member</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--ink-soft)' }}>N/A</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px' }}>$199.00 / yr</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--ink-soft)' }}>—</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--ink-soft)' }}>UTD graduates (campus) or any graduate (external venues)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Annual prepay covers both the Fall and Spring semesters in a single upfront payment. No charge applies for summer. Annual prepay locks in your rate for the full academic year and is the recommended option for members who plan to participate across both semesters.
            </p>
            <p><strong>Student Builder tier threshold:</strong></p>
            <ul>
              <li>The 50-member Founding Builder count is cumulative per chapter and does not reset each semester.</li>
              <li>Once a chapter reaches 50 accepted members, the Standard Builder rate of $49.00 applies immediately to all subsequent applicants, including mid-semester.</li>
              <li>Founding Builder status, once granted, is retained indefinitely as long as the member remains active and in good standing within their chapter.</li>
              <li>The threshold is independent across chapters. Joining one chapter does not affect your rate at another.</li>
            </ul>
            <p><strong>Billing cadence and auto-renewal:</strong></p>
            <ul>
              <li>Per-semester billing: charged once per long semester (Fall and Spring only). No fee applies for summer terms. Membership auto-renews each semester unless cancelled in writing before the semester billing date.</li>
              <li>Annual prepay billing: charged once per academic year, covering both Fall and Spring. No summer charge. Membership auto-renews annually unless cancelled in writing before the renewal date. Annual prepay fees are non-refundable upon cancellation — no pro-rata refund is issued for the unused portion of the prepaid term.</li>
              <li>Alumni Member fees: charged annually from the date of enrollment and auto-renew each year unless cancelled in writing before the renewal date.</li>
              <li>To cancel, members must submit a written cancellation request to <a href={`mailto:${ADMISSIONS}`}>{ADMISSIONS}</a> before the applicable billing date.</li>
            </ul>

            <h2>4A. Member Benefits</h2>
            <p>All active members receive the following for the duration of their membership term:</p>
            <ul>
              <li><strong>Universal Chapter Access.</strong> Your Comet Foundry membership is not limited to the chapter you joined. Your digital badge grants you access to any active Comet Foundry chapter across the United States. Travelling to another city or state? Walk in with your badge and you are in — events, Labs, workspace, and community. No additional fee, no separate registration. One membership, every chapter.</li>
              <li><strong>Builder Network Access.</strong> Full access to the Comet Foundry member community, including cohort communications, peer collaboration channels, and connections across active chapters nationally.</li>
              <li><strong>Member-Exclusive Programming.</strong> Priority access to all Comet Foundry campus programming, including Demo Days, Build Nights, Think Tanks, founder roundtables, speaker sessions, and operator workshops. All programming is domain-specific and practitioner-led. These sessions are not open to the general student population.</li>
              <li><strong>The Four Labs.</strong> Access to Comet Foundry&apos;s four structured programs: Build Lab, Think Lab, Network Lab, and After Hours. Each Lab is designed to move members from idea to execution across the full company-building lifecycle within a semester.</li>
              <li><strong>Startup Curriculum Access.</strong> Access to the full Comet Foundry curriculum covering seed through expansion stages, including entity formation education, US business registration guidance, legal compliance frameworks, fundraising mechanics, and growth operations.</li>
              <li><strong>Personal Guidance Sessions.</strong> Access to structured one-on-one and small group advisory sessions with Comet Foundry practitioners. Guidance is calibrated to the member&apos;s specific stage, idea, and gaps — not generic mentorship.</li>
              <li><strong>Launchpad Eligibility.</strong> First consideration for Comet Foundry Launchpad programs, subject to separate program criteria and cohort availability.</li>
              <li><strong>Digital Credentials.</strong> A Comet Foundry member badge and verifiable digital membership record for the active semester, suitable for use on LinkedIn and professional portfolios.</li>
              <li><strong>Advisor Introductions.</strong> Access to Comet Foundry chapter advisors, including faculty, active founders, and operators affiliated with the chapter.</li>
              <li><strong>Chapter-Specific Perks.</strong> Campus-level benefits as determined by the active chapter, which may include workspace access, co-working hours, local sponsor perks, and community events.</li>
            </ul>
            <p><em>Benefits are subject to availability and may vary by chapter. Comet Foundry reserves the right to modify the benefit structure prospectively with reasonable notice to active members.</em></p>

            <h2>4B. Alumni Membership</h2>
            <p>
              Comet Foundry offers a dedicated Alumni Membership tier for graduates who wish to remain connected to the builder community, contribute as mentors, and access Comet Foundry programming beyond their student years.
            </p>
            <p><strong>Eligibility:</strong></p>
            <ul>
              <li><strong>Campus-based access</strong> (UTD facilities, labs, and on-campus events): Open to graduates of The University of Texas at Dallas only, subject to applicable UTD campus access policies.</li>
              <li><strong>External venue access</strong> (Comet Foundry-organized events and spaces outside any university campus): Open to graduates of any accredited college or university, of any age, with no chapter affiliation required.</li>
            </ul>
            <p><strong>What Alumni Members receive:</strong></p>
            <ul>
              <li><strong>Network Access.</strong> Full access to the Comet Foundry alumni and builder network, including cross-chapter connections and community channels.</li>
              <li><strong>Event Access.</strong> Invitations to Comet Foundry Demo Days, speaker sessions, and community events at applicable venues based on eligibility tier above.</li>
              <li><strong>Lab and Space Access.</strong> Access to Comet Foundry Labs and physical workspaces at eligible venues. UTD campus access is restricted to UTD alumni only, consistent with university policy.</li>
              <li><strong>Mentor Role.</strong> Formal recognition as a Comet Foundry Community Mentor with the ability to engage with active student cohorts, participate in Think Labs and Build Labs as a resource, and appear in the Comet Foundry mentor directory.</li>
              <li><strong>Digital Credentials.</strong> Comet Foundry Alumni Member badge and verifiable annual membership record, suitable for professional profiles and LinkedIn.</li>
              <li><strong>Launchpad and Advisory Access.</strong> Eligibility to serve in advisory or evaluator roles at Demo Days and Launchpad programs, subject to chapter invitation.</li>
            </ul>
            <p><em>Alumni membership does not confer voting rights in Comet Foundry governance or chapter officer decisions. Alumni serving in advisory roles do so in a non-voting capacity consistent with Comet Foundry&apos;s governing documents.</em></p>

            <h2>5. Why Comet Foundry — The Honest Case for Your $25</h2>
            <p><strong>Most campus clubs bring speakers. We build founders.</strong></p>
            <p>
              Walk into most entrepreneurship or business clubs on any campus and you will find the same format: a guest speaker, a networking mixer, maybe a pitch competition once a year. The speakers are often impressive. But impressive speakers talking about their journey is not the same as you learning how to walk yours. Comet Foundry is structured differently. Every session, every Lab, and every program is built around one question: what does a student actually need to know to go from an idea to a functioning company?
            </p>
            <p><strong>What the curriculum covers — from seed to expansion:</strong></p>
            <ul>
              <li><strong>Seed Stage — Idea to Validation.</strong> Customer discovery, market sizing, building and testing your first version, and knowing when an idea is worth pursuing versus when to walk away.</li>
              <li><strong>Foundation Stage — Structure and Legality.</strong> How to formally register a business entity in the United States. The difference between an LLC, a C-Corp, and an S-Corp. EIN registration, operating agreements, banking setup, and intellectual property basics.</li>
              <li><strong>Growth Stage — Operations and Compliance.</strong> How to hire your first person legally. Employment contracts versus contractor agreements. Federal and state compliance obligations. Basic accounting, bookkeeping, fundraising mechanics, and what investors actually look for.</li>
              <li><strong>Expansion Stage — Scaling and Strategy.</strong> Building systems that work without you. Entering new markets. Structuring partnerships and licensing deals. Bringing on advisors, compensating them, and managing the relationship.</li>
            </ul>
            <p>
              Every stage is taught by people who have been through it — not professors teaching from textbooks, but founders who registered their first LLC in a dorm room, operators who built teams from zero, and practitioners who have navigated the exact compliance questions you will face.
            </p>
            <p><strong>A room full of builders, not job seekers.</strong> The 50-member Founding Builder cap per chapter is a deliberate choice to keep the room small enough that every member knows every other member. That peer density is the asset. The conversations you have after a Think Lab session with someone three months ahead of you on a problem you are currently stuck on are worth more than any lecture.</p>
            <p><strong>Member-exclusive programming, on your campus.</strong> Demo Days, Build Nights, Think Tanks, founder roundtables, and operator workshops are hosted on campus and open exclusively to Comet Foundry members. These same formats cost $50 to $200 or more per ticket at comparable outside events. Your semester fee covers the full calendar of programming for your chapter — none of it is open to the general student population.</p>
            <p><strong>Real practitioners, not motivational speakers.</strong> Every session leader, Lab facilitator, and advisor at Comet Foundry is selected for one qualification: they have done the thing they are teaching. Founders who have registered and run US companies. Operators who have managed compliance, hiring, and financial reporting. People who can answer your specific question because they have faced the same one themselves.</p>
            <p><strong>Your membership travels with you.</strong> Most clubs are locked to one building on one campus. Comet Foundry is different. Your membership badge is valid at every active Comet Foundry chapter across the United States. Travelling to another city or state? If there is a Comet Foundry chapter there, walk in with your badge — events, Labs, workspace, and community are open to you at no additional fee and with no separate registration required. As the chapter network grows, the value of your single membership compounds with every new city we open in.</p>
            <p><strong>A credential that compounds.</strong> Comet Foundry membership, Demo Day participation, and Launchpad selection are verifiable and visible. As the network grows across chapters and universities, the signal of being a Comet Foundry Founding Builder becomes more valuable, not less. Investors and early-stage employers pay attention to people who were building during college — not attending panels about building.</p>
            <p><em>Founding Builder rate ($25/semester or $40/year) is available to the first 50 members per chapter only. After that, the rate moves to $49/semester. If cost is a genuine barrier, contact <a href={`mailto:${ADMISSIONS}`}>{ADMISSIONS}</a> before assuming you cannot participate.</em></p>

            <h2>6. Startup Registration and Legal Assistance — Important Notice</h2>
            <p>
              Comet Foundry programming includes education on how to register and operate a business entity in the United States, covering entity formation, compliance obligations, intellectual property, employment, and fundraising. This education is provided as part of the member curriculum and is included in the membership fee.
            </p>
            <ul>
              <li>Comet Foundry does not register businesses, file documents, or act as a legal representative on behalf of any member or third party.</li>
              <li>All government filings — including entity formation documents, EIN applications, state registrations, and tax filings — are the sole responsibility of the member and must be submitted directly to the relevant government authority.</li>
              <li>All fees payable to government agencies, state authorities, registered agent services, and legal professionals are the direct financial responsibility of the member. Comet Foundry does not collect, facilitate, or mark up any such fees.</li>
              <li>Comet Foundry does not act as an intermediary or agency for any government or legal filing process and charges no facilitation or agency fee of any kind in connection with registration or legal matters.</li>
              <li>Where Comet Foundry connects members with attorneys, accountants, or registered agents through its advisor or partner network, any engagement and associated fees are agreed directly between the member and that professional. Comet Foundry is not a party to any such engagement.</li>
              <li>Nothing in Comet Foundry&apos;s programming or materials constitutes legal or financial advice. Members are encouraged to consult qualified legal and financial professionals for guidance specific to their circumstances.</li>
            </ul>

            <h2>7. Intake Windows and Renewal</h2>
            <p>
              Membership intake opens once per long semester, aligned with the academic calendar. Each chapter publishes its own intake window dates at the start of each semester.
            </p>
            <ul>
              <li>Applications submitted outside an active intake window are not accepted.</li>
              <li>Membership is valid for the billing cycle in which it was granted (per-semester or annual) and renews automatically at the end of each cycle unless cancelled in writing before the billing date.</li>
              <li>Members on per-semester billing are automatically renewed for the following Fall or Spring semester. No action is required to continue membership.</li>
              <li>Members on annual prepay billing are automatically renewed for the following academic year. No action is required to continue membership.</li>
              <li>Waitlist placement, where applicable, is strictly first-in-first-served by application submission timestamp with no exceptions.</li>
            </ul>
            <p><strong>Good standing and automatic renewal:</strong> Automatic renewal applies only to members who are in good standing with Comet Foundry. A member is not in good standing if they are subject to an active disciplinary review, have violated the Code of Conduct or Builder Acceptance Rulebook, or have been flagged for conduct harmful to the community or its mission. Members not in good standing are not eligible for automatic renewal and may be subject to removal from Comet Foundry at the Foundation&apos;s discretion. In such cases, paid membership fees — including any prepaid annual amount — are non-refundable, and the membership will not be renewed.</p>

            <h2>8. Refund Policy</h2>
            <p>
              Membership fees are non-refundable after the earlier of: (a) fourteen (14) calendar days following the date of payment, or (b) attendance at any Comet Foundry event or access to any member-exclusive resource during the applicable semester.
            </p>
            <p>
              Refund requests within the fourteen-day window must be submitted in writing to <a href={`mailto:${ADMISSIONS}`}>{ADMISSIONS}</a>. Approved refunds are processed within ten (10) business days to the original payment method.
            </p>
            <p>
              Comet Foundry may issue refunds outside this window at its sole discretion in cases of documented extenuating circumstances, including medical withdrawal from the member&apos;s institution or chapter closure prior to the commencement of programming.
            </p>

            <h2>9. Membership Suspension and Termination</h2>
            <p>Comet Foundry reserves the right to suspend or terminate membership at any time for any of the following:</p>
            <ul>
              <li>Violation of the Code of Conduct or Builder Acceptance Rulebook;</li>
              <li>Misrepresentation of enrollment status or eligibility;</li>
              <li>Conduct determined to be harmful to the Comet Foundry community or its mission;</li>
              <li>Loss of enrollment status at an accredited institution.</li>
            </ul>
            <p>
              Termination for cause does not entitle the member to a refund of fees paid. Members subject to suspension or termination will be notified in writing at the contact information on file.
            </p>

            <h2>10. Non-Discrimination</h2>
            <p>
              Comet Foundry does not discriminate in the granting of membership on the basis of race, color, religion, national origin, gender, gender identity or expression, sexual orientation, age, disability, veteran status, or any other characteristic protected by applicable law. All membership decisions are based solely on the admissions interview, application quality, and program capacity. Admission is interview-based due to the high-commitment nature of the program and the capacity constraints of each cohort — this structure exists to protect the quality of the community and is not a discriminatory practice.
            </p>

            <h2>11. Privacy</h2>
            <p>
              Personal information collected during the membership application and onboarding process is handled in accordance with the Comet Foundry <Link href="/privacy-policy">Privacy Policy</Link>, available at cometfoundry.com. Comet Foundry does not sell or share member data with third parties for commercial purposes.
            </p>

            <h2>12. Tax Deductibility</h2>
            <p>
              Comet Foundry has applied for recognition as a tax-exempt organization under Section 501(c)(3) of the Internal Revenue Code. As of the effective date of this Policy, the IRS determination letter has not yet been received. Accordingly, membership fees are not currently deductible as charitable contributions for U.S. federal income tax purposes. This notice will be updated upon receipt of the IRS determination letter.
            </p>

            <h2>13. Amendments</h2>
            <p>
              Comet Foundry reserves the right to amend this Policy at any time. Material changes will be communicated to active members via the contact information on file no fewer than fourteen (14) days before taking effect. Continued membership following notice of an amendment constitutes acceptance of the revised terms.
            </p>

            <h2>14. Contact</h2>
            <p>
              For membership questions, application status inquiries, or refund requests, contact us at <a href={`mailto:${ADMISSIONS}`}>{ADMISSIONS}</a>.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--ink-soft)', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--line)' }}>
              Comet Foundry &nbsp;|&nbsp; cometfoundry.com &nbsp;|&nbsp; <a href={`mailto:${ADMISSIONS}`}>{ADMISSIONS}</a> &nbsp;|&nbsp; Effective August 1, 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
