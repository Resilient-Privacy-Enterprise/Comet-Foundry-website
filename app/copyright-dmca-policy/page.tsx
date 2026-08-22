import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/copyright-dmca-policy',
  ogTitle: 'Copyright and DMCA Notice Policy — Comet Foundry',
  description: 'Comet Foundry Copyright and DMCA Notice Policy. Learn how to report copyright concerns and our process for handling takedown requests.',
});

export default function CopyrightDmcaPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Copyright and DMCA Policy</div>
          <h1>Copyright and DMCA Notice Policy</h1>
          <p className="lede">Effective Date: August 1, 2026</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="legal-body">
            <p>
              Comet Foundry ("Comet Foundry," "we," "us," or "our") is a student-benefit nonprofit initiative, and we have no interest in using, retaining, or disputing anyone else's copyrighted material. If content on cometfoundry.com or related digital properties (the "Site") includes something you believe infringes your copyright, our default response is to remove it promptly, not to contest the claim. This Copyright and DMCA Notice Policy ("Policy") explains how to reach us and what happens once you do.
            </p>

            <h2>1. Our Approach</h2>
            <p>
              Comet Foundry exists to support and benefit students, not to profit from or fight over third-party content. If you notify us in good faith that something on the Site belongs to you and shouldn't be there, we will take it down. You do not need to hire a lawyer, cite statutes, or prepare a formal filing to get our attention; a clear, good-faith email describing the material and where it appears is enough for us to act.
            </p>
            <p>
              The formal notice elements in Section 2 below exist because the Digital Millennium Copyright Act ("DMCA") asks for them to keep the process fair and unambiguous for everyone. They are not a barrier meant to slow things down, and we will not withhold a takedown simply because a notice is informal.
            </p>

            <h2>2. How to Notify Us</h2>
            <p>
              To help us identify and remove the right material quickly, please include the following in your message where possible:
            </p>
            <ol>
              <li>Your name and contact information (email is sufficient).</li>
              <li>A description of the copyrighted work you believe is being used without authorization.</li>
              <li>The specific location of the material on the Site (a URL or clear description of the page).</li>
              <li>A brief statement that you believe, in good faith, that the use is not authorized by you, your agent, or the law.</li>
            </ol>
            <p>
              If you are submitting a formal notice under 17 U.S.C. Section 512(c)(3), it should also include a physical or electronic signature and a statement, made under penalty of perjury, that the information provided is accurate and that you are authorized to act on behalf of the copyright owner. We are happy to work with informal reports as well; the formal elements simply ensure we are both protected if a dispute were ever to arise.
            </p>

            <h2>3. What Happens Next</h2>
            <p>
              Once we receive your notice, we will:
            </p>
            <ul>
              <li><strong>Acknowledge receipt</strong> within two business days.</li>
              <li><strong>Review the material promptly</strong> and, where the claim is reasonably clear, remove or disable access to it, generally within five business days of acknowledgment.</li>
              <li><strong>Reach out to whoever posted the material,</strong> where practicable, to let them know it was removed and why.</li>
              <li><strong>Confirm with you</strong> once the material has been addressed.</li>
            </ul>
            <p>
              Because Comet Foundry does not seek to retain disputed content, we generally expect this process to resolve quickly and without the need for formal legal proceedings on either side. If a claim is unclear or appears to involve a genuine dispute between two other parties, we may ask follow-up questions before acting.
            </p>

            <h2>4. If You Posted the Removed Material</h2>
            <p>
              If material you posted is removed and you believe this was a mistake, for example because you hold the rights or your use was clearly permitted, you're welcome to reach out and explain. We would rather talk it through informally. If a more formal counter-notification under 17 U.S.C. Section 512(g) is ever needed, we will work with you on that process as well.
            </p>

            <h2>5. Ongoing Use of the Site</h2>
            <p>
              Comet Foundry asks members, officers, and contributors to only post or submit content they have the right to use. Repeated or knowing misuse of others' copyrighted material may affect someone's continued involvement with Comet Foundry, consistent with our broader <Link href="/terms-of-use">Terms of Use</Link>, which this Policy supplements and does not replace.
            </p>

            <h2>6. Designated Agent and Contact</h2>
            <p>
              The fastest way to reach us about a copyright concern is:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:legal@cometfoundry.com">legal@cometfoundry.com</a></li>
              <li><strong>Subject Line:</strong> Copyright Concern</li>
              <li><strong>Website:</strong> <a href="https://www.cometfoundry.com">cometfoundry.com</a></li>
            </ul>
            <p>
              We aim to respond promptly, as described in Section 3. This contact is intended specifically for copyright-related matters; general inquiries can be directed through the Site's other contact channels. Comet Foundry intends to register a designated agent with the U.S. Copyright Office's DMCA agent directory as part of its ongoing nonprofit formation, and will update this Policy with that registration once complete.
            </p>

            <h2>7. No Legal Advice</h2>
            <p>
              This Policy is provided for general information and reflects how Comet Foundry intends to handle copyright concerns in practice. It is not legal advice, and nothing here limits either party's rights under applicable law.
            </p>

            <h2>8. Changes to This Policy</h2>
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
