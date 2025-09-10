import {client} from '../../../lib/sanity.client'
import {PortableText} from '@portabletext/react'
import {groq} from 'next-sanity'

const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    body
  }`

interface PostPageProps {
  params: {slug: string}
}

export default async function PostPage({params}: PostPageProps) {
  const post = await client.fetch(postQuery, {slug: params.slug})

  if (!post) {
    return <p>Post not found</p>
  }

  return (
    <article className="prose mx-auto p-6 text-deepgreen bg-sage">
      <h1 className="text-terracotta">{post.title}</h1>
      <PortableText value={post.body} />
    </article>
  )
}
