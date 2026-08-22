import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/builder-acceptance-rulebook',
  ogTitle: 'Builder Acceptance Rulebook — Comet Foundry',
  description: 'Comet Foundry Builder Acceptance Rulebook. Complete standards, process, and safeguards for admission into the builder program.',
});

export default function BuilderAcceptanceRulebookPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Builder Acceptance Rulebook</div>
          <h1>Builder Acceptance Rulebook</h1>
          <p className="lede">Effective Date: August 1, 2026</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="legal-body">
            <h2>Preamble</h2>
            <p>
              Comet Foundry was founded on a singular conviction: that the next generation of innovators, founders, and creators deserves an environment worthy of their ambition. To honor that conviction, admission into Comet Foundry's builder program cannot be extended without limit. It must be extended with intention, consistency, and fairness, to those individuals prepared to meet the seriousness of the opportunity with the seriousness of their own commitment.
            </p>
            <p>
              This Builder Acceptance Rulebook ("Rulebook") sets forth, in full and in good faith, the standards, process, and safeguards that govern acceptance into Comet Foundry's builder program. It is written so that every applicant, whether accepted, waitlisted, or declined, understands precisely how and why that outcome was reached.
            </p>

            <h2>Article I. Purpose of Selective Admission</h2>
            <p>
              Comet Foundry's builder program provides physical space, mentorship, resources, and community to students actively building ventures, products, or ideas. These resources are, by their nature, finite. Comet Foundry cannot, responsibly or sustainably, extend the full builder experience to every student who expresses interest. Selective admission exists for the following legitimate and disclosed reasons, and for no other reason:
            </p>
            <ol>
              <li><strong>Capacity of Physical Space.</strong> The Foundry's working space accommodates a limited number of builders at any given time, consistent with safety, comfort, and productive working conditions.</li>
              <li><strong>Availability of Mentorship and Resources.</strong> Meaningful mentorship, feedback, and support require sustained attention from a limited number of officers, advisors, and volunteers. Overextending this capacity dilutes the value delivered to every builder, not only to those newly admitted.</li>
              <li><strong>Integrity of Commitment.</strong> Comet Foundry's mission depends on a community of builders who bring sustained, serious effort to their work. Admission is calibrated to identify that commitment, so that space and resources are allocated to those most likely to make full use of them.</li>
            </ol>
            <p>
              Comet Foundry affirms that these constraints are logistical and mission-driven in nature. They are not, and must never be, a proxy for excluding any individual on any basis unrelated to genuine capacity and demonstrated commitment.
            </p>

            <h2>Article II. Eligibility to Apply</h2>
            <p>
              Any student who satisfies Comet Foundry's general eligibility criteria, as set forth in Comet Foundry's Constitution, Bylaws, and Terms of Use, including eligibility by self-attestation, may submit a Join Foundry application. Eligibility to apply is open without regard to race, color, national origin, ancestry, religion, sex, gender, gender identity or expression, sexual orientation, age, disability, genetic information, veteran or military status, or any other characteristic protected by applicable law or UT Dallas policy, consistent with Comet Foundry's <Link href="/non-discrimination-statement">Non-Discrimination Statement</Link>.
            </p>

            <h2>Article III. Admission Cycles</h2>
            <p>
              Comet Foundry admits new builders once each long semester, in alignment with the Fall and Spring academic terms at UT Dallas. Comet Foundry does not conduct standing, rolling admission outside of these two cycles. This cadence reflects deliberate organizational judgment, not administrative convenience, for the following reasons:
            </p>
            <ol>
              <li><strong>Alignment with the Academic Calendar.</strong> A long semester provides a builder with a coherent, sustained period, typically fifteen to sixteen weeks, in which to make meaningful progress on a venture. Admitting builders mid-semester, or on a rolling basis, would compress that runway unpredictably and undermine the depth of engagement Comet Foundry seeks to provide.</li>
              <li><strong>Sound Capacity Planning.</strong> Because Comet Foundry's space, mentorship, and resources are finite, as set forth in Article I, responsible allocation of those resources requires knowing, at the start of a semester, the full cohort that must be supported through its duration. A fixed intake cycle allows Comet Foundry to plan mentorship pairings, space assignments, and programming with the rigor a serious builder community deserves.</li>
              <li><strong>Cohort Cohesion.</strong> Builders admitted together as a semester cohort progress through onboarding, programming, and community-building in step with one another. Continuous or rolling admission would fragment that cohort experience and dilute the peer accountability that drives builder outcomes.</li>
              <li><strong>Consistency and Fairness in Review.</strong> Evaluating all applicants within a defined cycle, against one another and against the same standards described in Article IV, Section 3, ensures that admission and waitlist decisions are made on a consistent, comparable basis rather than in a shifting, ad hoc manner across the year.</li>
            </ol>
            <p>
              Comet Foundry does not admit builders during the summer term, given its shorter duration, reduced campus-wide programming, and lower availability of both applicants and mentors. Applicants who apply outside an active intake window will have their applications held for consideration in the next long semester's cycle, unless Comet Foundry announces otherwise.
            </p>

            <h2>Article IV. The Application and Interview Process</h2>
            <h3>Section 1. Submission</h3>
            <p>
              Prospective builders apply through the Join Foundry application. The application requests information reasonably necessary to evaluate an applicant's project, intent, and readiness to build, including a description of the applicant's current or intended venture, prior effort or progress, and availability.
            </p>
            <h3>Section 2. Interview</h3>
            <p>
              Every applicant who submits a complete Join Foundry application will be offered the opportunity for an interview, conducted by Comet Foundry officers or designated reviewers. The interview is the sole mechanism through which applicants are evaluated for admission. No applicant is admitted or declined without the opportunity to be heard through this process, except where an application is incomplete or withdrawn.
            </p>
            <h3>Section 3. Evaluation Criteria</h3>
            <p>
              Interviewers evaluate each applicant against the following criteria, applied consistently and evenly to every applicant:
            </p>
            <ul>
              <li>Demonstrated seriousness of intent and realistic understanding of the effort required to build.</li>
              <li>Clarity and coherence of the applicant's project, idea, or venture, at whatever stage it currently stands.</li>
              <li>Evidence of prior initiative, whether through the current project or comparable past effort.</li>
              <li>Availability and capacity to meaningfully engage with the Foundry's space, mentorship, and community.</li>
              <li>Alignment with Comet Foundry's mission of supporting genuine builders, founders, and creators.</li>
            </ul>
            <p>
              No criterion listed above, nor any criterion applied in practice, may reference or rely upon race, color, national origin, ancestry, religion, sex, gender, gender identity or expression, sexual orientation, age, disability, veteran status, or any other characteristic protected by applicable law or UT Dallas policy. Comet Foundry affirms, without qualification, that its evaluation process is merit-based and capacity-based alone.
            </p>

            <h2>Article V. Decisions and Outcomes</h2>
            <p>
              Following interview, each applicant will receive one of the following outcomes:
            </p>
            <ol>
              <li><strong>Accepted.</strong> The applicant is admitted into the builder program and may begin using Foundry space and resources, subject to onboarding requirements communicated at the time of acceptance.</li>
              <li><strong>Waitlisted.</strong> The applicant has met Comet Foundry's standard for admission, but current capacity constraints, as described in Article I, prevent immediate placement.</li>
              <li><strong>Not Admitted at This Time.</strong> The applicant is welcome to reapply in a future cycle, and is encouraged to attend Comet Foundry's open events in the interim, which remain available to all eligible students without restriction.</li>
            </ol>

            <h2>Article VI. The Waitlist</h2>
            <p>
              Comet Foundry maintains its waitlist according to the following rule, applied without exception:
            </p>
            <ul>
              <li>Applicants placed on the waitlist are ordered strictly according to the date and time their completed Join Foundry application was originally submitted, on a first-in, first-served basis.</li>
              <li>As space, mentorship capacity, or resources become available, offers of admission are extended to waitlisted applicants strictly in that order.</li>
              <li>An applicant's position on the waitlist is never adjusted, reordered, or influenced by any factor other than original application submission time, including but not limited to identity, background, personal connections, or any characteristic unrelated to the order of submission.</li>
              <li>Waitlisted applicants will be kept reasonably informed of their status and may withdraw from the waitlist at any time by notifying Comet Foundry.</li>
            </ul>
            <p>
              Comet Foundry offers this assurance plainly: placement on the waitlist reflects only the constraint of finite capacity at a given moment, and the order in which applications were received. It does not reflect, in any respect, a judgment of an applicant's worth, potential, or belonging within the Comet Foundry community.
            </p>

            <h2>Article VII. Fairness and Non-Bias Assurance</h2>
            <p>
              Comet Foundry commits, as a matter of organizational principle and practice, that:
            </p>
            <ul>
              <li>Every application and every interview is evaluated under the same criteria set forth in Article IV, applied consistently across all applicants within a given cycle.</li>
              <li>No officer, reviewer, or interviewer may apply criteria beyond those set forth in this Rulebook, and each is expected to recuse themselves from evaluating an applicant with whom they have an undisclosed conflict of interest.</li>
              <li>Capacity constraints affect the number of applicants who can be admitted at a given time; they do not, and must not, affect the standard by which any individual applicant is judged.</li>
            </ul>
            <p>
              Comet Foundry's <Link href="/non-discrimination-statement">Non-Discrimination Statement</Link> applies in full to the process described in this Rulebook, and any concern regarding the fairness of an admission decision may be raised through the channels described in that Statement.
            </p>

            <h2>Article VIII. Reapplication</h2>
            <p>
              An applicant who is not admitted, or who withdraws from the waitlist, is welcome to submit a new Join Foundry application in a future cycle. Reapplication is evaluated on the same terms as any other application, without prejudice from a prior outcome.
            </p>

            <h2>Article IX. Confidentiality of the Review Process</h2>
            <p>
              Application materials, interview notes, and internal deliberations are treated as confidential by Comet Foundry officers and reviewers, and are used solely for the purpose of evaluating admission, consistent with Comet Foundry's <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>

            <h2>Article X. Relationship to Other Comet Foundry Governing Documents</h2>
            <p>
              This Rulebook operates in conjunction with, and does not override, Comet Foundry's Constitution, Bylaws, <Link href="/non-discrimination-statement">Non-Discrimination Statement</Link>, and <Link href="/ip-trademark-policy">Intellectual Property and Trademark Policy</Link>. In the event of a conflict specific to builder admission, this Rulebook controls on that subject matter.
            </p>

            <h2>Article XI. Amendment</h2>
            <p>
              Comet Foundry may amend this Rulebook from time to time, consistent with its governing documents, to reflect the evolving needs and capacity of the Foundry. Material changes will be reflected by an updated "Effective Date" above. No amendment will be applied retroactively to alter a decision already communicated to an applicant.
            </p>

            <h2>Contact Us</h2>
            <p>Questions about this Rulebook or the builder application process may be directed to:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:legal@cometfoundry.com">legal@cometfoundry.com</a></li>
              <li><strong>Subject Line:</strong> Builder Application Inquiry</li>
              <li><strong>Website:</strong> <a href="https://www.cometfoundry.com">cometfoundry.com</a></li>
            </ul>

            <div className="legal-contact">
              © 2026 Comet Foundry. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
