import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import type { HeroContent } from '@/config/site'
import styles from './Hero.module.scss'

export type HeroProps = {
  content: HeroContent
}

export function Hero({ content }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h1 id="hero-title" className={styles.title}>
            {content.title}
          </h1>
          <p className={styles.lede}>{content.lede}</p>

          <div className={styles.actions}>
            <Button href={content.primaryAction.href} size="lg">
              {content.primaryAction.label}
            </Button>
            <Button
              href={content.secondaryAction.href}
              variant="ghost"
              size="lg"
            >
              {content.secondaryAction.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
