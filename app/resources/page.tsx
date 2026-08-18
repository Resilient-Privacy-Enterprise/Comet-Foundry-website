import Link from 'next/link';

export const metadata = {
  title: 'Free Resources - Coming Soon | Comet Foundry',
  description: 'Free tools and resources for student builders. Coming soon!',
};

export default function ResourcesPage() {
  return (
    <div className="page-resources-coming">
      <div className="page-hero">
        <div className="wrap">
          <div className="hero-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Resources</span>
          </div>
          <h1>Free Resources for Student Builders</h1>
          <p className="hero-lede">
            Curated free tools, tutorials, and resources for development, design, and more.
          </p>
        </div>
      </div>

      <section className="coming-soon-section">
        <div className="wrap">
          <div className="coming-soon-container">
            <style>{`
              @keyframes handwriteFloat {
                0%, 100% {
                  transform: translateY(0) rotate(-2deg);
                  opacity: 1;
                }
                50% {
                  transform: translateY(-8px) rotate(1deg);
                }
              }
              @keyframes handwriteWiggle {
                0%, 100% {
                  transform: rotate(-2deg);
                }
                25% {
                  transform: rotate(1deg);
                }
                75% {
                  transform: rotate(-1.5deg);
                }
              }
              .coming-soon-title {
                font-family: 'Caveat', 'Segoe Print', 'Comic Sans MS', cursive, sans-serif !important;
                font-size: 4.5rem !important;
                font-weight: 700 !important;
                letter-spacing: 2px;
                animation: handwriteWiggle 3s ease-in-out infinite;
                display: inline-block;
                transform-origin: center center;
              }
            `}</style>

            <div className="coming-soon-content">
              <h2 className="coming-soon-title">Coming Soon!</h2>

              <p className="coming-soon-message">
                We're building a treasure trove of free resources to save you money. Think GitHub repos, free courses, open-source tools, and premium alternatives that won't break your student budget.
              </p>

              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p className="fun-text">
                Our team is caffeinated and ready to share something amazing
              </p>

              <div className="cta-group">
                <p className="stay-posted">Know a free resource we should add?</p>
                <a href="https://forms.cloud.microsoft.com/r/uuxGbS5NJ3" target="_blank" rel="noopener">
                  <button className="back-btn" style={{ backgroundColor: '#2db82d', marginBottom: '1rem' }}>Submit a Resource →</button>
                </a>
                <p className="stay-posted">Or go back home</p>
                <Link href="/">
                  <button className="back-btn">← Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
