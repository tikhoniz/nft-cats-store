import connectDB from '@/lib/db'
import CatModel from '@/lib/models/cat-model'
import { NextRequest } from 'next/server'

// GET /api/cats
export const POST = async (request: NextRequest) => {
  try {
    await connectDB()
    const { catData } = await request.json()

    const res = await CatModel.create(catData)

    console.log('res', res)

    // let cats = await CatModel.find({})

    // if (!cats) {
    //   return new Response('Cats not found', { status: 404 })
    // }

    return new Response(JSON.stringify(res), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new Response('Something Went Wrong', { status: 500 })
  }
}
