import { Container } from '@/components/ui/Container'
import styles from './SiteFooter.module.scss'

const year = new Date().getFullYear()

export type SiteFooterProps = {
  brand: string
}

export function SiteFooter({ brand }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p>
          <span className={styles.brand}>{brand}</span> · All rights reserved
        </p>
        <p>© {year}</p>
      </Container>
    </footer>
  )
}
