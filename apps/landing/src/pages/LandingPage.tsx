import { loginUrl } from '../paths'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import './LandingPage.scss'

const features = [
  {
    title: 'Study plans',
    body: 'Write a plan once and keep every session, note and participant attached to it.',
  },
  {
    title: 'Participant tracker',
    body: 'See who is booked, who showed up and who still needs a follow-up.',
  },
  {
    title: 'Shared findings',
    body: 'Turn raw notes into a short readout your team can actually use.',
  },
]

function LandingPage() {
  useDocumentTitle('ResearchOps — Run your research without the spreadsheets')

  return (
    <>
      <section className="landing-hero" aria-labelledby="hero-title">
        <div className="container">
          <p className="landing-hero__eyebrow">Research workspace</p>
          <h1 id="hero-title" className="landing-hero__title">
            Run your research without the spreadsheets.
          </h1>
          <p className="landing-hero__lede">
            Collect studies, track participants and share findings in one calm
            workspace, built for small research teams.
          </p>

          <div className="landing-hero__actions">
            <a className="btn btn--primary" href={loginUrl}>
              Log in
            </a>
            <a className="btn btn--ghost" href="#features">
              See what's inside
            </a>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="features"
        aria-labelledby="features-title"
      >
        <div className="container">
          <h2 id="features-title" className="features__title">
            What's inside
          </h2>

          <ul className="features__grid">
            {features.map((feature) => (
              <li className="feature-card" key={feature.title}>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__body">{feature.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default LandingPage
