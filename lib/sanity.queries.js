import { groq } from "next-sanity";

// Filter to exclude drafts in production
const draftFilter = process.env.NODE_ENV === 'production'
  ? `&& !(_id in path('drafts.**'))`
  : '';

export const allPostsQuery = groq`*[_type == "post" ${draftFilter}]{
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
