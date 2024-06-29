import CatsFormSubmit from '@/components/cats/cats-form-submit'
import ImagePicker from '@/components/cats/image-picker'
import { createCat } from '@/actions/cats-actions'
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
        <form className={cls.form} action={createCat}>
          <div className={cls.row}>
            <p className={cls.field}>
              <label htmlFor="name">Cat name</label>
              <input type="text" id="name" name="name" required />
            </p>
          </div>
          <p className={cls.field}>
            <label htmlFor="nft_link">NFT link</label>
            <input type="text" id="nft_link" name="nft_link" required />
          </p>
          <p className={cls.field}>
            <label htmlFor="short_story">Short Story</label>
            <input type="text" id="short_story" name="short_story" required />
          </p>
          <p className={cls.field}>
            <label htmlFor="history">History</label>
            <textarea id="history" name="history" rows={10} required></textarea>
          </p>
          <ImagePicker label="Cat image" name="image" />
          <p className={cls.actions}>
            <CatsFormSubmit />
          </p>
        </form>
      </main>
    </>
  )
}
