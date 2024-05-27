import Link from 'next/link'
import cls from './main-footer.module.css'
import Image from 'next/image'
import logoImg from '@/assets/logo.webp'

export default function MainFooter() {
  return (
    <footer className={cls.footer}>
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
      <div className={cls.stamp}>
        <p>© 2024 All Rights Reserved.</p>
      </div>
    </footer>
  )
}
