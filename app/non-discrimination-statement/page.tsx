import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/non-discrimination-statement',
  ogTitle: 'Non-Discrimination Statement — Comet Foundry',
  description: 'Comet Foundry Non-Discrimination Statement. Our commitment to providing a non-discriminatory environment for all members and participants.',
});

export default function NonDiscriminationStatementPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Non-Discrimination Statement</div>
          <h1>Non-Discrimination Statement</h1>
          <p className="lede">Effective Date: August 1, 2026</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="legal-body">
            <p>
              Comet Foundry ("Comet Foundry," "we," "us," or "our") is committed to providing an environment for membership, participation, and leadership that is free from discrimination and harassment. This Non-Discrimination Statement ("Statement") describes that commitment and applies to all Comet Foundry activities, whether conducted as the founding chapter registered with the University of Texas at Dallas ("UT Dallas") Student Organization Center ("SOC") or as part of Comet Foundry's independent nonprofit initiative.
            </p>

            <h2>1. Statement of Policy</h2>
            <p>
              Comet Foundry does not discriminate on the basis of race, color, national origin, ancestry, religion, sex, gender, gender identity or expression, sexual orientation, age, disability, genetic information, veteran or military status, or any other characteristic protected by applicable federal, Texas state, or UT Dallas policy, in any aspect of its:
            </p>
            <ul>
              <li><strong>Membership eligibility, event attendance, and recruitment,</strong> which are open to self-attesting eligible students on a non-discriminatory basis.</li>
              <li><strong>Admission into capacity-limited programs,</strong> such as building at the Foundry, and officer and leadership selection, both of which are determined purely through the interview-based processes described in Sections 3 and 4, not through any protected characteristic.</li>
              <li><strong>Participation in programs, events, and activities.</strong></li>
              <li><strong>Access to resources, opportunities, and benefits</strong> offered through Comet Foundry.</li>
            </ul>

            <h2>2. Application</h2>
            <p>
              This Statement applies equally to Comet Foundry's founding chapter, operating as a registered UT Dallas student organization, and to Comet Foundry's independent 501(c)(3) nonprofit initiative, as well as to any future campus chapters established through Comet Foundry's chapter application process. All chapters and affiliated structures of Comet Foundry are expected to uphold this Statement.
            </p>
            <p>
              This Statement extends to all individuals who interact with Comet Foundry in a covered capacity, including prospective and current members, officer applicants, event attendees, volunteers, and, where applicable, Comet Foundry's advisory Industry Partner.
            </p>

            <h2>3. Open Events and Selective Builder Admission</h2>
            <p>
              Comet Foundry distinguishes between open participation and admission into capacity-limited programs, as follows.
            </p>
            <h3>Events</h3>
            <p>
              Comet Foundry's general events, talks, and programming are open to all eligible students without restriction or an application requirement, consistent with Comet Foundry's non-discrimination commitment in Section 1.
            </p>
            <h3>Building at the Foundry and Related Benefits</h3>
            <p>
              Participation as a builder within Comet Foundry's core program, along with associated resources, mentorship, and other benefits, requires submission of a Join Foundry application and successful completion of an interview. This process exists because Comet Foundry has limited physical space, mentorship capacity, and resources, and cannot support every interested individual at that level of engagement. Selection is based on factors such as demonstrated commitment, seriousness of intent, and fit for the program, reflecting Comet Foundry's belief that meaningful support for builders and innovators requires a genuine, sustained commitment from participants. Selection is not based on any protected characteristic identified in Section 1.
            </p>

            <h2>4. Interview-Based, Merit-Only Officer Selection</h2>
            <p>
              Admission into officer and leadership positions within Comet Foundry, including all Executive Board and General Officer seats, is determined purely through an interview-based selection process, consistent with Comet Foundry's Constitution and Bylaws. Selection is based solely on the candidate's performance in that interview process, including factors such as qualifications, fit, communication, and demonstrated interest in Comet Foundry's mission.
            </p>
            <p>
              No protected characteristic identified in Section 1, including but not limited to race, color, national origin, religion, sex, gender, gender identity or expression, sexual orientation, age, disability, or veteran status, is considered, weighed, or otherwise factored into any selection decision, whether for officer positions or for admission into the builder program described in Section 3. Comet Foundry's interview processes are designed and administered to evaluate candidates on merit and capacity alone, and any suggestion that a selection outcome reflects discrimination rather than the interview process itself is expressly disclaimed.
            </p>

            <h2>5. Reporting Concerns</h2>
            <p>
              Any individual who believes they have experienced or witnessed discrimination in violation of this Statement is encouraged to report the concern so it can be reviewed. Reports may be submitted to:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:legal@cometfoundry.com">legal@cometfoundry.com</a></li>
              <li><strong>Subject Line:</strong> Non-Discrimination Concern</li>
            </ul>
            <p>
              Reports involving conduct at UT Dallas-affiliated activities may also be subject to reporting requirements and resources available through UT Dallas and the Student Organization Center, independent of any report made directly to Comet Foundry. Comet Foundry will not retaliate against anyone who reports a concern in good faith under this Statement.
            </p>

            <h2>6. Relationship to UT Dallas and SOC Policy</h2>
            <p>
              As the founding chapter operates as a registered UT Dallas student organization, this Statement is intended to be consistent with, and does not limit, applicable UT Dallas and Student Organization Center non-discrimination policies, which independently govern registered student organizations. Where UT Dallas or SOC policy imposes additional or more specific requirements, those requirements also apply.
            </p>

            <h2>7. Relationship to Other Comet Foundry Policies</h2>
            <p>
              This Statement works together with Comet Foundry's <Link href="/code-of-conduct">Code of Conduct</Link>, which sets broader expectations for respectful behavior across all Comet Foundry spaces, and with Comet Foundry's governing Constitution and Bylaws. In the event of any conflict specific to discrimination or eligibility, this Statement controls on that subject matter.
            </p>

            <h2>8. No Guarantee of Particular Outcome</h2>
            <p>
              This Statement reflects Comet Foundry's policy and good-faith commitment. It does not create a private legal cause of action against Comet Foundry, its officers, directors, members, or volunteers, and does not guarantee a particular investigative process or outcome, beyond Comet Foundry's good-faith review of concerns raised in accordance with Section 4.
            </p>

            <h2>9. Changes to This Statement</h2>
            <p>
              Comet Foundry may update this Statement from time to time. Material changes will be reflected by an updated "Effective Date" above.
            </p>

            <h2>10. Contact Us</h2>
            <p>Questions about this Statement may be directed to:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:legal@cometfoundry.com">legal@cometfoundry.com</a></li>
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
