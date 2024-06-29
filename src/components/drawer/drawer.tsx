import type { JSX, ReactNode } from 'react'

import cls from './drawer.module.css'
import { Mods, classNames } from '@/lib/classNames/classNames'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen: boolean
}

export const Drawer = ({
  className,
  children,
  isOpen = false,
}: DrawerProps): JSX.Element => {
  const mods: Mods = {
    [cls.open]: isOpen,
  }

  return (
    <section className={classNames(cls.Drawer, mods, [className])}>
      {children}
    </section>
  )
}
