import { NextResponse } from 'next/server';
import { getHikingPhotos } from '@/lib/blob-utils';

export async function GET() {
  try {
    const photos = await getHikingPhotos();
    return NextResponse.json({ photos });
  } catch (error) {
    console.error('Error in hiking-photos API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch hiking photos' },
      { status: 500 }
    );
  }
}
