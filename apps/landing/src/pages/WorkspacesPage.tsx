import { useDocumentTitle } from '../lib/useDocumentTitle'
import './WorkspacesPage.scss'

// Placeholder data until the workspaces API is connected.
const workspaces = [
  {
    id: 'customer-interviews',
    name: 'Customer interviews',
    role: 'Owner',
    studies: 4,
    updated: '2 hours ago',
  },
  {
    id: 'onboarding-study',
    name: 'Onboarding study',
    role: 'Editor',
    studies: 2,
    updated: 'Yesterday',
  },
  {
    id: 'pricing-research',
    name: 'Pricing research',
    role: 'Viewer',
    studies: 7,
    updated: 'Last week',
  },
]

function WorkspacesPage() {
  useDocumentTitle('Workspaces — ResearchOps')

  return (
    <section className="workspaces" aria-labelledby="workspaces-title">
      <div className="container">
        <header className="workspaces__header">
          <div>
            <h1 id="workspaces-title" className="workspaces__title">
              Workspaces
            </h1>
            <p className="workspaces__lede">
              Every study, participant and finding grouped by team.
            </p>
          </div>
          <span className="workspaces__count">{workspaces.length} total</span>
        </header>

        <ul className="workspaces__list">
          {workspaces.map((workspace) => (
            <li className="workspace-card" key={workspace.id}>
              <div>
                <h2 className="workspace-card__name">{workspace.name}</h2>
                <p className="workspace-card__meta">
                  {workspace.studies} studies · Updated {workspace.updated}
                </p>
              </div>
              <span className="workspace-card__badge">{workspace.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WorkspacesPage
