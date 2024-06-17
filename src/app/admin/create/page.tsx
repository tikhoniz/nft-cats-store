import CatsFormSubmit from '@/components/cats/cats-form-submit'
import ImagePicker from '@/components/cats/image-picker'

import cls from './page.module.css'
import { createCat } from '@/actions/cats-actions'

export default function createCatPage() {
  return (
    <>
      <header className={cls.header}>
        <h1>
          Create new <span className={cls.highlight}>cat&apos;s NFT</span>
        </h1>
      </header>
      <main className={cls.main}>
        <form className={cls.form} action={createCat}>
          <div className={cls.row}>
            <p>
              <label htmlFor="name">Cat name</label>
              <input type="text" id="name" name="name" required />
            </p>
          </div>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="history">History</label>
            <textarea id="history" name="history" rows={10} required></textarea>
          </p>
          <ImagePicker label="Cat image" name="image" />
          {/* {state.message && <p>{state.message}</p>} */}
          <p className={cls.actions}>
            <CatsFormSubmit />
          </p>
        </form>
      </main>
    </>
  )
}
