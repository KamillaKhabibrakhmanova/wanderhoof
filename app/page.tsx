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

      <div className="content-container">
        {/* Main Tagline */}
        <div className="text-center mb-16 md:mb-24">
          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-deepgreen font-medium">
            The blog for those who love traveling on horseback...but have the unfortunate burden of working for a living. I'll help you figure out which horse adventures are worth saving for—and how to make them happen on a real person's budget and PTO.
          </p>
        </div>

        {/* Latest Adventures Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2>Latest Adventures</h2>
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
  