import { groq } from "next-sanity";

export const allPostsQuery = groq`*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  excerpt
} | order(publishedAt desc)`;
