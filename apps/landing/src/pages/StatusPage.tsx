import { useEffect } from 'react'
import { Link, isRouteErrorResponse, useRouteError } from 'react-router'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { paths } from '../paths'
import './StatusPage.scss'

type StatusPageProps = {
  code: string
  title: string
  message: string
}

function StatusPage({ code, title, message }: StatusPageProps) {
  useDocumentTitle(`${title} — ResearchOps`)

  return (
    <section className="status">
      <p className="status__code">{code}</p>
      <h1 className="status__title">{title}</h1>
      <p className="status__message">{message}</p>
      <Link className="btn btn--primary" to={paths.landing}>
        Go to landing page
      </Link>
    </section>
  )
}

export function NotFoundPage() {
  return (
    <StatusPage
      code="404"
      title="Page not found"
      message="The page you were looking for doesn't exist or has moved."
    />
  )
}

export function RouteErrorPage() {
  const error = useRouteError()

  useEffect(() => {
    // Replace with your error reporter (Sentry, etc.).
    console.error(error)
  }, [error])

  const code = isRouteErrorResponse(error) ? String(error.status) : '500'

  return (
    <StatusPage
      code={code}
      title={code === '404' ? 'Page not found' : 'Something went wrong'}
      message="An unexpected error occurred. Try reloading the page."
    />
  )
}
