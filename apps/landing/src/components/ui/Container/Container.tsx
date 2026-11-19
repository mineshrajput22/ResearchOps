import type { ElementType, ReactNode } from 'react'
import { cx } from '@/lib/cx'
import styles from './Container.module.scss'

export type ContainerProps = {
  as?: ElementType
  className?: string
  children: ReactNode
}

export function Container({
  as: Tag = 'div',
  className,
  children,
}: ContainerProps) {
  return <Tag className={cx(styles.container, className)}>{children}</Tag>
}
