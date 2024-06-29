'use client'

import { Cat } from '@/types/cats'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Spinner from '../../spinner'
import { CatDetailsSlider } from '../cat-details-slider/cat-details-slider'
import cls from './cat-details.module.css'

const CatDetails = () => {
  const params = useParams()
  const id = params.id as string

  const [cat, setCat] = useState<Cat | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCatData = async () => {
      if (!id) return
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_DOMAIN}/cats/${id}`,
          {
            cache: 'no-store',
          },
        )

        if (!res.ok) {
          throw Error('Failed to fetch data')
        }

        if (res.status === 200) {
          const data = await res.json()
          setCat(data)
        }
      } catch (error) {
        console.error('Error fetching cat: ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCatData()
  }, [id])

  if (loading) {
    return <Spinner loading={loading} />
  }

  return (
    <section className={cls.details}>
      <div className={cls.portrait}>
        <Link
          href={cat?.nft_link || '/'}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={`https://nft-cat-images.s3.us-west-1.amazonaws.com/${cat?.image}`}
            alt={cat?.name || ''}
            width="0"
            height="0"
            sizes="100vw"
            className={cls.image}
          />
        </Link>
        <div className={cls.description}>
          <h1 className={cls.name}>{cat?.name}</h1>
          <p className={cls.history}>{cat?.history}</p>
          <Link
            href={cat?.nft_link || '/'}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className={cls.buyBtn}>Buy now</button>
          </Link>
        </div>
      </div>
      <CatDetailsSlider images={cat?.images} />
    </section>
  )
}

export default CatDetails
