import './Landing.scss'

const year = new Date().getFullYear()

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

function Landing() {
  return (
    <div className="landing">
      <header className="landing__header">
        <div className="landing__inner">
          <a className="landing__brand" href="/">
            <span className="landing__mark" aria-hidden="true">
              R
            </span>
            ResearchOps
          </a>

          <a className="btn btn--ghost" href="/login">
            Log in
          </a>
        </div>
      </header>

      <main className="landing__main">
        <section className="landing__hero" aria-labelledby="hero-title">
          <div className="landing__inner">
            <p className="landing__eyebrow">Research workspace</p>
            <h1 id="hero-title" className="landing__title">
              Run your research without the spreadsheets.
            </h1>
            <p className="landing__lede">
              Collect studies, track participants and share findings in one calm
              workspace, built for small research teams.
            </p>

            <div className="landing__actions">
              <a className="btn btn--primary" href="/login">
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
          className="landing__features"
          aria-labelledby="features-title"
        >
          <div className="landing__inner">
            <h2 id="features-title" className="landing__features-title">
              What's inside
            </h2>

            <ul className="landing__grid">
              {features.map((feature) => (
                <li className="feature" key={feature.title}>
                  <h3 className="feature__title">{feature.title}</h3>
                  <p className="feature__body">{feature.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="landing__footer">
        <div className="landing__inner landing__footer-inner">
          <p>
            <strong>ResearchOps</strong> · All rights reserved
          </p>
          <p>© {year}</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
