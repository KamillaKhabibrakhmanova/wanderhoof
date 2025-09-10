import { groq } from "next-sanity";

export const allPostsQuery = groq`*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt
} | order(publishedAt desc)`;
