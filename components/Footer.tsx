import Image from 'next/image';
import Link from 'next/link';

const APPLY_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=HR0ojU2c90uxbgMtFd6fbIhHjy7i2rpHt7VcaeT3yedUMkQwTTU4TkpUNFczMVQzS0cwUUVaWEw0WC4u&route=shorturl&b2b=true';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/assets/comet-foundry-logo.png" alt="Comet Foundry" className="footer-logo" width={400} height={357} />
            <h4>Comet Foundry</h4>
            <p className="footer-brand-line">Building the largest founder movement on college campuses.</p>
            <p className="footer-brand-line hand">Someone had to try. :)</p>
          </div>
          <div className="footer-links">
            <div>
              <h5>Explore</h5>
              <ul>
                <li><Link href="/mission/why">Why We Exist</Link></li>
                <li><Link href="/programs">The Labs</Link></li>
                <li><Link href="/builds">Builds In Progress</Link></li>
                <li><Link href="/leadership">Foundation Leadership</Link></li>
                <li><Link href="/backers">The Backers</Link></li>
                <li><Link href="/donate">Fuel It</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/field-notes">Field Notes</Link></li>
                <li><Link href="/stash">The Stash</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:info@cometfoundry.com">info@cometfoundry.com</a></li>
                <li><a href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply →</a></li>
                <li><Link href="/report-bug">Report a Bug</Link></li>
              </ul>
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/cometfoundry/" target="_blank" rel="noopener noreferrer" aria-label="Comet Foundry on LinkedIn">
                  <svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4V8z" /></svg>
                </a>
                <a href="https://www.instagram.com/cometfoundry" target="_blank" rel="noopener noreferrer" aria-label="Comet Foundry on Instagram">
                  <svg viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C20.32 1.35 19.65.94 18.86.63c-.76-.3-1.64-.5-2.91-.56C14.67.01 14.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.87a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" /></svg>
                </a>
                <a href="https://discord.com/invite/Hdg8VBFUW" target="_blank" rel="noopener noreferrer" aria-label="Comet Foundry on Discord">
                  <svg viewBox="0 0 24 24"><path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.076.076 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.946 2.419-2.157 2.419z" /></svg>
                </a>
                <a href="https://github.com/Comet-Foundry" target="_blank" rel="noopener noreferrer" aria-label="Comet Foundry on GitHub">
                  <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                </a>
              </div>
            </div>
            <div>
              <h5>Legal</h5>
              <ul>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                <li><Link href="/donation-refund-policy">Donation & Refund Policy</Link></li>
                <li><Link href="/copyright-dmca-policy">Copyright & DMCA</Link></li>
                <li><Link href="/accessibility-statement">Accessibility Statement</Link></li>
                <li><Link href="/code-of-conduct">Code of Conduct</Link></li>
                <li><Link href="/non-discrimination-statement">Non-Discrimination</Link></li>
                <li><Link href="/ip-trademark-policy">IP & Trademark</Link></li>
                <li><Link href="/event-waiver">Event Waiver</Link></li>
                <li><Link href="/builder-acceptance-rulebook">Builder Rulebook</Link></li>
                <li><Link href="/vulnerability-disclosure-policy">Vulnerability Disclosure</Link></li>
                <li><Link href="/terms-of-use">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="mono">© 2026 Comet Foundry. All rights reserved.</span>
          <span className="footer-easter">Built by humans — every em dash placed manually. :)</span>
          <span className="mono fb-right">EST. 2026 / GLOBAL / CHAPTER 01 · UTD</span>
        </div>
      </div>
    </footer>
  );
}
