import { Suspense } from 'react'
import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router'
import { loginUrl, paths } from '../paths'
import './RootLayout.scss'

const year = new Date().getFullYear()

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link nav-link--active' : 'nav-link'

function RootLayout() {
  return (
    <div className="layout">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="layout__header">
        <div className="container layout__bar">
          <Link className="brand" to={paths.landing}>
            <span className="brand__mark" aria-hidden="true">
              R
            </span>
            ResearchOps
          </Link>

          <nav className="nav" aria-label="Primary">
            <NavLink className={navLinkClass} to={paths.workspaces}>
              Workspaces
            </NavLink>
            <a className="btn btn--ghost" href={loginUrl}>
              Log in
            </a>
          </nav>
        </div>
      </header>

      <main id="main" className="layout__main">
        <Suspense
          fallback={
            <p className="page-loader" role="status">
              Loading…
            </p>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <footer className="layout__footer">
        <div className="container layout__footer-inner">
          <p>
            <strong>ResearchOps</strong> · All rights reserved
          </p>
          <p>© {year}</p>
        </div>
      </footer>

      <ScrollRestoration />
    </div>
  )
}

export default RootLayout
