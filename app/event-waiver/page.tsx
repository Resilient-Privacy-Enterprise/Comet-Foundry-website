import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/event-waiver',
  ogTitle: 'Event Waiver and Photo/Video Consent — Comet Foundry',
  description: 'Comet Foundry Event Waiver, Release, and Photo/Video Consent Notice. Learn about event participation, liability, and media usage policies.',
});

export default function EventWaiverPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Event Waiver</div>
          <h1>Event Waiver, Release, and Photo/Video Consent Notice</h1>
          <p className="lede">Effective Date: August 1, 2026</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="legal-body">
            <p>
              This Event Waiver, Release, and Photo/Video Consent Notice (&quot;Notice&quot;) applies to anyone who attends or participates in an in-person or hybrid event, workshop, hackathon, or other activity organized or co-organized by Comet Foundry (&quot;Comet Foundry,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) (each, an &quot;Event&quot;). By attending or participating in an Event, you acknowledge that you have read and agree to this Notice.
            </p>

            <h2>1. Voluntary Participation and Assumption of Risk</h2>
            <p>
              Participation in Comet Foundry Events is voluntary. You acknowledge that activities at an Event, including travel to and from the venue, use of shared workspaces or equipment, and general event activity, may carry inherent risks. You voluntarily assume all such risks and participate at your own discretion.
            </p>

            <h2>2. Release and Waiver of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, you release, waive, and discharge Comet Foundry, its officers, directors, members, and volunteers from any and all liability, claims, demands, or causes of action arising out of or related to your participation in an Event, including claims for personal injury, property damage, or loss, except to the extent caused by Comet Foundry&apos;s own gross negligence or willful misconduct. This release does not apply to any rights that cannot be waived under applicable law.
            </p>

            <h2>3. Photo and Video Consent</h2>
            <p>
              Comet Foundry, its officers, and its authorized photographers or volunteers may take photographs, video, and audio recordings at Events (&quot;Media&quot;). By attending or participating in an Event, you consent to being photographed, filmed, or recorded, and you agree that Comet Foundry may use, reproduce, edit, and publish that Media, including your image, likeness, and voice as captured in it, without further notice, compensation, or the need to obtain your separate or individual consent for each use.
            </p>
            <p>
              Media may be used by Comet Foundry for reasonable organizational and promotional purposes, including but not limited to:
            </p>
            <ul>
              <li>The Site (cometfoundry.com) and Comet Foundry&apos;s social media accounts.</li>
              <li>Newsletters, recap posts, and event summaries.</li>
              <li>Materials used for recruitment, fundraising, sponsor reporting, and nonprofit program documentation.</li>
              <li>Presentations to UT Dallas, the Student Organization Center, prospective campus chapters, or Comet Foundry&apos;s advisory Industry Partner.</li>
            </ul>
            <p>
              If you prefer not to appear in Media, you may notify event staff on-site before or during the Event, or contact us in advance using the information in Section 6, and we will make reasonable efforts to accommodate your preference, such as excluding you from posed photographs. Because Events involve general photography and recording of the space, Comet Foundry cannot guarantee exclusion from incidental or background appearances in Media, and attendance at an Event after this Notice has been made available constitutes consent to the terms of this Section unless you have separately opted out in advance.
            </p>

            <h2>4. No Compensation</h2>
            <p>
              You acknowledge that no payment, royalty, or other compensation is owed to you for Comet Foundry&apos;s use of Media in which you appear, and that this Notice constitutes your full consent under applicable publicity and privacy laws to the extent such consent is required.
            </p>

            <h2>5. Indemnification</h2>
            <p>
              By attending or participating in an Event, you agree to indemnify and hold harmless Comet Foundry, its officers, directors, members, and volunteers from any claims, liabilities, damages, or expenses, including reasonable attorneys&apos; fees, arising out of your conduct at an Event or your breach of this Notice, except to the extent caused by Comet Foundry&apos;s own gross negligence or willful misconduct.
            </p>

            <h2>6. Minors</h2>
            <p>
              Comet Foundry Events are generally intended for university students and eligible participants. If a minor is permitted to attend an Event, a parent or legal guardian must review and accept this Notice, including the photo and video consent in Section 3, on the minor&apos;s behalf prior to the minor&apos;s participation.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              This Notice is governed by the laws of the State of Texas, without regard to its conflict-of-laws principles, and without prejudice to any mandatory consumer-protection laws that may apply in your jurisdiction.
            </p>

            <h2>8. Relationship to Other Comet Foundry Policies</h2>
            <p>
              This Notice supplements, and does not replace, Comet Foundry&apos;s Disclaimer, <Link href="/terms-of-use">Terms of Use</Link>, <Link href="/privacy-policy">Privacy Policy</Link>, and <Link href="/code-of-conduct">Code of Conduct</Link>, each of which contains additional applicable terms. In the event of a conflict specific to Event participation or Media consent, this Notice controls.
            </p>

            <h2>9. Contact Us</h2>
            <p>Questions about this Notice, or requests to opt out of photo or video use, may be directed to:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:legal@cometfoundry.com">legal@cometfoundry.com</a></li>
              <li><strong>Subject Line:</strong> Event Waiver or Media Consent</li>
              <li><strong>Website:</strong> <a href="https://www.cometfoundry.com">cometfoundry.com</a></li>
            </ul>

            <h2>10. Changes to This Notice</h2>
            <p>
              Comet Foundry may update this Notice from time to time. Material changes will be reflected by an updated &quot;Effective Date&quot; above. Continued attendance at Events following such changes constitutes acceptance of the revised Notice.
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
