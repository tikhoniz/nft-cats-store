import connectDB from '@/lib/db'
import CatModel from '@/lib/models/cat-model'
import { NextRequest } from 'next/server'

// POST /api/cat/:id
export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    await connectDB()

    const { id: catId } = params

    const cat = await CatModel.findOne({ _id: catId })

    if (!cat) {
      return new Response('Cat not found', { status: 404 })
    }

    return new Response(JSON.stringify(cat), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new Response('Something Went Wrong', { status: 500 })
  }
}
