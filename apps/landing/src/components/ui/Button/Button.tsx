import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { cx } from '@/lib/cx'
import styles from './Button.module.scss'

export type ButtonVariant = 'primary' | 'ghost'
export type ButtonSize = 'md' | 'lg'

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
  children: ReactNode
}

type ButtonAsLink = CommonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'className' | 'children' | 'href'
  > & {
    href: string
  }

type ButtonAsButton = CommonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'children'
  > & {
    href?: undefined
  }

export type ButtonProps = ButtonAsLink | ButtonAsButton

/**
 * Renders an <a> when `href` is provided, otherwise a <button>.
 * Variants and sizes are style-only, so the API stays the same for auth links.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cx(
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  )

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={rest.type ?? 'button'} {...rest}>
      {children}
    </button>
  )
}
