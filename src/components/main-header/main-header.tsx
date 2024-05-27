import logoImg from '@/assets/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import MainHeaderBackground from './main-header-background'
import cls from './main-header.module.css'
import NavLink from '../nav-link/nav-link'

export default function MainHeader() {
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
      </header>
    </>
  )
}
