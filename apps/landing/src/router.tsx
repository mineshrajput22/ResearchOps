// This module exports router configuration, not a component, so Fast Refresh
// does not apply here.
/* oxlint-disable react/only-export-components */
import { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router'
import RootLayout from './layouts/RootLayout'
import LandingPage from './pages/LandingPage'
import { NotFoundPage, RouteErrorPage } from './pages/StatusPage'
import { paths } from './paths'

// The landing page is the entry point, so it stays in the main bundle.
// Everything behind navigation is split out.
const WorkspacesPage = lazy(() => import('./pages/WorkspacesPage'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        // Nested pathless route so errors render inside the site chrome.
        errorElement: <RouteErrorPage />,
        children: [
          {
            // Landing lives at the root as the index route. No redirect: a
            // redirect here would point "/" at itself and loop.
            index: true,
            element: <LandingPage />,
          },
          {
            path: paths.legacyLanding,
            element: <Navigate to={paths.landing} replace />,
          },
          {
            path: paths.workspaces,
            element: <WorkspacesPage />,
          },
          {
            path: '*',
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
])
