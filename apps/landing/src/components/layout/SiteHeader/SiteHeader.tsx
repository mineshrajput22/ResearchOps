import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import styles from './SiteHeader.module.scss'

export type SiteHeaderProps = {
  brand: string
  loginHref: string
}

export function SiteHeader({ brand, loginHref }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a className={styles.brand} href="/">
          <span className={styles.mark} aria-hidden="true">
            {brand.charAt(0)}
          </span>
          {brand}
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <Button href={loginHref} variant="ghost">
            Log in
          </Button>
        </nav>
      </Container>
    </header>
  )
}
