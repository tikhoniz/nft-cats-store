'use client'

import logoImg from '@/assets/logo.webp'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from '../navigation/mobile-menu/mobile-menu'
import NavLink from '../navigation/nav-link/nav-link'
import MainHeaderBackground from './main-header-background'
import cls from './main-header.module.css'

export default function MainHeader() {
  const isTablet = useMediaQuery(`(min-width: 768px)`)
  return (
    <>
      <MainHeaderBackground />
      <header className={cls.header}>
        <Link className={cls.logo} href={'/'}>
          <Image
            src={logoImg}
            width={100}
            height={100}
            alt="ElonMars"
            priority
            style={{ borderRadius: '50%' }}
          />
          Streetcatslives
        </Link>
        {isTablet ? (
          <nav className={cls.nav}>
            <ul>
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/cats">NFT Cats</NavLink>
              </li>
            </ul>
          </nav>
        ) : (
          <MobileMenu />
        )}
      </header>
    </>
  )
}
