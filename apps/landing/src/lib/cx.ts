export type ClassValue = string | false | null | undefined

/** Joins truthy class names. Keeps conditional CSS-module classes readable. */
export function cx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ')
}
