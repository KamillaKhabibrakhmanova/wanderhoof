import {createClient} from '@sanity/client'
import * as dotenv from 'dotenv'
import * as path from 'path'

// Load environment variables from .env.local
dotenv.config({path: path.resolve(process.cwd(), '.env.local')})

// Create a client with write permissions (no CDN)
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

async function migrateGallery() {
  console.log('Starting gallery migration...')

  // Fetch all posts with galleries
  const posts = await client.fetch(`
    *[_type == "post" && defined(gallery) && length(gallery) > 0]{
      _id,
      title,
      gallery
    }
  `)

  console.log(`Found ${posts.length} post(s) with galleries`)

  for (const post of posts) {
    console.log(`\nMigrating post: ${post.title}`)

    // Check if gallery is already in new format
    const firstItem = post.gallery[0]
    if (firstItem && typeof firstItem === 'object' && 'image' in firstItem) {
      console.log('  ✓ Already in new format, skipping')
      continue
    }

    // Transform old format to new format
    const newGallery = post.gallery.map((imageRef: any, index: number) => ({
      _type: 'object',
      _key: `gallery-${Date.now()}-${index}`,
      image: imageRef,
      alt: 'Gallery image',
      caption: null,
    }))

    // Update the post
    try {
      await client
        .patch(post._id)
        .set({gallery: newGallery})
        .commit()

      console.log(`  ✓ Migrated ${post.gallery.length} image(s)`)
    } catch (error) {
      console.error(`  ✗ Error migrating post ${post._id}:`, error)
    }
  }

  console.log('\n✨ Migration complete!')
}

migrateGallery().catch(console.error)
