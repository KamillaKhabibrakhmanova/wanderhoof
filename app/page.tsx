import { client } from "../lib/sanity.client";
import { allPostsQuery } from "../lib/sanity.queries";
import PostCard from "./components/PostCard";

interface Post {
  _id: string;
  slug: { current: string };
  title: string;
  excerpt?: string;
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
}

export default async function Home() {
  const posts: Post[] = await client.fetch(allPostsQuery);

  return (
    <main className="min-h-screen" style={{backgroundColor: '#fdfaf6'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-fraunces text-deepgreen mb-4">
            Latest Adventures
          </h1>
          <p className="text-lg text-deepgreen/80 max-w-2xl mx-auto">
            Stories from the trail, guides for fellow travelers, and the joy of exploring the world on horseback.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              href={`/posts/${post.slug.current}`}
              title={post.title}
              subtitle={post.excerpt}
              img={post.mainImage?.asset?.url}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
  