import Image from 'next/image'
import Link from 'next/link'
import cls from './nft-image.module.css'

interface NFTImageProps {
  image?: string
  link?: string
  name?: string
}

export const NFTImage = ({ image, link, name }: NFTImageProps) => {
  return (
    <Link href={link || ''} rel="noopener noreferrer" target="_blank">
      <Image
        src={image || ''}
        alt={name || ''}
        width="0"
        height="0"
        sizes="100vw"
        className={cls.image}
      />
    </Link>
  )
}
