import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = pageMetadata({
  path: '/privacy-policy',
  ogTitle: 'Privacy Policy — Comet Foundry',
  description: 'How Comet Foundry collects, uses, and protects information for cometfoundry.com and related programs.',
});

const bodyHtml = `
  <h2>1. Introduction</h2>
  <p>Comet Foundry ("Comet Foundry," "we," "us," or "our") is a student-led, non-profit innovation, entrepreneurship, and technology organization registered as a student organization at the University of Texas at Dallas ("UT Dallas") through its Student Organization Center ("SOC"). This Privacy Policy ("Policy") describes how we collect, use, disclose, retain, and protect information in connection with cometfoundry.com (the "Site") and our related programs and communications (collectively, the "Services").</p>
  <p>By accessing or using the Services, you acknowledge that you have read and understood this Policy. If you do not agree with any part of this Policy, you should discontinue use of the Services.</p>

  <h2>2. No Independent Verification of Student Status</h2>
  <p>Comet Foundry does not request, receive, or verify a member's enrollment status, academic records, or other education records from UT Dallas or the SOC. Eligibility for officer or voting membership roles is confirmed solely through self-attestation by the individual, consistent with the Family Educational Rights and Privacy Act (FERPA), which prohibits Comet Foundry from accessing such records without the student's direct, independent authorization.</p>

  <h2>3. Information We Collect</h2>
  <p><strong>3.1 Information You Provide Directly</strong></p>
  <ul>
    <li>Name, email address, and phone number</li>
    <li>Self-reported academic information (e.g., major, classification) submitted voluntarily in membership or officer applications</li>
    <li>Event registration details, including RSVP responses and accessibility accommodation requests</li>
    <li>Content of messages submitted through contact, application, or feedback forms</li>
    <li>Payment or donation information where applicable; such transactions are processed by a third-party payment processor, and Comet Foundry does not collect or store full payment card details</li>
  </ul>
  <p>Membership applications, officer applications, and event RSVPs are collected through Microsoft Forms rather than directly on the Site; see Section 3.4 for the full list of third-party service providers Comet Foundry uses.</p>
  <p><strong>3.2 Information Collected Automatically</strong></p>
  <p>The Site uses Vercel Web Analytics, a privacy-focused analytics service that does not use cookies and does not collect personally identifiable information. It records aggregate, anonymized usage data such as page views, referrer, and general geographic region (country/region level) to help us understand how the Site is used. Comet Foundry does not use any other analytics or advertising-tracking software.</p>
  <p><strong>3.3 Information from Third Parties</strong></p>
  <p>Publicly available professional information (for example, from LinkedIn) that a member voluntarily elects to include in an organizational directory or mentorship profile.</p>
  <p><strong>3.4 Third-Party Service Providers</strong></p>
  <p>Comet Foundry uses the following third-party services to operate the Site and process the information described above. Each processes information under its own privacy policy and terms:</p>
  <ul>
    <li><strong>Microsoft Forms</strong> — processes membership and officer applications, event RSVPs, and partner inquiry submissions.</li>
    <li><strong>Resend</strong> — delivers the email generated when someone submits the "Join The Foundry" email sign-up on the Site.</li>
    <li><strong>Vercel</strong> — hosts the Site and provides the Web Analytics service described in Section 3.2.</li>
  </ul>

  <h2>4. How We Use Information</h2>
  <ul>
    <li>To administer membership records, officer elections, and organizational operations</li>
    <li>To communicate about events, workshops, mentorship, and internship opportunities</li>
    <li>To coordinate mentorship and internship-pipeline activities with our founding Industry Partner, Resilient Privacy Inc., limited strictly to members who affirmatively opt in</li>
    <li>To respond to inquiries and maintain the security of the Site</li>
  </ul>
  <p>Comet Foundry does not use personal information for automated decision-making with legal or similarly significant effects.</p>

  <h2>5. Disclosure of Information</h2>
  <p>Comet Foundry does not sell personal information. Information may be disclosed only as follows:</p>
  <table class="legal-table">
    <thead><tr><th>Recipient</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td>Resilient Privacy Inc. (Industry Partner)</td><td>Mentorship coordination and internship referrals, limited to opted-in members</td></tr>
      <tr><td>Operational service providers</td><td>Email delivery, form processing, and hosting, under confidentiality obligations</td></tr>
      <tr><td>Legal authorities</td><td>Where required by law, subpoena, or court order, or to protect the rights or safety of Comet Foundry, its members, or others</td></tr>
    </tbody>
  </table>
  <p>Resilient Privacy Inc. holds a non-voting, advisory role within Comet Foundry's governance structure and has no standing access to member information beyond programs a member has voluntarily joined.</p>

  <h2>6. Data Retention</h2>
  <p>Information is retained only as long as reasonably necessary for the purposes described in this Policy or as required by law. Information relating to inactive members is archived or deleted within a reasonable period following the end of active involvement.</p>

  <h2>7. Data Security</h2>
  <p>Comet Foundry implements reasonable administrative and technical safeguards to protect information against unauthorized access, use, or disclosure. No method of electronic storage or transmission is completely secure, and Comet Foundry cannot guarantee absolute security.</p>

  <h2>8. Your Rights and Choices</h2>
  <ul>
    <li>Request access to, correction of, or deletion of your personal information</li>
    <li>Opt out of non-essential communications at any time</li>
    <li>Withdraw consent to having your information shared with Resilient Privacy Inc. without affecting your underlying membership</li>
  </ul>
  <p>Requests may be submitted to security@cometfoundry.com.</p>

  <h2>9. Children's Privacy</h2>
  <p>The Services are not directed at children under 13, and Comet Foundry does not knowingly collect information from children under 13.</p>

  <h2>10. Third-Party Links</h2>
  <p>The Site may link to third-party websites. Comet Foundry is not responsible for the privacy practices of any linked third-party site.</p>

  <h2>11. Changes to This Policy</h2>
  <p>Comet Foundry may revise this Policy from time to time. Material changes will be posted on this page with a revised "Last Updated" date. Continued use of the Services constitutes acceptance of the revised Policy.</p>

  <div class="legal-contact">
    Comet Foundry<br>The University of Texas at Dallas<br>security@cometfoundry.com
  </div>
`;

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effective="EFFECTIVE DATE: AUGUST 1, 2026 &nbsp;|&nbsp; LAST UPDATED: AUGUST 1, 2026"
      bodyHtml={bodyHtml}
    />
  );
}
