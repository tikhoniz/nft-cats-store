import { S3 } from '@aws-sdk/client-s3'
import slugify from 'slugify'
import { v4 as uuid } from 'uuid'
import xss from 'xss'
import connectDB from './db'
import CatModel from './models/cat-model'

const s3 = new S3({
  // очень важно чтобы регион совпадал с регионом создания
  region: 'us-west-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
})

export async function getCats() {
  await connectDB()
  let cats = await CatModel.find({})

  return cats
}

export async function saveCat(cat: any) {
  try {
    const unique = uuid().slice(0, 16)
    cat.slug = slugify(`${cat.name} ${unique}`, {
      lower: true,
      replacement: '_',
    })

    cat.history = xss(cat.history)

    const extension = cat.image.name.split('.').pop()
    const fileName = `${cat.slug}.${extension}`

    const bufferedImage = await cat.image.arrayBuffer()

    s3.putObject({
      Bucket: 'nft-cat-images',
      Key: fileName,
      Body: Buffer.from(bufferedImage),
      ContentType: cat.image.type,
    })

    cat.image = fileName

    await connectDB()
    await CatModel.create(cat)
  } catch (error) {
    return 'error'
  }
}
