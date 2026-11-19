import type { ReactNode } from 'react'
import { site } from '@/config/site'
import { SiteFooter } from '../SiteFooter'
import { SiteHeader } from '../SiteHeader'
import styles from './SiteLayout.module.scss'

export type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>

      <SiteHeader brand={site.name} loginHref={site.loginHref} />

      <main id="main" className={styles.main}>
        {children}
      </main>

      <SiteFooter brand={site.name} />
    </div>
  )
}
