import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/cookie-policy',
  ogTitle: 'Cookie and Tracking Technologies Policy — Comet Foundry',
  description: 'Learn how Comet Foundry uses cookies and tracking technologies. We use Vercel Web Analytics, a cookieless measurement tool, to understand traffic on our site.',
});

export default function CookiePolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Cookie Policy</div>
          <h1>Cookie and Tracking Technologies Policy</h1>
          <p className="lede">Effective Date: August 1, 2026</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="legal-body">
            <p>
              This Cookie and Tracking Technologies Policy ("Policy") describes how Comet Foundry ("Comet Foundry," "we," "us," or "our") uses cookies and similar tracking technologies in connection with cometfoundry.com and related digital properties (the "Site"). This Policy forms part of, and should be read together with, our <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>

            <h2>1. Overview</h2>
            <p>
              Comet Foundry's own analytics on the Site do not rely on cookies. We use Vercel Web Analytics, a cookieless measurement tool, to understand aggregate traffic on the Site. Certain third-party services embedded within the Site, including Microsoft Forms and GoFundMe, operate under their own tracking practices and may set cookies independently of Comet Foundry. Sections 2 and 3 of this Policy address each in turn.
            </p>

            <h2>2. Site Analytics: Vercel Web Analytics</h2>
            <p>
              Comet Foundry uses Vercel Web Analytics to measure aggregate usage of the Site, including page views, referring sources, general geographic region, and device type.
            </p>
            <ul>
              <li><strong>No cookies are set.</strong> Visitors are identified using a temporary, non-persistent hash derived from the incoming request rather than a stored identifier.</li>
              <li><strong>No cross-site tracking is performed.</strong> Vercel Web Analytics does not employ persistent identifiers capable of tracking visitors across other websites or applications.</li>
              <li><strong>Data has a short retention period.</strong> Session-level data is automatically discarded within approximately twenty-four hours.</li>
              <li><strong>Data is aggregated.</strong> Comet Foundry receives and reviews this information in aggregate form only; it is not used to construct individual visitor profiles.</li>
            </ul>
            <p>
              Because this method does not involve cookies or persistent tracking, a cookie consent banner is not required for this analytics tool under most current regulatory guidance. Should Comet Foundry adopt Google Analytics or a comparable cookie-based analytics tool in the future, this Policy will be updated accordingly and an appropriate consent mechanism will be implemented prior to deployment.
            </p>

            <h2>3. Embedded Third-Party Services</h2>
            <p>
              Certain pages on the Site incorporate third-party services that operate under their own privacy and cookie practices. Comet Foundry does not control, and is not responsible for, the data collection practices of these third parties. These services include the following.
            </p>

            <h3>3.1 Microsoft Forms</h3>
            <p>
              Officer applications, the builder interest form, and campus chapter applications are built using Microsoft Forms and embedded directly within Site pages. Because these forms are rendered within our pages rather than accessed through an external link, Microsoft may set cookies on a visitor's device upon page load, in accordance with Microsoft's own policies. Further detail is available in the <a href="https://privacy.microsoft.com" target="_blank" rel="noopener">Microsoft Privacy Statement</a>.
            </p>

            <h3>3.2 GoFundMe</h3>
            <p>
              Comet Foundry's donation page is hosted on GoFundMe. Visitors who access or contribute through GoFundMe may have cookies set by GoFundMe and its payment processors for purposes including transaction processing, fraud prevention, and platform analytics, in accordance with GoFundMe's Privacy Policy and Cookie Policy.
            </p>
            <p>
              Comet Foundry does not receive, control, or have access to cookies set by these third parties. Any data collected through these embedded services is governed exclusively by the applicable third party's own privacy and cookie policies.
            </p>

            <h2>4. Summary Table</h2>
            <table className="legal-table">
              <thead>
                <tr>
                  <th>Technology</th>
                  <th>Type</th>
                  <th>Purpose</th>
                  <th>Cookies</th>
                  <th>Controlled By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vercel Web Analytics</td>
                  <td>Site analytics</td>
                  <td>Aggregate traffic measurement</td>
                  <td>None; cookieless hash</td>
                  <td>Comet Foundry / Vercel</td>
                </tr>
                <tr>
                  <td>Microsoft Forms (embedded)</td>
                  <td>Third-party form</td>
                  <td>Application and interest form submissions</td>
                  <td>Yes, set by Microsoft on page load</td>
                  <td>Microsoft</td>
                </tr>
                <tr>
                  <td>GoFundMe (embedded or linked)</td>
                  <td>Third-party donation platform</td>
                  <td>Donation processing</td>
                  <td>Yes, set by GoFundMe</td>
                  <td>GoFundMe</td>
                </tr>
              </tbody>
            </table>

            <h2>5. Managing Cookies</h2>
            <ul>
              <li><strong>Because Comet Foundry's own analytics are cookieless,</strong> there is no Comet Foundry-set cookie for visitors to manage or decline.</li>
              <li><strong>To limit cookies associated with Microsoft Forms or GoFundMe,</strong> visitors may adjust their browser's cookie and privacy settings or consult those providers' respective cookie-management tools.</li>
              <li><strong>Most browsers allow cookies to be blocked or deleted</strong> through their settings menu. Visitors should be aware that restricting cookies on third-party platforms may impair the ability to submit forms or complete donations.</li>
            </ul>

            <h2>6. Changes to This Policy</h2>
            <p>
              This Policy may be updated periodically to reflect changes in the tools Comet Foundry uses, including the potential future adoption of Google Analytics or another cookie-based service. Material changes will be reflected by an updated "Effective Date" above. Continued use of the Site following such changes constitutes acceptance of the revised Policy.
            </p>

            <h2>7. Contact Us</h2>
            <p>Questions regarding this Policy may be directed to:</p>
            <ul>
              <li>Email: <a href="mailto:security@cometfoundry.com">security@cometfoundry.com</a></li>
              <li>Website: <a href="https://www.cometfoundry.com">cometfoundry.com</a></li>
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
