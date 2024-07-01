import { CatCreateForm } from '@/components/admin/cat-create-form/cat-create-form'
import cls from './page.module.css'

export default function createCatPage() {
  return (
    <>
      <header className={cls.header}>
        <h1>
          Create new <span className={cls.highlight}>cat</span>
        </h1>
      </header>
      <main className={cls.main}>
        <CatCreateForm />
      </main>
    </>
  )
}
