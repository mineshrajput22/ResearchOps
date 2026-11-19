import { useEffect } from 'react'

/** Keeps the browser tab title in sync with the current page. */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title
  }, [title])
}
