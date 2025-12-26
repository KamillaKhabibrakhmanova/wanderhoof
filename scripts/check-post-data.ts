import {createClient} from '@sanity/client'
import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({path: path.resolve(process.cwd(), '.env.local')})

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-01-01',
  useCdn: false,
})

async function checkPostData() {
  const post = await client.fetch(`*[_type == "post" && title match "Rancho Las Cascadas"][0]{
    title,
    postType,
    body,
    quickVerdict,
    gallery[0..2]{
      image{
        asset->{
          _id,
          url
        }
      },
      alt,
      caption
    }
  }`)

  console.log('Post data:', JSON.stringify(post, null, 2))
}

checkPostData().catch(console.error)
