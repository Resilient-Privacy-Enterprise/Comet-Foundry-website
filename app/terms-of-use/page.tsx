import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = pageMetadata({
  path: '/terms-of-use',
  ogTitle: 'Terms of Use — Comet Foundry',
  description: 'Terms governing use of the Comet Foundry website, cometfoundry.com, and related services.',
});

const bodyHtml = `
  <h2>1. Acceptance of Terms</h2>
  <p>These Terms of Use ("Terms") govern access to and use of cometfoundry.com (the "Site"), operated by Comet Foundry, a non-profit registered student organization at the University of Texas at Dallas ("UT Dallas"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, do not access or use the Site.</p>

  <h2>2. About Comet Foundry</h2>
  <p>Comet Foundry is a student-led, non-profit innovation, entrepreneurship, and technology organization registered through the UT Dallas Student Organization Center (SOC). Comet Foundry maintains full independence in its programming and governance decisions. Resilient Privacy Inc. serves as Comet Foundry's founding Industry Partner in a non-voting, advisory capacity only and does not direct or control Comet Foundry's decisions.</p>

  <h2>3. Eligibility</h2>
  <p>The Site is publicly accessible. Membership, officer, and voting roles are governed exclusively by the Comet Foundry Constitution and Bylaws and are reserved for currently enrolled UT Dallas students on the basis of self-attestation. Consistent with FERPA, Comet Foundry does not verify enrollment status through UT Dallas or SOC records.</p>

  <h2>4. Acceptable Use</h2>
  <ul>
    <li>Provide accurate information in any form submitted through the Site</li>
    <li>Use the Site only for lawful purposes</li>
    <li>Not disrupt, interfere with, or attempt unauthorized access to the Site</li>
    <li>Not scrape, copy, or redistribute Site content without written permission</li>
  </ul>

  <h2>5. Intellectual Property</h2>
  <p>The Comet Foundry name, logo, and Site content are the property of Comet Foundry or its licensors and may not be reproduced or used commercially without prior written consent.</p>

  <h2>6. User Submissions</h2>
  <p>Content you submit to the Site grants Comet Foundry a limited, non-exclusive license to use that content for organizational operations. You retain ownership of your submissions.</p>

  <h2>7. No Guarantee of Outcomes</h2>
  <p>Comet Foundry does not guarantee admission to any program, internship placement, mentorship match, funding, or any specific outcome from participation in its Services.</p>

  <h2>8. Assumption of Risk</h2>
  <p>Participation in Comet Foundry events, workshops, and activities is voluntary. Each participant assumes full responsibility for their own participation and safety, and agrees to follow all applicable UT Dallas policies and event guidelines.</p>

  <h2>9. Disclaimers</h2>
  <p>The Site and its content are provided "as is" and "as available," without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. Comet Foundry does not warrant that the Site will be uninterrupted, error-free, or secure.</p>

  <h2>10. Limitation of Liability</h2>
  <p>To the fullest extent permitted by law, Comet Foundry, its officers, members, volunteers, and Resilient Privacy Inc. (collectively, the "Comet Foundry Parties") shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, revenue, or goodwill, arising out of or related to use of the Site or participation in Comet Foundry activities, even if advised of the possibility of such damages.</p>

  <h2>11. Indemnification</h2>
  <p>You agree to indemnify, defend, and hold harmless the Comet Foundry Parties from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or related to your use of the Site, your violation of these Terms, or your participation in Comet Foundry activities.</p>

  <h2>12. Organizational Independence</h2>
  <p>Comet Foundry is governed by its own Constitution and Bylaws, with all governance and voting authority resting exclusively with its enrolled-student officers. Nothing on the Site constitutes an endorsement by UT Dallas beyond Comet Foundry's official SOC registration status.</p>

  <h2>13. Termination</h2>
  <p>Comet Foundry reserves the right to suspend or restrict access to the Site for any user who violates these Terms.</p>

  <h2>14. Governing Law</h2>
  <p>These Terms are governed by the laws of the State of Texas, without regard to conflict-of-laws principles.</p>

  <h2>15. Severability</h2>
  <p>If any provision of these Terms is held unenforceable, the remaining provisions will remain in full force and effect.</p>

  <h2>16. Changes to These Terms</h2>
  <p>Comet Foundry may revise these Terms from time to time. Continued use of the Site following posted changes constitutes acceptance of the revised Terms.</p>

  <div class="legal-contact">
    Comet Foundry<br>The University of Texas at Dallas<br>legal@cometfoundry.com
  </div>
`;

export default function TermsOfUsePage() {
  return (
    <LegalLayout
      title="Terms of Use"
      effective="EFFECTIVE DATE: AUGUST 1, 2026 &nbsp;|&nbsp; LAST UPDATED: AUGUST 1, 2026"
      bodyHtml={bodyHtml}
    />
  );
}
