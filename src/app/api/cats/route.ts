import connectDB from '@/lib/db';
import CatModel from '@/lib/models/cat-model';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

// GET /api/cats
export const GET = async (request: NextRequest) => {
  try {
    await connectDB();

    let cats = await CatModel.find({});

    if (!cats) {
      return new Response('Cats not found', { status: 404 });
    }

    return new Response(JSON.stringify(cats), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something Went Wrong', { status: 500 });
  }
};
