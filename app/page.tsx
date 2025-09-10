import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { client } from "../lib/sanity.client";
import { allPostsQuery } from "../lib/sanity.queries";

export default async function Home() {
  const posts = await client.fetch(allPostsQuery);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">WanderHoof Blog</h1>
      <div className="bg-blue-500 text-white p-10">Hello Tailwind</div>
      <ul className="mt-4 space-y-4">
        {posts.map((post: { _id: Key | null | undefined; slug: { current: any; }; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; }) => (
          <li key={post._id}>
            <a href={`/posts/${post.slug.current}`} className="text-blue-600">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
  