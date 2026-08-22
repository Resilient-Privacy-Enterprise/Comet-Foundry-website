import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/ip-trademark-policy',
  ogTitle: 'Intellectual Property and Trademark Policy — Comet Foundry',
  description: 'Comet Foundry Intellectual Property and Trademark Policy. Clarifies ownership of the Comet Foundry marks and student work created through our programs.',
});

export default function IpTrademarkPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / IP and Trademark Policy</div>
          <h1>Intellectual Property and Trademark Policy</h1>
          <p className="lede">Effective Date: August 1, 2026</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="legal-body">
            <p>
              This Intellectual Property and Trademark Policy ("Policy") describes ownership and permitted use of Comet Foundry's name, marks, and other intellectual property, and clarifies ownership of work created by students who participate in Comet Foundry's programs. This Policy applies to Comet Foundry ("Comet Foundry," "we," "us," or "our"), its officers, members, campus chapters, and other participants (collectively, "Participants").
            </p>

            <h2>1. Comet Foundry Marks</h2>
            <p>
              The name "Comet Foundry," the tagline "Seeding the next generation of Innovators, Founders, and Creators," and Comet Foundry's associated logos, wordmarks, and visual branding (collectively, the "Marks") are the property of Comet Foundry. Use of the Marks, whether by Participants, campus chapters, or third parties, is governed by this Policy.
            </p>
            <p>
              Nothing in this Policy transfers ownership of the Marks to any officer, member, chapter, or other individual or entity. Comet Foundry's advisory Industry Partner and any other outside collaborator likewise acquire no ownership interest in the Marks through their advisory or collaborative role.
            </p>

            <h2>2. Permitted Use by Officers and Members</h2>
            <p>
              Current officers and members may use the Marks in connection with authorized Comet Foundry activities, including event promotion, recruitment, and official communications, provided such use:
            </p>
            <ul>
              <li>Accurately represents Comet Foundry and does not imply an endorsement, partnership, or affiliation that does not exist.</li>
              <li>Follows any visual identity or style guidance issued by Comet Foundry leadership.</li>
              <li>Ceases upon the individual's departure from their officer or member role, except for accurate historical references (for example, a resume or portfolio entry describing past involvement).</li>
            </ul>

            <h2>3. Campus Chapters</h2>
            <p>
              Campus chapters established through Comet Foundry's chapter application process are granted a limited, non-exclusive, revocable license to use the Marks solely in connection with operating as an official Comet Foundry chapter, subject to any chapter agreement, charter terms, or brand guidelines issued by Comet Foundry. This license does not permit a chapter to modify the Marks, to register the Marks or confusingly similar marks in its own name, or to use the Marks in a manner inconsistent with Comet Foundry's mission or this Policy. The license terminates automatically if a chapter ceases to be recognized as an official Comet Foundry chapter.
            </p>

            <h2>4. Third-Party and Sponsor Use</h2>
            <p>
              Third parties, including sponsors, advisors, and Comet Foundry's advisory Industry Partner, may reference their relationship with Comet Foundry accurately and factually, for example describing an advisory or sponsorship role. Any use of the Marks by a third party beyond factual reference, including in logos, marketing materials, or co-branding, requires prior written approval from Comet Foundry leadership.
            </p>

            <h2>5. Ownership of Student and Builder Work</h2>
            <p>
              Comet Foundry's programs are designed to support students in building their own projects, ventures, and ideas. Except as expressly and separately agreed in writing:
            </p>
            <ul>
              <li>Students and builders <strong>retain full ownership</strong> of the intellectual property they create through their own projects, ventures, and ideas developed while participating in Comet Foundry programs, including code, designs, business concepts, and other original work product.</li>
              <li><strong>Comet Foundry does not claim</strong> any ownership interest, license, or right of first refusal in a builder's independent project or venture simply because it was developed, discussed, or supported through Comet Foundry's programs, space, mentorship, or resources.</li>
              <li><strong>This Section does not apply</strong> to the Marks described in Section 1, to Comet Foundry's own organizational materials (such as its governing documents, README, or internal templates), or to any work a Participant is separately engaged to create specifically for Comet Foundry as an organization, which remains Comet Foundry's property unless otherwise agreed.</li>
            </ul>

            <h2>6. License to Comet Foundry for Promotional Use</h2>
            <p>
              By participating in Comet Foundry programs and events, Participants grant Comet Foundry a limited, non-exclusive, royalty-free license to use their name, likeness, project name, and a general description of their work for reasonable promotional and organizational purposes, such as event recaps, newsletters, the Site, and social media, unless the Participant notifies Comet Foundry in writing that they decline this use. This license does not extend to a Participant's underlying proprietary code, confidential business information, or trade secrets beyond what the Participant has voluntarily made public.
            </p>

            <h2>7. Third-Party and Open-Source Content</h2>
            <p>
              Comet Foundry's own materials, including its GitHub repository, README, and public documentation, may incorporate open-source software, fonts, or other third-party content used under their respective licenses. Use of such third-party content is governed by the applicable third-party license, not by this Policy, and nothing in this Policy expands or restricts those separate license terms.
            </p>

            <h2>8. Reporting Misuse</h2>
            <p>
              If you become aware of unauthorized or improper use of the Marks, or have questions about permitted use, please contact us at:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:legal@cometfoundry.com">legal@cometfoundry.com</a></li>
              <li><strong>Subject Line:</strong> Trademark or IP Inquiry</li>
              <li><strong>Website:</strong> <a href="https://www.cometfoundry.com">cometfoundry.com</a></li>
            </ul>

            <h2>9. Enforcement</h2>
            <p>
              Comet Foundry reserves the right to request that any unauthorized or non-compliant use of the Marks be corrected or discontinued, and to take any lawful action reasonably necessary to protect the integrity of the Marks and Comet Foundry's reputation, consistent with Comet Foundry's status as a nonprofit organization focused on student benefit rather than commercial enforcement.
            </p>

            <h2>10. Relationship to Other Comet Foundry Policies</h2>
            <p>
              This Policy works together with Comet Foundry's Constitution and Bylaws, <Link href="/terms-of-use">Terms of Use</Link>, and <Link href="/copyright-dmca-policy">Copyright and DMCA Notice Policy</Link>. In the event of a conflict specific to ownership or use of the Marks or Participant work product, this Policy controls.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              Comet Foundry may update this Policy from time to time. Material changes will be reflected by an updated "Effective Date" above.
            </p>

            <div className="legal-contact">
              © 2026 Comet Foundry. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
