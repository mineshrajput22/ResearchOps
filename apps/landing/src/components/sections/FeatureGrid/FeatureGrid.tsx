import { Container } from '@/components/ui/Container'
import type { FeaturesContent } from '@/config/site'
import styles from './FeatureGrid.module.scss'

export type FeatureGridProps = {
  content: FeaturesContent
}

export function FeatureGrid({ content }: FeatureGridProps) {
  return (
    <section
      id={content.id}
      className={styles.section}
      aria-labelledby="features-title"
    >
      <Container>
        <h2 id="features-title" className={styles.heading}>
          {content.title}
        </h2>

        <ul className={styles.grid}>
          {content.items.map((feature) => (
            <li className={styles.card} key={feature.title}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardBody}>{feature.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
