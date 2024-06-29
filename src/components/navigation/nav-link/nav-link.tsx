'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import cls from './nav-link.module.css'
import { Mods, classNames } from '@/lib/classNames/classNames'

export default function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  const path = usePathname()

  const mods: Mods = {
    [cls.active]: path === href,
  }

  return (
    <Link href={href} className={classNames(cls.link, mods, [className])}>
      {children}
    </Link>
  )
}
