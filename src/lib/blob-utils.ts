import { list, del } from '@vercel/blob';

export interface BlobPhoto {
  url: string;
  pathname: string;
  filename: string;
  size: number;
  uploadedAt: Date;
}

export async function getHikingPhotos(): Promise<BlobPhoto[]> {
  try {
    // List all blobs in the Hiking-Photos/ directory
    const { blobs } = await list({
      prefix: 'Hiking-Photos/',
    });

    console.log('Raw blobs from Vercel:', blobs); // Debug logging

    // Filter and map the blobs to our photo format
    const photos = blobs
      .filter(blob => 
        // Only include image files
        /\.(jpg|jpeg|png|gif|webp)$/i.test(blob.pathname) &&
        // Exclude the directory itself
        blob.pathname !== 'Hiking-Photos/'
      )
      .map(blob => {
        // Ensure uploadedAt is properly converted to Date
        let uploadedAt: Date;
        try {
          uploadedAt = new Date(blob.uploadedAt);
          if (isNaN(uploadedAt.getTime())) {
            console.warn(`Invalid date for blob ${blob.pathname}:`, blob.uploadedAt);
            uploadedAt = new Date(); // Fallback to current date
          }
        } catch (error) {
          console.warn(`Error parsing date for blob ${blob.pathname}:`, error);
          uploadedAt = new Date(); // Fallback to current date
        }

        return {
          url: blob.url,
          pathname: blob.pathname,
          filename: blob.pathname.replace('Hiking-Photos/', ''),
          size: blob.size,
          uploadedAt,
        };
      })
      .sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime()); // Sort by newest first

    console.log('Processed photos:', photos); // Debug logging
    return photos;
  } catch (error) {
    console.error('Error fetching hiking photos from Blob:', error);
    return [];
  }
}

export async function deleteHikingPhoto(pathname: string): Promise<boolean> {
  try {
    await del(pathname);
    return true;
  } catch (error) {
    console.error('Error deleting photo from Blob:', error);
    return false;
  }
}
