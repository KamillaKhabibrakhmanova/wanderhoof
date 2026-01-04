import Image from "next/image";
import { client } from "../lib/sanity.client";
import { featuredPostsQuery } from "../lib/sanity.queries";
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

// Revalidate this page every hour
export const revalidate = 3600;

export default async function Home() {
  const posts: Post[] = await client.fetch(featuredPostsQuery);

  return (
    <main className="min-h-screen bg-cream -mt-10 md:-mt-20">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[65vh]">
        <Image
          src="/hero.JPEG"
          alt="Wanderhoof hero"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-20">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-fraunces text-deepgreen mb-6 tracking-tight">
            Latest Adventures
          </h1>
          <p className="text-lg md:text-xl text-deepgreen/70 max-w-3xl mx-auto leading-relaxed">
            Stories from the trail, guides for fellow travelers, and the joy of exploring the world on horseback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-x-12 md:gap-y-16 max-w-6xl mx-auto">
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
  