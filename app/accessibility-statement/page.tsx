import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/accessibility-statement',
  ogTitle: 'Accessibility Statement — Comet Foundry',
  description: 'Comet Foundry Accessibility Statement. Our commitment to making the site accessible to all users, including those with disabilities.',
});

export default function AccessibilityStatementPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Accessibility Statement</div>
          <h1>Accessibility Statement</h1>
          <p className="lede">Effective Date: August 1, 2026</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="legal-body">
            <p>
              Comet Foundry ("Comet Foundry," "we," "us," or "our") is committed to making cometfoundry.com and related digital properties (the "Site") accessible to the widest possible audience, including students, prospective members, and visitors with disabilities. This Accessibility Statement describes our commitment, our current approach, and how to reach us with feedback or difficulties.
            </p>

            <h2>1. Our Commitment</h2>
            <p>
              Comet Foundry strives to design and maintain the Site in a manner consistent with the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, published by the World Wide Web Consortium (W3C). These guidelines explain how to make web content more accessible to people with a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.
            </p>
            <p>
              As a student-led organization, we recognize that accessibility is an ongoing effort rather than a one-time achievement, and we work to improve the Site's accessibility on a continuing basis as it evolves.
            </p>

            <h2>2. Measures We Take</h2>
            <p>
              Comet Foundry takes the following measures to support accessibility of the Site:
            </p>
            <ul>
              <li>Structuring pages with semantic HTML and clear heading hierarchies to support screen readers and other assistive technologies.</li>
              <li>Providing text alternatives for meaningful non-text content, such as logos and images, where practicable.</li>
              <li>Maintaining sufficient color contrast between text and background elements.</li>
              <li>Ensuring interactive elements, including links, buttons, and forms, are operable using a keyboard.</li>
              <li>Using descriptive link text rather than generic phrases such as "click here."</li>
              <li>Reviewing new pages and features for accessibility considerations as they are built.</li>
            </ul>

            <h2>3. Known Limitations</h2>
            <p>
              Despite our efforts, some areas of the Site may not yet be fully accessible. Known limitations may include:
            </p>
            <ul>
              <li><strong>Third-party embedded content,</strong> such as Microsoft Forms, GoFundMe, and Stripe checkout flows, which are hosted and controlled by those third parties and subject to their own accessibility practices, not Comet Foundry's.</li>
              <li><strong>Older or archived content</strong> that has not yet been reviewed against current accessibility standards.</li>
              <li><strong>Custom visual styling elements,</strong> such as decorative headers, which we work to ensure do not interfere with the readability of underlying content.</li>
            </ul>
            <p>
              We are actively working to address known limitations and welcome reports of specific accessibility barriers so we can prioritize fixes.
            </p>

            <h2>4. Third-Party Content and Platforms</h2>
            <p>
              Portions of the Site link to or embed third-party platforms, including Microsoft Forms, GoFundMe, Stripe, and GitHub. These platforms are operated independently of Comet Foundry, and their accessibility is governed by their own policies and practices. We encourage visitors experiencing difficulty with a third-party platform to also reach out to that provider directly, in addition to letting us know.
            </p>

            <h2>5. Feedback and Assistance</h2>
            <p>
              We welcome feedback on the accessibility of the Site. If you encounter a barrier, have difficulty accessing any content or feature, or need information in an alternative format, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:legal@cometfoundry.com">legal@cometfoundry.com</a></li>
              <li><strong>Subject Line:</strong> Accessibility Feedback</li>
              <li><strong>Website:</strong> <a href="https://www.cometfoundry.com">cometfoundry.com</a></li>
            </ul>
            <p>
              Please include the web page and a description of the issue you encountered where possible, so we can address it as quickly as we're able to. We aim to respond to accessibility feedback promptly and will make reasonable efforts to provide the information or functionality you need through an alternative means while any underlying issue is resolved.
            </p>

            <h2>6. No Warranty of Full Compliance</h2>
            <p>
              While Comet Foundry is committed to the goals described in this Statement, we cannot guarantee that the Site will be fully accessible or fully compliant with WCAG 2.1 Level AA or any other standard at all times, particularly given the Site's reliance on third-party platforms outside our control. This Statement reflects our ongoing commitment and current practices, not a certification of compliance.
            </p>

            <h2>7. Changes to This Statement</h2>
            <p>
              Comet Foundry may update this Statement from time to time as the Site evolves and as our accessibility practices improve. Material changes will be reflected by an updated "Effective Date" above.
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
