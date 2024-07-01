'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import cls from './images-picker.module.css'

export function ImagesPicker({ label, name }: { label: string; name: string }) {
  const [pickedImages, setPickedImages] = useState<string[]>([])

  const imageInputRef = useRef<HTMLInputElement | null>(null)

  function handlePickClick() {
    imageInputRef?.current!.click()
  }

  const handleImageChange = (e: any) => {
    const { files } = e.target

    // Clone the current images array
    const updatedImages = [...pickedImages]

    // Add the new files to the array
    for (const file of files) {
      const imageObjectUrl = URL.createObjectURL(file)
      updatedImages.push(imageObjectUrl)
    }

    setPickedImages(updatedImages)
  }

  return (
    <div className={cls.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={cls.controls}>
        <div className={cls.preview}>
          {pickedImages.length &&
            pickedImages.map((img, i) => (
              <div key={img + i} className={cls.pickedImage}>
                <Image
                  src={img}
                  alt="The image selected by the user"
                  fill
                  sizes="100vw"
                />
              </div>
            ))}
        </div>
        <input
          className={cls.input}
          type="file"
          ref={imageInputRef}
          id={name}
          accept="image/png, image/jpeg, image/webp"
          name={name}
          onChange={handleImageChange}
          required
          multiple
        />
        <button className={cls.button} type="button" onClick={handlePickClick}>
          Add Images
        </button>
      </div>
    </div>
  )
}
