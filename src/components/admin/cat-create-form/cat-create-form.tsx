import { createCat } from '@/actions/cats-actions';
import CatsFormSubmit from '@/components/cats/cats-form-submit';
import { ImagesPicker } from '../images-picker/images-picker';
import { NFTPicker } from '../nft-picker/nft-picker';
import cls from './cat-create-form.module.css';

export const CatCreateForm = () => {
  return (
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
      <NFTPicker label="Cat image" name="image" />
      <ImagesPicker label="Cat images" name="images" />
      <p className={cls.actions}>
        <CatsFormSubmit />
      </p>
    </form>
  );
};
