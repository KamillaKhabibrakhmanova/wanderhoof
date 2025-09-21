import imageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { client } from './sanity.client'

const builder = imageUrlBuilder(client)

export const urlFor = (src: Image) => builder.image(src)