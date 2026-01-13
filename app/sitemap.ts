import { MetadataRoute } from 'next'
import { client } from '../lib/sanity.client'
import { groq } from 'next-sanity'

// Filter to exclude drafts in production
const draftFilter = process.env.NODE_ENV === 'production'
  ? `&& !(_id in path('drafts.**'))`
  : '';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://wanderhoof.com'

  // Fetch all published posts
  const posts = await client.fetch(
    groq`*[_type == "post" ${draftFilter}]{
      slug,
      _updatedAt
    }`
  )

  const postUrls = posts.map((post: any) => ({
    url: `${baseUrl}/posts/${post.slug.current}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...postUrls,
  ]
}
