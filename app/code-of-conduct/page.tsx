import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/code-of-conduct',
  ogTitle: 'Code of Conduct — Comet Foundry',
  description: 'Comet Foundry Code of Conduct. Our expectations for respectful and inclusive community behavior across all Comet Foundry spaces and activities.',
});

export default function CodeOfConductPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Code of Conduct</div>
          <h1>Code of Conduct</h1>
          <p className="lede">Effective Date: August 1, 2026</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="legal-body">
            <p>
              This Code of Conduct ("Code") applies to everyone who participates in Comet Foundry ("Comet Foundry," "we," "us," or "our") activities, including members, officers, applicants, event attendees, campus chapter participants, and anyone engaging with Comet Foundry's online spaces, forms, or communications (collectively, "Participants"). By participating in Comet Foundry, you agree to follow this Code.
            </p>

            <h2>1. Purpose</h2>
            <p>
              Comet Foundry exists to support students in becoming innovators, founders, and creators. That mission depends on a community where people feel safe, respected, and free to contribute ideas without fear of harassment, discrimination, or exclusion. This Code sets expectations for behavior across all Comet Foundry spaces, whether in person, online, or hybrid, so that Comet Foundry remains a welcoming environment for every Participant.
            </p>

            <h2>2. Scope</h2>
            <p>
              This Code applies to all Comet Foundry-affiliated spaces and activities, including:
            </p>
            <ul>
              <li>In-person meetings, events, workshops, and hackathons organized or co-organized by Comet Foundry.</li>
              <li>Online communications, including email, chat platforms, video calls, and shared documents used for Comet Foundry business.</li>
              <li>The Site (cometfoundry.com), its associated forms, and its GitHub repository.</li>
              <li>Interactions between Participants that reference or arise out of their involvement with Comet Foundry, including at UT Dallas Student Organization Center (SOC) events.</li>
            </ul>

            <h2>3. Expected Behavior</h2>
            <p>
              Participants are expected to:
            </p>
            <ul>
              <li>Treat all other Participants with respect, courtesy, and professionalism, regardless of background, identity, or experience level.</li>
              <li>Communicate constructively, including when giving feedback or disagreeing with an idea or decision.</li>
              <li>Respect differing viewpoints, experiences, and levels of technical or entrepreneurial background.</li>
              <li>Exercise consideration and empathy toward fellow Participants in both speech and action.</li>
              <li>Follow the instructions of event organizers, officers, and Comet Foundry leadership at Comet Foundry activities.</li>
              <li>Comply with applicable UT Dallas and Student Organization Center policies when participating in activities affiliated with the founding chapter.</li>
            </ul>

            <h2>4. Unacceptable Behavior</h2>
            <p>
              The following conduct is considered unacceptable within any space covered by this Code:
            </p>
            <ul>
              <li>Harassment, intimidation, or discrimination in any form, including based on race, ethnicity, national origin, religion, gender, gender identity or expression, sexual orientation, age, disability, or veteran status.</li>
              <li>Unwelcome sexual attention, comments, or advances.</li>
              <li>Personal attacks, insults, or derogatory comments directed at another Participant.</li>
              <li>Deliberate intimidation, stalking, or following, whether online or in person.</li>
              <li>Sustained disruption of meetings, events, talks, or online discussions.</li>
              <li>Sharing or displaying sexually explicit, violent, or otherwise inappropriate material in Comet Foundry spaces.</li>
              <li>Publishing or threatening to publish another Participant's private information without consent.</li>
              <li>Encouraging or advocating for any of the above behavior.</li>
              <li>Retaliation against a Participant for reporting a concern in good faith under this Code.</li>
            </ul>

            <h2>5. Officer and Leadership Responsibilities</h2>
            <p>
              Officers, Executive Board members, and other Comet Foundry leadership are expected to model the standards in this Code and to respond to reported concerns fairly, promptly, and with appropriate discretion. Leadership is not exempt from this Code and is held to the same standards of conduct as all other Participants.
            </p>

            <h2>6. Reporting a Concern</h2>
            <p>
              If you experience or witness behavior that violates this Code, we encourage you to report it as soon as reasonably possible so it can be addressed. Reports may be submitted to:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:security@cometfoundry.com">security@cometfoundry.com</a></li>
              <li><strong>Subject Line:</strong> Code of Conduct Concern</li>
            </ul>
            <p>
              Reports should include, where possible, a description of the incident, the individuals involved, the date and location, and any supporting information. Reports will be handled with as much discretion as is reasonably practicable given the nature of a student organization. Comet Foundry will not retaliate against anyone who reports a concern in good faith, and prohibits retaliation by others under Section 4 above.
            </p>

            <h2>7. Response and Enforcement</h2>
            <p>
              Comet Foundry leadership will review reported concerns and determine an appropriate response based on the nature and severity of the conduct. Responses may include, without limitation:
            </p>
            <ul>
              <li>An informal conversation or warning.</li>
              <li>A formal warning documented with the individual involved.</li>
              <li>Temporary or permanent removal from a specific event, program, or Comet Foundry space.</li>
              <li>Removal from an officer or leadership position.</li>
              <li>Termination of the individual's involvement with Comet Foundry.</li>
              <li>Referral to UT Dallas, the Student Organization Center, or law enforcement, where appropriate and where conduct may violate university policy or applicable law.</li>
            </ul>
            <p>
              Comet Foundry retains discretion over the appropriate response and is not obligated to disclose the outcome of a report to the reporting party beyond confirming that the matter was reviewed, except where required by applicable UT Dallas or Student Organization Center policy.
            </p>

            <h2>8. Relationship to UT Dallas and SOC Policies</h2>
            <p>
              As the founding chapter of Comet Foundry operates as a registered UT Dallas student organization, Participants are also subject to applicable UT Dallas and Student Organization Center codes of conduct, policies, and procedures. Where this Code and university policy address the same conduct, the more protective or more specific standard will generally govern, and nothing in this Code limits UT Dallas's or the Student Organization Center's own authority over its registered organizations.
            </p>

            <h2>9. No Guarantee of Outcome</h2>
            <p>
              This Code reflects Comet Foundry's expectations and good-faith process for addressing concerns. It does not create a contractual right to any particular outcome, investigation procedure, or disciplinary result, and Comet Foundry retains discretion in how it applies and enforces this Code consistent with its governing documents.
            </p>

            <h2>10. Changes to This Code</h2>
            <p>
              Comet Foundry may update this Code from time to time to better serve its community. Material changes will be reflected by an updated "Effective Date" above. Continued participation in Comet Foundry activities following such changes constitutes acceptance of the revised Code.
            </p>

            <h2>11. Contact Us</h2>
            <p>Questions about this Code may be directed to:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:security@cometfoundry.com">security@cometfoundry.com</a></li>
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
