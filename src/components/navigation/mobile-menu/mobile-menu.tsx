'use client'

import { Drawer } from '@/components/drawer/drawer'
import { Portal } from '@/components/portal'
import { classNames } from '@/lib/classNames/classNames'
import { useMounted } from '@/lib/hooks/useMounted'
import { useState } from 'react'
import { MenuToggle } from '../menu-toggle/menu-toggle'
import NavLink from '../nav-link/nav-link'
import cls from './mobile-menu.module.css'

interface MobileMenuProps {
  className?: string
}

const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setOpen] = useState(false)

  const mounted = useMounted()

  return (
    <div className={classNames(cls.MobileMenu, {}, [className])}>
      <MenuToggle isOpen={isOpen} onClick={() => setOpen((prev) => !prev)} />
      {mounted && (
        <Portal element={document.querySelector('#portal') as HTMLElement}>
          <Drawer isOpen={isOpen}>
            <nav className={cls.nav}>
              <ul>
                <li onClick={() => setOpen(false)}>
                  <NavLink href="/">Home</NavLink>
                </li>
                <li onClick={() => setOpen(false)}>
                  <NavLink href="/cats">NFT Cats</NavLink>
                </li>
              </ul>
            </nav>
          </Drawer>
        </Portal>
      )}
    </div>
  )
}

export default MobileMenu
