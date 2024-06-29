import { classNames } from '@/lib/classNames/classNames'
import cls from './menu-toggle.module.css'

interface MenuToggleProps {
  className?: string
  onClick: () => void
  isOpen: boolean
}

export const MenuToggle = ({
  className,
  onClick,
  isOpen = false,
}: MenuToggleProps): JSX.Element => {
  return (
    <div className={classNames(cls.MenuToggle, {}, [className])}>
      <input
        type="checkbox"
        className={cls.cb}
        id="menu-cb"
        checked={isOpen}
        readOnly
      />
      <label className={cls.btn} htmlFor="menu-cb" onClick={onClick}></label>
    </div>
  )
}
