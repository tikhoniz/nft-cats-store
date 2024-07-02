import type { JSX, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  // something that teleports
  children: ReactNode
  // where to teleport
  element?: HTMLElement
}

export const Portal = (props: PortalProps): JSX.Element => {
  const { children, element = document.body } = props

  return createPortal(children, element)
}
