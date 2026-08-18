import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  path: '/donation-refund-policy',
  ogTitle: 'Donation and Refund Policy — Comet Foundry',
  description: 'Comet Foundry Donation and Refund Policy. Learn about how donations are processed, refund procedures, and tax-exempt status.',
});

export default function DonationRefundPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Donation and Refund Policy</div>
          <h1>Donation and Refund Policy</h1>
          <p className="lede">Effective Date: August 1, 2026</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="legal-body">
            <p>
              This Donation and Refund Policy ("Policy") governs monetary contributions ("Donations") made to Comet Foundry ("Comet Foundry," "we," "us," or "our") through donation channels linked from or embedded on cometfoundry.com (the "Site"), currently including GoFundMe and Stripe. By making a Donation, you acknowledge and agree to the terms below.
            </p>

            <h2>1. Donation Platforms</h2>
            <p>
              Donations are processed through one or more of the following third-party platforms, none of which are owned or operated by Comet Foundry:
            </p>
            <ul>
              <li><strong>GoFundMe,</strong> together with its designated payment processor, for crowdfunding-style donations.</li>
              <li><strong>Stripe,</strong> for direct card and online payment processing on or linked from the Site.</li>
            </ul>
            <p>
              Each platform handles the collection, processing, and initial custody of Donation funds made through it. Use of GoFundMe or Stripe is subject to that platform's own Terms of Service, Privacy Policy, and applicable transaction fees, none of which are controlled by Comet Foundry.
            </p>
            <ul>
              <li><strong>Comet Foundry does not directly receive, store, or process payment card or bank account information</strong> submitted through GoFundMe or Stripe.</li>
              <li><strong>GoFundMe, Stripe, and their respective payment processors may deduct platform and payment processing fees</strong> from each Donation prior to disbursement to Comet Foundry.</li>
              <li><strong>Availability, uptime, and functionality</strong> of the GoFundMe and Stripe platforms are outside Comet Foundry's control.</li>
            </ul>

            <h2>2. Tax-Deductibility Disclosure</h2>
            <p>
              Comet Foundry is in the process of pursuing federal tax-exempt status as a 501(c)(3) organization. As of the Effective Date of this Policy, Comet Foundry has not yet received a determination letter from the Internal Revenue Service confirming such status.
            </p>
            <ul>
              <li><strong>Donations made prior to receipt of an IRS determination letter are not tax-deductible</strong> as charitable contributions.</li>
              <li><strong>Comet Foundry does not guarantee</strong> that 501(c)(3) status will be granted, nor a timeline for any such determination.</li>
              <li><strong>If and when Comet Foundry receives its IRS determination letter,</strong> this Policy will be updated to reflect the effective date of tax-exempt status. Any retroactive deductibility of prior Donations, if applicable under IRS rules, will be addressed separately and is not assured by this Policy.</li>
              <li><strong>Donors are solely responsible</strong> for determining the tax treatment of their Donations and are encouraged to consult a qualified tax advisor.</li>
            </ul>
            <p>
              Comet Foundry will not issue tax-deductibility receipts or acknowledgment letters representing Donations as deductible charitable contributions until 501(c)(3) status has been confirmed by the IRS.
            </p>

            <h2>3. Use of Donated Funds</h2>
            <p>
              Donations support Comet Foundry's mission and general operations, including but not limited to programming, events, materials, and administrative costs associated with its activities as a UT Dallas student organization and as an independent nonprofit initiative. Comet Foundry retains discretion over the specific allocation of Donations and does not guarantee that funds will be applied to any particular program, event, or purpose unless expressly stated in a specific fundraising campaign.
            </p>

            <h2>4. Refund Policy</h2>
            <p>
              All Donations to Comet Foundry are voluntary and, except as described in this section, are non-refundable.
            </p>
            <ul>
              <li><strong>Erroneous or duplicate transactions.</strong> If you believe a Donation was made in error, was duplicated, or resulted from unauthorized use of your payment method, contact us promptly using the information in Section 12 below. We will work in good faith with GoFundMe or Stripe and, where applicable, the relevant payment processor to review and, if warranted, request a refund.</li>
              <li><strong>Platform-level disputes.</strong> Refund requests, chargebacks, and payment disputes may also be subject to GoFundMe's or Stripe's own refund policies and procedures, which operate independently of Comet Foundry and may govern the ultimate outcome of a request.</li>
              <li><strong>Processing fees.</strong> Where a refund is approved, any payment processing or platform fees already deducted by GoFundMe, Stripe, or their payment processors may not be recoverable and, if so, will not be refunded by Comet Foundry.</li>
              <li><strong>Discretionary refunds.</strong> Outside of the circumstances above, Comet Foundry is under no obligation to issue a refund for a voluntary Donation and will evaluate any other refund request on a case-by-case basis at its sole discretion.</li>
            </ul>

            <h2>5. No Goods or Services Provided</h2>
            <p>
              Except where expressly stated as part of a specific campaign (for example, a ticketed event or merchandise sale), Donations are made without the expectation of goods, services, or other consideration in return.
            </p>

            <h2>6. No Warranty</h2>
            <p>
              Donation channels, including GoFundMe and Stripe, are provided "as is" and "as available." Comet Foundry makes no warranty, express or implied, regarding the availability, security, or uninterrupted operation of any donation platform, and disclaims all warranties to the fullest extent permitted by law, including any implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Comet Foundry, its officers, directors, members, and volunteers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of funds, data, or goodwill, arising out of or related to a Donation, the use of any donation platform, or this Policy, regardless of the theory of liability, even if Comet Foundry has been advised of the possibility of such damages. To the extent any liability is not excludable under applicable law, Comet Foundry's aggregate liability arising out of or related to a Donation shall not exceed the amount of that Donation.
            </p>

            <h2>8. Indemnification</h2>
            <p>
              By making a Donation, you agree to indemnify, defend, and hold harmless Comet Foundry, its officers, directors, members, and volunteers from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your Donation, your use of a third-party donation platform, or your breach of this Policy, except to the extent caused by Comet Foundry's own gross negligence or willful misconduct.
            </p>

            <h2>9. Assumption of Risk</h2>
            <p>
              You acknowledge that Donations are made voluntarily and at your own discretion, and that Comet Foundry cannot guarantee the security practices, fee structures, or continued availability of third-party donation platforms. You assume all risk associated with using such platforms to make a Donation.
            </p>

            <h2>10. Governing Law and Severability</h2>
            <p>
              This Policy is governed by the laws of the State of Texas, without regard to its conflict-of-laws principles, and without prejudice to any mandatory consumer-protection laws that may apply in your jurisdiction. If any provision of this Policy is found unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>

            <h2>11. Relationship to Other Policies</h2>
            <p>
              This Policy supplements, and does not replace, Comet Foundry's general Disclaimer, <Link href="/terms-of-use">Terms of Use</Link>, and <Link href="/privacy-policy">Privacy Policy</Link>, each of which contains additional protective terms, including broader limitation of liability and indemnification provisions applicable to Comet Foundry's activities generally. In the event of a conflict specific to Donations, this Policy controls.
            </p>

            <h2>12. Contact Us</h2>
            <p>Questions regarding this Policy, or requests related to a specific Donation, may be directed to:</p>
            <ul>
              <li>Email: <a href="mailto:security@cometfoundry.com">security@cometfoundry.com</a></li>
              <li>Website: <a href="https://www.cometfoundry.com">cometfoundry.com</a></li>
            </ul>

            <h2>13. Changes to This Policy</h2>
            <p>
              Comet Foundry may update this Policy from time to time, including to reflect a change in tax-exempt status or donation platforms. Material changes will be reflected by an updated "Effective Date" above. Continued use of Comet Foundry's donation channels following such changes constitutes acceptance of the revised Policy.
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
