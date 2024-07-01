'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import cls from './nft-picker.module.css'

export function NFTPicker({ label, name }: { label: string; name: string }) {
  const [pickedImage, setPickedImage] = useState<string | null>(null)

  const imageInputRef = useRef<HTMLInputElement | null>(null)

  function handlePickClick() {
    imageInputRef?.current!.click()
  }
  function handleImageChange(evt: any) {
    const file = evt.target.files[0]

    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result!.toString())
    }

    fileReader.readAsDataURL(file)
  }

  return (
    <div className={cls.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={cls.controls}>
        <div className={cls.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
              sizes="100vw"
            />
          )}
        </div>
        <input
          className={cls.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg, image/webp"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button className={cls.button} type="button" onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  )
}
