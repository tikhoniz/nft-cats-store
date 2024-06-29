import NavLink from '@/components/navigation/nav-link/nav-link'
import cls from './admin-header.module.css'

export default function AdminHeader() {
  return (
    <header className={cls.header}>
      <nav className={cls.nav}>
        <ul>
          <li>
            <NavLink href={'/admin'}>Admin panel</NavLink>
          </li>
          <li>
            <NavLink href={'/admin/create'}>Create cat</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
